using TUnit.Engine.SourceGenerator.CodeGenerators;

namespace TUnit.Engine.SourceGenerator.Tests;

internal class DataSourceDrivenTests : TestsBase<TestsGenerator>
{
    [Test]
    public Task Test() => RunTest(Path.Combine(Git.RootDirectory.FullName,
            "TUnit.TestProject",
            "DataSourceDrivenTests.cs"),
        generatedFiles =>
        {
            Assert.That(generatedFiles.Length, Is.EqualTo(2));
            
            Assert.That(generatedFiles[0], Does.Contain("var methodArg0 = global::TUnit.TestProject.DataSourceDrivenTests.SomeMethod();"));
            Assert.That(generatedFiles[0], Does.Contain("classInstance.DataSource_Method(methodArg0)"));
            
            Assert.That(generatedFiles[1], Does.Contain("global::TUnit.TestProject.DataSourceDrivenTests.SomeClass methodArg0 = new global::TUnit.TestProject.DataSourceDrivenTests.SomeClass();"));
            Assert.That(generatedFiles[1], Does.Contain("classInstance.DataSource_Class(methodArg0)"));
        });
}