"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{41134:function(e,t,o){o.d(t,{Z:function(){return x}});var r=o(3827),a=o(64090),n=o(47907),s=o(777),c=o(16450),l=o(13810),i=o(92836),d=o(26734),h=o(41608),p=o(32126),u=o(23682),w=o(71801),m=o(42440),y=o(84174),f=o(50459),k=o(1460),g=o(99129),j=o(67951),x=e=>{var t;let{accessToken:o,publicPage:x,premiumUser:_}=e,[T,b]=(0,a.useState)(!1),[N,E]=(0,a.useState)(null),[P,A]=(0,a.useState)(!1),[Z,F]=(0,a.useState)(!1),[C,v]=(0,a.useState)(null),S=(0,n.useRouter)();(0,a.useEffect)(()=>{o&&(async()=>{try{let e=await (0,s.kn)(o);console.log("ModelHubData:",e),E(e.data),(0,s.E9)(o,"enable_public_model_hub").then(e=>{console.log("data: ".concat(JSON.stringify(e))),!0==e.field_value&&b(!0)}).catch(e=>{})}catch(e){console.error("There was an error fetching the model data",e)}})()},[o,x]);let O=e=>{v(e),A(!0)},z=async()=>{o&&(0,s.jA)(o,"enable_public_model_hub",!0).then(e=>{F(!0)})},B=()=>{A(!1),F(!1),v(null)},I=()=>{A(!1),F(!1),v(null)},G=e=>{navigator.clipboard.writeText(e)};return(0,r.jsxs)("div",{children:[x&&T||!1==x?(0,r.jsxs)("div",{className:"w-full m-2 mt-2 p-8",children:[(0,r.jsx)("div",{className:"relative w-full"}),(0,r.jsxs)("div",{className:"flex ".concat(x?"justify-between":"items-center"),children:[(0,r.jsx)(m.Z,{className:"ml-8 text-center ",children:"Model Hub"}),!1==x?_?(0,r.jsx)(c.Z,{className:"ml-4",onClick:()=>z(),children:"✨ Make Public"}):(0,r.jsx)(c.Z,{className:"ml-4",children:(0,r.jsx)("a",{href:"https://forms.gle/W3U4PZpJGFHWtHyA9",target:"_blank",children:"✨ Make Public"})}):(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("p",{children:"Filter by key:"}),(0,r.jsx)(w.Z,{className:"bg-gray-200 pr-2 pl-2 pt-1 pb-1 text-center",children:"/ui/model_hub?key=<YOUR_KEY>"})]})]}),(0,r.jsx)("div",{className:"grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4",children:N&&N.map(e=>(0,r.jsxs)(l.Z,{className:"mt-5 mx-8",children:[(0,r.jsxs)("pre",{className:"flex justify-between",children:[(0,r.jsx)(m.Z,{children:e.model_group}),(0,r.jsx)(k.Z,{title:e.model_group,children:(0,r.jsx)(y.Z,{onClick:()=>G(e.model_group),style:{cursor:"pointer",marginRight:"10px"}})})]}),(0,r.jsxs)("div",{className:"my-5",children:[(0,r.jsxs)(w.Z,{children:["Mode: ",e.mode]}),(0,r.jsxs)(w.Z,{children:["Supports Function Calling:"," ",(null==e?void 0:e.supports_function_calling)==!0?"Yes":"No"]}),(0,r.jsxs)(w.Z,{children:["Supports Vision:"," ",(null==e?void 0:e.supports_vision)==!0?"Yes":"No"]}),(0,r.jsxs)(w.Z,{children:["Max Input Tokens:"," ",(null==e?void 0:e.max_input_tokens)?null==e?void 0:e.max_input_tokens:"N/A"]}),(0,r.jsxs)(w.Z,{children:["Max Output Tokens:"," ",(null==e?void 0:e.max_output_tokens)?null==e?void 0:e.max_output_tokens:"N/A"]})]}),(0,r.jsx)("div",{style:{marginTop:"auto",textAlign:"right"},children:(0,r.jsxs)("a",{href:"#",onClick:()=>O(e),style:{color:"#1890ff",fontSize:"smaller"},children:["View more ",(0,r.jsx)(f.Z,{})]})})]},e.model_group))})]}):(0,r.jsxs)(l.Z,{className:"mx-auto max-w-xl mt-10",children:[(0,r.jsx)(w.Z,{className:"text-xl text-center mb-2 text-black",children:"Public Model Hub not enabled."}),(0,r.jsx)("p",{className:"text-base text-center text-slate-800",children:"Ask your proxy admin to enable this on their Admin UI."})]}),(0,r.jsx)(g.Z,{title:"Public Model Hub",width:600,visible:Z,footer:null,onOk:B,onCancel:I,children:(0,r.jsxs)("div",{className:"pt-5 pb-5",children:[(0,r.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,r.jsx)(w.Z,{className:"text-base mr-2",children:"Shareable Link:"}),(0,r.jsx)(w.Z,{className:"max-w-sm ml-2 bg-gray-200 pr-2 pl-2 pt-1 pb-1 text-center rounded",children:"<proxy_base_url>/ui/model_hub?key=<YOUR_API_KEY>"})]}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)(c.Z,{onClick:()=>{S.replace("/model_hub?key=".concat(o))},children:"See Page"})})]})}),(0,r.jsx)(g.Z,{title:C&&C.model_group?C.model_group:"Unknown Model",width:800,visible:P,footer:null,onOk:B,onCancel:I,children:C&&(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"mb-4",children:(0,r.jsx)("strong",{children:"Model Information & Usage"})}),(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(i.Z,{children:"OpenAI Python SDK"}),(0,r.jsx)(i.Z,{children:"Supported OpenAI Params"}),(0,r.jsx)(i.Z,{children:"LlamaIndex"}),(0,r.jsx)(i.Z,{children:"Langchain Py"})]}),(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(j.Z,{language:"python",children:'\nimport openai\nclient = openai.OpenAI(\n    api_key="your_api_key",\n    base_url="http://0.0.0.0:4000" # LiteLLM Proxy is OpenAI compatible, Read More: https://docs.litellm.ai/docs/proxy/user_keys\n)\n\nresponse = client.chat.completions.create(\n    model="'.concat(C.model_group,'", # model to send to the proxy\n    messages = [\n        {\n            "role": "user",\n            "content": "this is a test request, write a short poem"\n        }\n    ]\n)\n\nprint(response)\n            ')})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(j.Z,{language:"python",children:"".concat(null===(t=C.supported_openai_params)||void 0===t?void 0:t.map(e=>"".concat(e,"\n")).join(""))})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(j.Z,{language:"python",children:'\nimport os, dotenv\n\nfrom llama_index.llms import AzureOpenAI\nfrom llama_index.embeddings import AzureOpenAIEmbedding\nfrom llama_index import VectorStoreIndex, SimpleDirectoryReader, ServiceContext\n\nllm = AzureOpenAI(\n    engine="'.concat(C.model_group,'",               # model_name on litellm proxy\n    temperature=0.0,\n    azure_endpoint="http://0.0.0.0:4000", # litellm proxy endpoint\n    api_key="sk-1234",                    # litellm proxy API Key\n    api_version="2023-07-01-preview",\n)\n\nembed_model = AzureOpenAIEmbedding(\n    deployment_name="azure-embedding-model",\n    azure_endpoint="http://0.0.0.0:4000",\n    api_key="sk-1234",\n    api_version="2023-07-01-preview",\n)\n\n\ndocuments = SimpleDirectoryReader("llama_index_data").load_data()\nservice_context = ServiceContext.from_defaults(llm=llm, embed_model=embed_model)\nindex = VectorStoreIndex.from_documents(documents, service_context=service_context)\n\nquery_engine = index.as_query_engine()\nresponse = query_engine.query("What did the author do growing up?")\nprint(response)\n\n            ')})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(j.Z,{language:"python",children:'\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.prompts.chat import (\n    ChatPromptTemplate,\n    HumanMessagePromptTemplate,\n    SystemMessagePromptTemplate,\n)\nfrom langchain.schema import HumanMessage, SystemMessage\n\nchat = ChatOpenAI(\n    openai_api_base="http://0.0.0.0:4000",\n    model = "'.concat(C.model_group,'",\n    temperature=0.1\n)\n\nmessages = [\n    SystemMessage(\n        content="You are a helpful assistant that im using to make a test request to."\n    ),\n    HumanMessage(\n        content="test from litellm. tell me why it\'s amazing in 1 sentence"\n    ),\n]\nresponse = chat(messages)\n\nprint(response)\n\n            ')})})]})]})]})})]})}},777:function(e,t,o){o.d(t,{AZ:function(){return k},Au:function(){return O},BL:function(){return L},Br:function(){return m},E9:function(){return K},EY:function(){return Q},FC:function(){return A},Gh:function(){return R},HK:function(){return P},I1:function(){return u},J$:function(){return E},K_:function(){return X},N8:function(){return T},NV:function(){return l},Nc:function(){return J},O3:function(){return q},OU:function(){return C},Og:function(){return c},Ov:function(){return p},Qy:function(){return f},RQ:function(){return d},Rg:function(){return x},So:function(){return b},Xd:function(){return B},Xm:function(){return y},YU:function(){return Y},Zr:function(){return i},ao:function(){return W},b1:function(){return F},cu:function(){return V},e2:function(){return z},fP:function(){return _},hT:function(){return G},hy:function(){return s},jA:function(){return D},jE:function(){return H},kK:function(){return n},kn:function(){return g},lg:function(){return I},mR:function(){return N},o6:function(){return j},pf:function(){return U},qm:function(){return a},rs:function(){return w},tN:function(){return Z},um:function(){return M},wX:function(){return h},wd:function(){return v},xA:function(){return S}});var r=o(80588);let a=async()=>{try{let e=await fetch("https://raw.githubusercontent.com/BerriAI/litellm/main/model_prices_and_context_window.json"),t=await e.json();return console.log("received data: ".concat(t)),t}catch(e){throw console.error("Failed to get model cost map:",e),e}},n=async(e,t)=>{try{let o=await fetch("/model/new",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({...t})});if(!o.ok){let e=await o.text();throw r.ZP.error("Failed to create key: "+e,10),console.error("Error response from the server:",e),Error("Network response was not ok")}let a=await o.json();return console.log("API Response:",a),r.ZP.success("Model created successfully. Wait 60s and refresh on 'All Models' page"),a}catch(e){throw console.error("Failed to create key:",e),e}},s=async e=>{try{let t=await fetch("/model/settings",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw r.ZP.error(e,10),Error("Network response was not ok")}return await t.json()}catch(e){throw console.error("Failed to get callbacks:",e),e}},c=async(e,t)=>{console.log("model_id in model delete call: ".concat(t));try{let o=await fetch("/model/delete",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({id:t})});if(!o.ok){let e=await o.text();throw r.ZP.error("Failed to create key: "+e,10),console.error("Error response from the server:",e),Error("Network response was not ok")}let a=await o.json();return console.log("API Response:",a),r.ZP.success("Model deleted successfully. Restart server to see this."),a}catch(e){throw console.error("Failed to create key:",e),e}},l=async(e,t)=>{if(console.log("budget_id in budget delete call: ".concat(t)),null!=e)try{let o=await fetch("/budget/delete",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({id:t})});if(!o.ok){let e=await o.text();throw r.ZP.error("Failed to create key: "+e,10),console.error("Error response from the server:",e),Error("Network response was not ok")}let a=await o.json();return console.log("API Response:",a),a}catch(e){throw console.error("Failed to create key:",e),e}},i=async(e,t)=>{try{console.log("Form Values in budgetCreateCall:",t),console.log("Form Values after check:",t);let o=await fetch("/budget/new",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({...t})});if(!o.ok){let e=await o.text();throw r.ZP.error("Failed to create key: "+e,10),console.error("Error response from the server:",e),Error("Network response was not ok")}let a=await o.json();return console.log("API Response:",a),a}catch(e){throw console.error("Failed to create key:",e),e}},d=async e=>{try{let t=await fetch("/alerting/settings",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw r.ZP.error(e,10),Error("Network response was not ok")}return await t.json()}catch(e){throw console.error("Failed to get callbacks:",e),e}},h=async(e,t,o)=>{try{if(console.log("Form Values in keyCreateCall:",o),o.description&&(o.metadata||(o.metadata={}),o.metadata.description=o.description,delete o.description,o.metadata=JSON.stringify(o.metadata)),o.metadata){console.log("formValues.metadata:",o.metadata);try{o.metadata=JSON.parse(o.metadata)}catch(e){throw r.ZP.error("Failed to parse metadata: "+e,10),Error("Failed to parse metadata: "+e)}}console.log("Form Values after check:",o);let a=await fetch("/key/generate",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({user_id:t,...o})});if(!a.ok){let e=await a.text();throw r.ZP.error("Failed to create key: "+e,10),console.error("Error response from the server:",e),Error("Network response was not ok")}let n=await a.json();return console.log("API Response:",n),n}catch(e){throw console.error("Failed to create key:",e),e}},p=async(e,t,o)=>{try{if(console.log("Form Values in keyCreateCall:",o),o.description&&(o.metadata||(o.metadata={}),o.metadata.description=o.description,delete o.description,o.metadata=JSON.stringify(o.metadata)),o.metadata){console.log("formValues.metadata:",o.metadata);try{o.metadata=JSON.parse(o.metadata)}catch(e){throw r.ZP.error("Failed to parse metadata: "+e,10),Error("Failed to parse metadata: "+e)}}console.log("Form Values after check:",o);let a=await fetch("/user/new",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({user_id:t,...o})});if(!a.ok){let e=await a.text();throw r.ZP.error("Failed to create key: "+e,10),console.error("Error response from the server:",e),Error("Network response was not ok")}let n=await a.json();return console.log("API Response:",n),n}catch(e){throw console.error("Failed to create key:",e),e}},u=async(e,t)=>{try{console.log("in keyDeleteCall:",t);let o=await fetch("/key/delete",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({keys:[t]})});if(!o.ok){let e=await o.text();throw r.ZP.error("Failed to delete key: "+e,10),Error("Network response was not ok")}let a=await o.json();return console.log(a),a}catch(e){throw console.error("Failed to create key:",e),e}},w=async(e,t)=>{try{console.log("in teamDeleteCall:",t);let o=await fetch("/team/delete",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({team_ids:[t]})});if(!o.ok){let e=await o.text();throw r.ZP.error("Failed to delete team: "+e,10),Error("Network response was not ok")}let a=await o.json();return console.log(a),a}catch(e){throw console.error("Failed to delete key:",e),e}},m=async function(e,t,o){let a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0;try{let c="/user/info";"App Owner"==o&&t&&(c="".concat(c,"?user_id=").concat(t)),"App User"==o&&t&&(c="".concat(c,"?user_id=").concat(t)),console.log("in userInfoCall viewAll=",a),a&&s&&null!=n&&void 0!=n&&(c="".concat(c,"?view_all=true&page=").concat(n,"&page_size=").concat(s));let l=await fetch(c,{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!l.ok){let e=await l.text();throw r.ZP.error(e,10),Error("Network response was not ok")}let i=await l.json();return console.log("API Response:",i),i}catch(e){throw console.error("Failed to create key:",e),e}},y=async(e,t)=>{try{let o="/team/info";t&&(o="".concat(o,"?team_id=").concat(t)),console.log("in teamInfoCall");let a=await fetch(o,{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!a.ok){let e=await a.text();throw r.ZP.error(e,10),Error("Network response was not ok")}let n=await a.json();return console.log("API Response:",n),n}catch(e){throw console.error("Failed to create key:",e),e}},f=async e=>{try{let t=await fetch("/global/spend",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw r.ZP.error(e,10),Error("Network response was not ok")}return await t.json()}catch(e){throw console.error("Failed to create key:",e),e}},k=async(e,t,o)=>{try{let t=await fetch("/v2/model/info",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw r.ZP.error(e,10),Error("Network response was not ok")}let o=await t.json();return console.log("modelInfoCall:",o),o}catch(e){throw console.error("Failed to create key:",e),e}},g=async e=>{try{let t=await fetch("/model_group/info",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw r.ZP.error(e,10),Error("Network response was not ok")}let o=await t.json();return console.log("modelHubCall:",o),o}catch(e){throw console.error("Failed to create key:",e),e}},j=async(e,t,o,a,n,s)=>{try{let t="/model/metrics";a&&(t="".concat(t,"?_selected_model_group=").concat(a,"&startTime=").concat(n,"&endTime=").concat(s));let o=await fetch(t,{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!o.ok){let e=await o.text();throw r.ZP.error(e,10),Error("Network response was not ok")}return await o.json()}catch(e){throw console.error("Failed to create key:",e),e}},x=async(e,t,o,a)=>{try{let n="/model/streaming_metrics";t&&(n="".concat(n,"?_selected_model_group=").concat(t,"&startTime=").concat(o,"&endTime=").concat(a));let s=await fetch(n,{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!s.ok){let e=await s.text();throw r.ZP.error(e,10),Error("Network response was not ok")}return await s.json()}catch(e){throw console.error("Failed to create key:",e),e}},_=async(e,t,o,a,n,s)=>{try{let t="/model/metrics/slow_responses";a&&(t="".concat(t,"?_selected_model_group=").concat(a,"&startTime=").concat(n,"&endTime=").concat(s));let o=await fetch(t,{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!o.ok){let e=await o.text();throw r.ZP.error(e,10),Error("Network response was not ok")}return await o.json()}catch(e){throw console.error("Failed to create key:",e),e}},T=async(e,t,o,a,n,s)=>{try{let t="/model/metrics/exceptions";a&&(t="".concat(t,"?_selected_model_group=").concat(a,"&startTime=").concat(n,"&endTime=").concat(s));let o=await fetch(t,{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!o.ok){let e=await o.text();throw r.ZP.error(e,10),Error("Network response was not ok")}return await o.json()}catch(e){throw console.error("Failed to create key:",e),e}},b=async(e,t,o)=>{try{let t=await fetch("/models",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw r.ZP.error(e,10),Error("Network response was not ok")}return await t.json()}catch(e){throw console.error("Failed to create key:",e),e}},N=async e=>{try{let t="/global/spend/teams";console.log("in teamSpendLogsCall:",t);let o=await fetch("".concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!o.ok){let e=await o.text();throw r.ZP.error(e,10),Error("Network response was not ok")}let a=await o.json();return console.log(a),a}catch(e){throw console.error("Failed to create key:",e),e}},E=async(e,t,o)=>{try{let r="/global/spend/tags";t&&o&&(r="".concat(r,"?start_date=").concat(t,"&end_date=").concat(o)),console.log("in tagsSpendLogsCall:",r);let a=await fetch("".concat(r),{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!a.ok)throw await a.text(),Error("Network response was not ok");let n=await a.json();return console.log(n),n}catch(e){throw console.error("Failed to create key:",e),e}},P=async(e,t,o,a,n,s)=>{try{console.log("user role in spend logs call: ".concat(o));let t="/spend/logs";t="App Owner"==o?"".concat(t,"?user_id=").concat(a,"&start_date=").concat(n,"&end_date=").concat(s):"".concat(t,"?start_date=").concat(n,"&end_date=").concat(s);let c=await fetch(t,{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!c.ok){let e=await c.text();throw r.ZP.error(e,10),Error("Network response was not ok")}let l=await c.json();return console.log(l),l}catch(e){throw console.error("Failed to create key:",e),e}},A=async e=>{try{let t=await fetch("/global/spend/logs",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw r.ZP.error(e,10),Error("Network response was not ok")}let o=await t.json();return console.log(o),o}catch(e){throw console.error("Failed to create key:",e),e}},Z=async e=>{try{let t=await fetch("/global/spend/keys?limit=5",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw r.ZP.error(e,10),Error("Network response was not ok")}let o=await t.json();return console.log(o),o}catch(e){throw console.error("Failed to create key:",e),e}},F=async(e,t,o,a)=>{try{let n="";n=t?JSON.stringify({api_key:t,startTime:o,endTime:a}):JSON.stringify({startTime:o,endTime:a});let s={method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}};s.body=n;let c=await fetch("/global/spend/end_users",s);if(!c.ok){let e=await c.text();throw r.ZP.error(e,10),Error("Network response was not ok")}let l=await c.json();return console.log(l),l}catch(e){throw console.error("Failed to create key:",e),e}},C=async(e,t,o,a)=>{try{let n="/global/spend/provider";o&&a&&(n+="?start_date=".concat(o,"&end_date=").concat(a)),t&&(n+="&api_key=".concat(t));let s=await fetch(n,{method:"GET",headers:{Authorization:"Bearer ".concat(e)}});if(!s.ok){let e=await s.text();throw r.ZP.error(e,10),Error("Network response was not ok")}let c=await s.json();return console.log(c),c}catch(e){throw console.error("Failed to fetch spend data:",e),e}},v=async(e,t,o)=>{try{let r="/global/activity";t&&o&&(r+="?start_date=".concat(t,"&end_date=").concat(o));let a=await fetch(r,{method:"GET",headers:{Authorization:"Bearer ".concat(e)}});if(!a.ok)throw await a.text(),Error("Network response was not ok");let n=await a.json();return console.log(n),n}catch(e){throw console.error("Failed to fetch spend data:",e),e}},S=async(e,t,o)=>{try{let r="/global/activity/model";t&&o&&(r+="?start_date=".concat(t,"&end_date=").concat(o));let a=await fetch(r,{method:"GET",headers:{Authorization:"Bearer ".concat(e)}});if(!a.ok)throw await a.text(),Error("Network response was not ok");let n=await a.json();return console.log(n),n}catch(e){throw console.error("Failed to fetch spend data:",e),e}},O=async e=>{try{let t=await fetch("/global/spend/models?limit=5",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw r.ZP.error(e,10),Error("Network response was not ok")}let o=await t.json();return console.log(o),o}catch(e){throw console.error("Failed to create key:",e),e}},z=async(e,t)=>{try{let o=await fetch("/v2/key/info",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({keys:t})});if(!o.ok){let e=await o.text();throw r.ZP.error(e,10),Error("Network response was not ok")}let a=await o.json();return console.log(a),a}catch(e){throw console.error("Failed to create key:",e),e}},B=async(e,t)=>{try{let o="/user/get_users?role=".concat(t);console.log("in userGetAllUsersCall:",o);let a=await fetch(o,{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!a.ok){let e=await a.text();throw r.ZP.error("Failed to delete key: "+e,10),Error("Network response was not ok")}let n=await a.json();return console.log(n),n}catch(e){throw console.error("Failed to get requested models:",e),e}},I=async e=>{try{let t=await fetch("/user/available_roles",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok)throw await t.text(),Error("Network response was not ok");let o=await t.json();return console.log("response from user/available_role",o),o}catch(e){throw e}},G=async(e,t)=>{try{console.log("Form Values in teamCreateCall:",t);let o=await fetch("/team/new",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({...t})});if(!o.ok){let e=await o.text();throw r.ZP.error("Failed to create key: "+e,10),console.error("Error response from the server:",e),Error("Network response was not ok")}let a=await o.json();return console.log("API Response:",a),a}catch(e){throw console.error("Failed to create key:",e),e}},J=async(e,t)=>{try{console.log("Form Values in keyUpdateCall:",t);let o=await fetch("/key/update",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({...t})});if(!o.ok){let e=await o.text();throw r.ZP.error("Failed to update key: "+e,10),console.error("Error response from the server:",e),Error("Network response was not ok")}let a=await o.json();return console.log("Update key Response:",a),a}catch(e){throw console.error("Failed to create key:",e),e}},R=async(e,t)=>{try{console.log("Form Values in teamUpateCall:",t);let o=await fetch("/team/update",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({...t})});if(!o.ok){let e=await o.text();throw r.ZP.error("Failed to update team: "+e,10),console.error("Error response from the server:",e),Error("Network response was not ok")}let a=await o.json();return console.log("Update Team Response:",a),a}catch(e){throw console.error("Failed to create key:",e),e}},M=async(e,t)=>{try{console.log("Form Values in modelUpateCall:",t);let o=await fetch("/model/update",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({...t})});if(!o.ok){let e=await o.text();throw r.ZP.error("Failed to update model: "+e,10),console.error("Error update from the server:",e),Error("Network response was not ok")}let a=await o.json();return console.log("Update model Response:",a),a}catch(e){throw console.error("Failed to update model:",e),e}},V=async(e,t,o)=>{try{console.log("Form Values in teamMemberAddCall:",o);let a=await fetch("/team/member_add",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({team_id:t,member:o})});if(!a.ok){let e=await a.text();throw r.ZP.error("Failed to create key: "+e,10),console.error("Error response from the server:",e),Error("Network response was not ok")}let n=await a.json();return console.log("API Response:",n),n}catch(e){throw console.error("Failed to create key:",e),e}},U=async(e,t,o)=>{try{console.log("Form Values in userUpdateUserCall:",t);let a={...t};null!==o&&(a.user_role=o),a=JSON.stringify(a);let n=await fetch("/user/update",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:a});if(!n.ok){let e=await n.text();throw r.ZP.error("Failed to create key: "+e,10),console.error("Error response from the server:",e),Error("Network response was not ok")}let s=await n.json();return console.log("API Response:",s),s}catch(e){throw console.error("Failed to create key:",e),e}},H=async(e,t)=>{try{let o="/health/services?service=".concat(t);console.log("Checking Slack Budget Alerts service health");let a=await fetch(o,{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!a.ok){let e=await a.text();throw r.ZP.error("Failed ".concat(t," service health check ")+e),Error(e)}let n=await a.json();return r.ZP.success("Test request to ".concat(t," made - check logs/alerts on ").concat(t," to verify")),n}catch(e){throw console.error("Failed to perform health check:",e),e}},q=async e=>{try{let t=await fetch("/budget/list",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw r.ZP.error(e,10),Error("Network response was not ok")}return await t.json()}catch(e){throw console.error("Failed to get callbacks:",e),e}},L=async(e,t,o)=>{try{let t=await fetch("/get/config/callbacks",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw r.ZP.error(e,10),Error("Network response was not ok")}return await t.json()}catch(e){throw console.error("Failed to get callbacks:",e),e}},Y=async e=>{try{let t=await fetch("/config/list?config_type=general_settings",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw r.ZP.error(e,10),Error("Network response was not ok")}return await t.json()}catch(e){throw console.error("Failed to get callbacks:",e),e}},K=async(e,t)=>{try{let o=await fetch("/config/field/info?field_name=".concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!o.ok)throw await o.text(),Error("Network response was not ok");return await o.json()}catch(e){throw console.error("Failed to set callbacks:",e),e}},D=async(e,t,o)=>{try{let a=await fetch("/config/field/update",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({field_name:t,field_value:o,config_type:"general_settings"})});if(!a.ok){let e=await a.text();throw r.ZP.error(e,10),Error("Network response was not ok")}let n=await a.json();return r.ZP.success("Successfully updated value!"),n}catch(e){throw console.error("Failed to set callbacks:",e),e}},W=async(e,t)=>{try{let o=await fetch("/config/field/delete",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({field_name:t,config_type:"general_settings"})});if(!o.ok){let e=await o.text();throw r.ZP.error(e,10),Error("Network response was not ok")}let a=await o.json();return r.ZP.success("Field reset on proxy"),a}catch(e){throw console.error("Failed to get callbacks:",e),e}},X=async(e,t)=>{try{let o=await fetch("/config/update",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({...t})});if(!o.ok){let e=await o.text();throw r.ZP.error(e,10),Error("Network response was not ok")}return await o.json()}catch(e){throw console.error("Failed to set callbacks:",e),e}},Q=async e=>{try{let t=await fetch("/health",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw r.ZP.error(e),Error("Network response was not ok")}return await t.json()}catch(e){throw console.error("Failed to call /health:",e),e}}}}]);