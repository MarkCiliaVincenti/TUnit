"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[6538],{4667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"tutorial-extras/not-in-parallel","title":"Not in Parallel","description":"By default, TUnit tests will run in parallel.","source":"@site/docs/tutorial-extras/not-in-parallel.md","sourceDirName":"tutorial-extras","slug":"/tutorial-extras/not-in-parallel","permalink":"/TUnit/docs/tutorial-extras/not-in-parallel","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Explicit","permalink":"/TUnit/docs/tutorial-extras/explicit"},"next":{"title":"Depends On","permalink":"/TUnit/docs/tutorial-extras/depends-on"}}');var a=n(4848),r=n(8453);const l={sidebar_position:10},i="Not in Parallel",o={},c=[];function d(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"not-in-parallel",children:"Not in Parallel"})}),"\n",(0,a.jsx)(t.p,{children:"By default, TUnit tests will run in parallel."}),"\n",(0,a.jsxs)(t.p,{children:["To remove this behaviour, we can add a ",(0,a.jsx)(t.code,{children:"[NotInParallel]"})," attribute to our test methods or classes."]}),"\n",(0,a.jsx)(t.p,{children:"This also takes an optional array of constraint keys."}),"\n",(0,a.jsx)(t.p,{children:"If no constraint keys are supplied, then the test will only be run by itself.\nIf any constraint keys are set, the test will not be run alongside any other tests with any of those same keys. However it may still run in parallel alongside tests with other constraint keys."}),"\n",(0,a.jsxs)(t.p,{children:["For the example below, ",(0,a.jsx)(t.code,{children:"MyTest"})," and ",(0,a.jsx)(t.code,{children:"MyTest2"})," will not run in parallel with each other because of the common ",(0,a.jsx)(t.code,{children:"DatabaseTest"})," constraint key, but ",(0,a.jsx)(t.code,{children:"MyTest3"})," may run in parallel with the other two."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:'using TUnit.Core;\n\nnamespace MyTestProject;\n\npublic class MyTestClass\n{\n    private const string DatabaseTest = "DatabaseTest";\n    private const string RegistrationTest = "RegistrationTest";\n    private const string ParallelTest = "ParallelTest";\n\n    [Test]\n    [NotInParallel(DatabaseTest)]\n    public async Task MyTest()\n    {\n        \n    }\n\n    [Test]\n    [NotInParallel(DatabaseTest, RegistrationTest)]\n    public async Task MyTest2()\n    {\n        \n    }\n\n    [Test]\n    [NotInParallel(ParallelTest)]\n    public async Task MyTest3()\n    {\n        \n    }\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var s=n(6540);const a={},r=s.createContext(a);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);