﻿using System.Text.Json;
using Microsoft.Testing.Platform.CommandLine;
using TUnit.Core;
using TUnit.Engine.CommandLineProviders;
using TUnit.Engine.Extensions;
using TUnit.Engine.Hooks;
using TUnit.Engine.Json;
using TUnit.Engine.Logging;

namespace TUnit.Engine.Services;

internal class OnEndExecutor
{
    private readonly ICommandLineOptions _commandLineOptions;
    private readonly TUnitLogger _logger;

    public OnEndExecutor(ICommandLineOptions commandLineOptions, TUnitLogger logger)
    {
        _commandLineOptions = commandLineOptions;
        _logger = logger;
    }

    public async Task ExecuteAsync()
    {
        try
        {
            await WriteJsonOutputFile();
        }
        catch (Exception e)
        {
            await _logger.LogErrorAsync(e);
        }
    }

    private async Task WriteJsonOutputFile()
    {
        if (!_commandLineOptions.IsOptionSet(JsonOutputCommandProvider.OutputJson))
        {
            return;
        }

        try
        {
            var path = Path.Combine(Environment.CurrentDirectory, GetFilename());
        
            await using var file = File.Create(path);

            var jsonOutput = GetJsonOutput();
        
            await JsonSerializer.SerializeAsync(file, jsonOutput, JsonContext.Default.TestSessionJson);

            await _logger.LogInformationAsync($"TUnit JSON output saved to: {path}");
        }
        catch (Exception e)
        {
            await _logger.LogErrorAsync(e);
        }
    }

    private string GetFilename()
    {
        var prefix =
            _commandLineOptions.TryGetOptionArgumentList(JsonOutputCommandProvider.OutputJsonFilenamePrefix,
                out var prefixes)
                ? prefixes.First()
                : "tunit_jsonoutput_";
        
        var filename = _commandLineOptions.TryGetOptionArgumentList(JsonOutputCommandProvider.OutputJsonFilename,
            out var filenames)
            ? filenames.First()
            : Guid.NewGuid().ToString("N");
        
        return $"{prefix}{filename}.json";
    }

    private static TestSessionJson GetJsonOutput()
    {
        return new TestSessionContext(AssemblyHookOrchestrator.GetAllAssemblyHookContexts()).ToJsonModel();
    }
}