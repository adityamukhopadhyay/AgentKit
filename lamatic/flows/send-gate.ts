const flowConfig = {
  "id": "140f6dbd-0e02-4fd3-9b08-b3b3fa29710a",
  "name": "send-gate",
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
        "values": {
          "id": "triggerNode_1",
          "nodeName": "API Request",
          "responeType": "realtime",
          "advance_schema": "{\n  \"draft\": \"string\",\n  \"facts\": \"string\",\n  \"recipient\": \"string\",\n  \"policy\": \"string\",\n  \"needs_fact_check\": \"string\",\n  \"truth_url\": \"string\"\n}"
        },
        "trigger": true
      },
      "type": "triggerNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 0
      },
      "selected": false
    },
    {
      "id": "codeNode_211",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "codeNode",
        "schema": {
          "draft": "string",
          "facts": "object",
          "claims": "object",
          "counts": "object",
          "findings": "array",
          "recipient": "string",
          "fetchError": "string",
          "judgeInput": "string",
          "preVerdict": "string",
          "provenance": "string",
          "verifications": "array",
          "needsFactCheck": "boolean"
        },
        "values": {
          "code": "// GENERATED (npm run emit) from apps/lib. Do not edit.\nconst e={{triggerNode_1.output}},t=[\"raw.githubusercontent.com\"],r=e=>{const t=(e+\"\").replace(/[₹$€£]|rs\\.?|inr/gi,\"\").replace(/[,\\s]/g,\"\");return/^-?\\d+(\\.\\d+)?$/.test(t)?Number(t)+\"\":null},n=e=>(e+\"\").toLowerCase().replace(/\\s+/g,\" \").trim(),a=e=>(e+\"\").toUpperCase().replace(/[\\s\\-_#:]/g,\"\"),s=e=>{const t=(e+\"\").replace(/\\D/g,\"\");return t.length>10?t.slice(-10):t},o=(e,t)=>{if(null==e)return t;if(\"string\"==typeof e){const r=e.trim();if(!r)return t;try{return JSON.parse(r)}catch(e){return t}}return e},i=(e,t)=>t?(t+\"\").split(\".\").reduce((e,t)=>null==e?void 0:e[t],e):void 0,c=e=>(/^\\w/.test(e)?\"\\\\b\":\"\")+(e+\"\").replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\FLOW_CONFIG\")+(/\\w$/.test(e)?\"\\\\b\":\"\"),l=(e,t)=>t?Array.isArray(e.terms)&&e.terms.length?RegExp(\"(?:\"+e.terms.map(c).join(\"|\")+\")\",\"i\"):null:e.re,d=e=>Object.assign({formalAddress:!0,allowUngroundedSmallCounts:!0},o(e,{})||{}),u=\"janfebmaraprmayjunjulaugsepoctnovdec\",f=u.match(/.{3}/g).join(\"|\"),h=e=>{const t=n(e),r=t.match(/\\d+/g)||[],a=/[a-z]{3}/.exec(t),s=a?(u.indexOf(a[0])+3)/3|0:0;if(s)return(r.find(e=>4===e.length)||\"\")+\"-\"+s+\"-\"+ +(r.find(e=>e.length<3)||0);if(3!==r.length)return t;const o=4===r[0].length;return(o?r[0]:r[2].length<3?\"20\"+r[2]:r[2])+\"-\"+ +r[1]+\"-\"+ +(o?r[2]:r[0])},p=[[\"link\",/https?:\\/\\/[^\\s)>\\]]+/gi,e=>n(e.replace(/[.,;:!?]+$/,\"\"))],[\"phone\",/(?:\\+?91[\\s-]?)?[6-9]\\d{9}\\b/g,s],[\"date\",RegExp(\"\\\\b(\\\\d{1,4}[\\\\/.-]\\\\d{1,2}[\\\\/.-]\\\\d{2,4}|\\\\d{1,2}\\\\s+(?:\"+f+\")[a-z]*(?:\\\\s+\\\\d{4})?|(?:\"+f+\")[a-z]*\\\\s+\\\\d{1,2}(?:,?\\\\s+\\\\d{4})?)\\\\b\",\"gi\"),h],[\"identifier\",/\\b(?:[A-Z]{1,6}[-_ ]?\\d{3,}|\\d{3,}[-_]?[A-Z]{1,6}|[A-Z0-9]*\\d[A-Z0-9]*-[A-Z0-9-]{3,})\\b/g,a],[\"number\",/(?:[₹$€£]\\s?|\\b(?:rs\\.?|inr)\\s?)?-?\\d[\\d,]*(?:\\.\\d+)?\\s?(?:%|percent|lakh|lakhs|crore|k\\b)?/gi,null]],g=[{id:\"order_placed\",kind:\"order_status\",re:/\\b(order|po)\\b[^.!?\\n]{0,40}\\b(placed|confirmed|booked|ho gaya|lag gaya)\\b|\\b(placed|confirmed|booked)\\b[^.!?\\n]{0,20}\\border\\b/i,factPath:\"order.status\",expect:[\"placed\",\"confirmed\",\"booked\"],message:\"Order placed.\"},{id:\"delivered\",kind:\"order_status\",re:/\\b(delivered|deliver ho gaya|pahu?nch gaya)\\b/i,factPath:\"order.status\",expect:[\"delivered\"],message:\"Delivered.\"},{id:\"refund\",kind:\"refund\",re:/\\brefund(ed)?\\b[^.!?\\n]{0,30}\\b(issued|processed|credited|done|sent|initiated|ho gaya|kar diya)\\b/i,factPath:\"refund.status\",expect:[\"issued\",\"processed\",\"credited\",\"initiated\"],message:\"Refund done.\"},{id:\"offer\",kind:\"offer\",re:/\\b(discount|offer|cashback|voucher|coupon|off|free|muft|scheme)\\b/i,factPath:\"offers\",message:\"Offer.\"},{id:\"eta\",kind:\"delivery_eta\",re:/\\b(within|in|by)\\s+\\d+\\s*(min|hour|hr|day|ghant|din)|\\b(aaj|today|tomorrow|kal|tonight|subah|shaam|morning|evening)\\b[^.!?\\n]{0,25}\\b(deliver|pahunch|reach|aa jaa?yega)|\\b(deliver|pahunch|reach)\\w*\\b[^.!?\\n]{0,30}\\b(aaj|today|tomorrow|kal|tonight|by\\s+\\w+)\\b/i,factPath:\"eta\",message:\"ETA promised.\"},{id:\"payment\",kind:\"payment\",re:/\\b(payment|paisa|amount)\\b[^.!?\\n]{0,30}\\b(received|mil gaya|aa gaya|credited|confirmed)\\b/i,factPath:\"payment.status\",expect:[\"received\",\"paid\",\"confirmed\",\"credited\"],message:\"Payment received.\"},{id:\"guarantee\",kind:\"guarantee\",re:/\\b(guarantee|guaranteed|100%\\s*(sure|pakka)|pakka\\s*promise|zaroor milega)\\b/i,never:!0,message:\"Guarantee.\"}],m=/\\b(tu|tum|tera|teri|tere|tumhar[aei]|tujhe|tumhe|tumko)\\b/i,b=/\\b(bhenchod|madarchod|chutiya|bsdk|harami|kamina|saala|fuck|shit|bastard|idiot|stupid)\\b/i;function y(e,t,r){return null==e?r:Array.isArray(e)?(e.forEach((e,n)=>y(e,t+\"[\"+n+\"]\",r)),r):\"object\"==typeof e?(Object.keys(e).forEach(n=>y(e[n],t?t+\".\"+n:n,r)),r):(r.push([t||\"$\",e+\"\"]),r)}const k={currency:\"N\",percent:\"N\",count:\"N\",identifier:\"I\",date:\"D\",link:\"L\",phone:\"P\"},v=(e,t)=>null!=e&&(Array.isArray(e)?e.length>0&&(!t||e.some(e=>t.map(n).includes(n(e)))):\"object\"==typeof e?Object.keys(e).length>0:t?t.map(n).includes(n(e)):(e+\"\").trim().length>0),w=2e5;async function A(e,t){const r=e.body.getReader(),n=[];let a=0;for(;;){const{done:e,value:s}=await r.read();if(e)return new Blob(n).text();if((a+=s.length)>t)throw r.cancel(),Error(\"body too large\");n.push(s)}}const _=(e.draft||\"\")+\"\",j=(t=>{const n=(t||\"\")+\"\",a=d(e.policy),s=(e=>{const t=[],n=[],a=e=>{const t=e.index,r=t+e[0].length;for(const[e,a]of n)if(t<a&&r>e)return!1;return n.push([t,r]),!0};for(const[n,s,o]of p){let i;for(s.lastIndex=0;i=s.exec(e);){if(!a(i))continue;const e=i[0].trim();if(\"number\"!==n){t.push({kind:n,token:\"link\"===n?e.replace(/[.,;:!?]+$/,\"\"):e,value:o(e)});continue}const s=e.toLowerCase(),c=/lakh/.test(s)?1e5:/crore/.test(s)?1e7:/\\dk$/.test(s.replace(/\\s/g,\"\"))?1e3:1,l=r(s.replace(/%|percent|lakhs?|crores?|k$/g,\"\"));null!=l&&t.push({kind:/[₹$€£]|rs\\.?|inr/i.test(s)?\"currency\":/%|percent/.test(s)?\"percent\":\"count\",token:e,value:Number(l)*c+\"\"})}}return t.map((e,t)=>Object.assign({id:\"f\"+(t+1)},e))})(n),o=new Set(a.disableRules||[]),i=[],c=Array.isArray(a.statementRules)?a.statementRules:[];for(const e of g.concat(c)){if(!e||o.has(e.id))continue;const t=l(e,c.indexOf(e)>=0),r=t?n.match(t):null;r&&i.push({id:\"s\"+(i.length+1),rule:e.id,kind:e.kind||\"statement\",text:r[0],factPath:e.factPath||null,expect:e.expect||null,never:!!e.never,message:e.message||\"\"})}const u={informalAddress:!(!a.formalAddress||!m.test(n)),profanity:b.test(n)},f=s.filter(e=>!(a.allowUngroundedSmallCounts&&\"count\"===e.kind&&/^\\d$/.test(e.value))),h=u.profanity||f.length||i.length?\"high\":u.informalAddress?\"low\":\"none\";return{schemaVersion:\"1\",figures:s,statements:i,register:u,risk:h,needsFactCheck:\"none\"!==h||!!a.alwaysCheck}})(_);j.draft=_;const x=j.needsFactCheck||\"true\"===((e.needs_fact_check||\"\")+\"\").toLowerCase();let P=null,$=\"\";const O=((e.truth_url||\"\")+\"\").trim();x&&O&&({fetched:P,error:$}=await(async(e,r,a,s)=>{const o=e=>({fetched:null,error:e}),i=((e,t)=>{let r;try{r=new URL((e||\"\")+\"\")}catch(e){return\"truth_url: invalid URL\"}const a=r.hostname.toLowerCase(),s=(t||[]).map(n).filter(Boolean),o=\"https:\"!==r.protocol?\"https only\":r.username||r.password?\"no credentials\":/^\\[|^\\d+(\\.\\d+){3}$|^[^.]+$|\\.(local|internal|localhost)$/.test(a)?\"public host only\":s.length&&!s.some(e=>a===e||a.slice(-e.length-1)===\".\"+e)?\"host not on allow-list\":\"\";return o?\"truth_url: \"+o:null})(e,t);if(i)return o(i);const c={accept:\"application/json\"};s&&\"{\"!==s[0]&&(c.authorization=\"Bearer \"+s);try{const t=await fetch(e+(e.includes(\"?\")?\"&\":\"?\")+\"ids=\"+encodeURIComponent(r.join(\",\")),{headers:c,redirect:\"manual\",signal:AbortSignal.timeout(8e3)});return t.ok?{fetched:JSON.parse(await A(t,w)),error:\"\"}:(t.body&&t.body.cancel(),o(\"truth_url: HTTP \"+t.status))}catch(e){return o(\"truth_url: \"+(e&&e.message||e))}})(O,(j.figures||[]).filter(e=>\"identifier\"===e.kind).map(e=>e.token),0,\"{{secrets.project.TRUTH_TOKEN}}\"));const N=((t,r)=>{const n=e=>!!e&&\"object\"==typeof e&&!Array.isArray(e),a=o(e.facts,{})||{},s=o(r,null);if(!n(s)||!Object.keys(s).length)return{facts:a,provenance:\"facts\"};const i=JSON.parse(JSON.stringify(a)),c=(e,t)=>{for(const r of Object.keys(t))/^(__proto__|constructor|prototype)$/.test(r)||(e[r]=n(t[r])&&n(e[r])?(c(e[r],t[r]),e[r]):t[r])};return c(i,s),{facts:i,provenance:\"tool\"}})(0,P);let C=x?((e,t,n,c,l)=>{const u=o(N.facts,{})||{},f=o(n,{})||{},g=d(c),m=l||\"facts\",b=((e,t,n)=>{const o=y(e,\"\",[]);y(t,\"recipient\",o),y(n.allowedValues||[],\"policy.allowedValues\",o);const i=new Map,c=new Map,l=new Map,d=new Map,u=new Map,f=(e,t,r)=>{null==t||e.has(t)||e.set(t,r)};for(const[e,t]of o){f(i,r(t),e);for(const n of t.match(/-?\\d[\\d,]*(?:\\.\\d+)?/g)||[])f(i,r(n),e);/[A-Za-z]/.test(t)&&/\\d/.test(t)&&t.length<=40&&f(c,a(t),e);for(const r of t.match(p[3][1])||[])f(c,a(r),e);for(const r of t.match(p[2][1])||[])f(d,h(r),e);for(const r of t.match(p[1][1])||[])f(l,s(r),e);for(const r of t.match(p[0][1])||[])f(u,p[0][2](r),e)}return{N:i,I:c,P:l,D:d,L:u}})(u,f,g),w=[],A=(e,t,r,n,a,s,o)=>w.push({claimId:e,kind:t,token:r,status:n,source:m,evidence:a||\"\",severity:s,message:o||\"\"}),_=(e,t,r,n,a)=>A(e.id,e.kind,e.token,t,r,n,a),j=(e,t,r,n,a)=>A(e.id,e.kind,e.text,t,r,n,a),x=\"verified\",P=\"contradicted\",$=\"unsupported\",O=e=>'\"'+e+'\" not in facts.';for(const t of e.figures||[]){const e=t.kind,n=b[k[e]]||b.N;let a=\"count\"===e&&g.allowUngroundedSmallCounts&&/^\\d$/.test(t.value)?\"small\":n.get(t.value);if(null==a&&\"identifier\"===e&&(a=b.N.get(r(t.token.replace(/\\D/g,\"\")))),null==a&&\"date\"===e&&\"-\"===t.value[0])for(const[e,r]of n)if(e.endsWith(t.value)){a=r;break}null!=a?_(t,x,a,\"info\"):\"phone\"===e?_(t,P,\"recipient.phone=\"+(f.phone||null),\"block\",\"Phone not the recipient's.\"):_(t,$,\"\",\"block\",O(t.token))}for(const t of e.statements||[]){if(t.never){j(t,P,\"policy\",\"block\",t.message);continue}if(!t.factPath){j(t,\"unverifiable\",\"\",\"rewrite\",t.message);continue}const e=i(u,t.factPath),r=t.factPath+\" = \"+JSON.stringify(void 0===e?null:e);v(e,t.expect)?j(t,x,r,\"info\"):null==e||Array.isArray(e)&&!e.length?j(t,$,r,\"block\",t.message+\" Nothing at \"+t.factPath):j(t,P,r,\"block\",t.message+\" Facts: \"+r)}e.register&&e.register.informalAddress&&A(\"register\",\"register\",\"informal address\",P,\"policy.formalAddress\",\"rewrite\",'Informal address; use \"aap\".'),e.register&&e.register.profanity&&A(\"register\",\"register\",\"profanity\",P,\"policy\",\"block\",\"Abusive language.\");const C=e=>w.some(t=>t.severity===e);return{verifications:w,preVerdict:C(\"block\")?\"block\":C(\"rewrite\")?\"rewrite\":\"allow\"}})(j,0,e.recipient,e.policy,N.provenance):{verifications:[],preVerdict:\"allow\"};FLOW_CONFIG&(C=(e=>({verifications:[{claimId:\"truth\",kind:\"truth_url\",token:\"\",status:\"unverifiable\",source:\"tool\",evidence:$,severity:\"block\",message:\"Source of truth unusable.\"}].concat(e.verifications),preVerdict:\"block\"}))(C));const S=C.verifications.filter(e=>\"info\"!==e.severity),L=o(e.recipient,{})||{};output=Object.assign({draft:_,claims:j,needsFactCheck:x,fetchError:$,recipient:e.recipient||\"\",findings:S,judgeInput:JSON.stringify({draft:_,facts:N.facts,recipient:L.name?{name:L.name+\"\"}:null,findings:S,unresolved:(j.statements||[]).filter(e=>!e.factPath&&!e.never)})},N,C);\n",
          "nodeName": "Code"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 130
      },
      "selected": true
    },
    {
      "id": "conditionNode_874",
      "data": {
        "label": "Condition",
        "modes": [],
        "nodeId": "conditionNode",
        "values": {
          "nodeName": "Condition",
          "conditions": [
            {
              "label": "Condition 1",
              "value": "conditionNode_874-addNode_766",
              "condition": "{\n  \"operator\": null,\n  \"operands\": [\n    {\n      \"name\": \"{{codeNode_211.output.needsFactCheck}}\",\n      \"operator\": \"==\",\n      \"value\": \"true\"\n    }\n  ]\n}"
            },
            {
              "label": "Else",
              "value": "conditionNode_874-addNode_919",
              "condition": {}
            }
          ],
          "allowMultipleConditionExecution": false
        }
      },
      "type": "conditionNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 260
      },
      "selected": false
    },
    {
      "id": "codeNode_504",
      "data": {
        "label": "New",
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "code": "// Assign the value you want to return from this code node to `output`. \n// The `output` variable is already declared.",
          "nodeName": "Code"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": 100,
        "y": 390
      }
    },
    {
      "id": "InstructorLLMNode_699",
      "data": {
        "label": "New",
        "modes": {},
        "nodeId": "InstructorLLMNode",
        "values": {
          "tools": [],
          "schema": "{\n  \"type\": \"object\",\n  \"properties\": {\n    \"unsupported_claims\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"object\",\n        \"properties\": {\n          \"claim\": {\n            \"type\": \"string\"\n          },\n          \"why\": {\n            \"type\": \"string\"\n          },\n          \"severity\": {\n            \"type\": \"string\"\n          }\n        },\n        \"additionalProperties\": true\n      }\n    },\n    \"rewrite\": {\n      \"type\": \"string\",\n      \"required\": true\n    },\n    \"notes\": {\n      \"type\": \"string\",\n      \"required\": true\n    }\n  }\n}",
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are the semantic verifier inside send-gate, a pre-send gate for messages that AI agents write to customers.\nYou receive one JSON object with:\n- draft: the message the agent wants to send\n- facts: everything the agent is allowed to rely on (this is the source of truth; if it is not here, it is not known)\n- recipient: who the message is for\n- findings: what the deterministic layer already flagged (invented figures, dates, links, contradicted statuses, register). Do not repeat these.\n- unresolved: statements the rules could not settle\nYour job has two parts.\n1. unsupported_claims: list any remaining assertion in the draft that the facts do not support and the deterministic layer did not catch. Typical cases: promises or commitments (\"we will prioritise your delivery\"), causal explanations (\"delay was due to rain\"), quality or availability claims, anything about the customer's order, money, or time that is not in facts. For each give: claim (quote the draft), why (one sentence, name the missing or contradicting fact), severity: \"block\" if the claim concerns the customer's order, money, delivery time, refund, or an obligation the business would be held to; otherwise \"rewrite\". If nothing remains, return an empty array.\n2. rewrite: the message the agent should send instead. Rules:\n- Use only what is in facts. Every number, date, identifier, link and status must appear in facts verbatim or be dropped.\n- Where the draft asserted something the facts do not contain, replace it with an honest line (\"delivery ka time confirm hote hi batayenge\") rather than inventing a substitute.\n- Keep the language and register of the draft. Hinglish stays Hinglish. Address the customer as \"aap\", never \"tu\" or \"tum\".\n- Keep the original intent (nudge, update, reply) and length. No preamble, no apology spiral, no marketing filler.\n- If the draft was fine apart from the flagged items, change as little as possible.\n3. notes: one or two sentences for the audit log, plain language.\nReturn JSON only, matching the schema. Never add keys."
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
              "role": "user",
              "content": "Verify this draft against the facts and produce the rewrite. Input JSON: {{codeNode_211.output.judgeInput}}"
            }
          ],
          "memories": "[]",
          "messages": "[]",
          "nodeName": "Generate JSON",
          "attachments": "",
          "generativeModelName": [
            {
              "type": "generator/text",
              "params": {},
              "configName": "configA",
              "model_name": "gemini-3.5-flash-lite",
              "credentialId": "db1e16cf-e4a3-4d21-ae30-f5efc78d0e84",
              "provider_name": "gemini",
              "credential_name": "gemini"
            }
          ]
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -350,
        "y": 390
      },
      "selected": false
    },
    {
      "id": "codeNode_515",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "codeNode",
        "schema": {
          "audit": "object",
          "claims": "object",
          "counts": "object",
          "verdict": "string",
          "findings": "array",
          "finalMessage": "string",
          "rewriteCheck": "object",
          "verifications": "array"
        },
        "values": {
          "code": "// GENERATED (npm run emit) from apps/lib. Do not edit.\nconst e={{codeNode_211.output}},t=[{{InstructorLLMNode_699.output}}][0],r=e=>{const t=(e+\"\").replace(/[₹$€£]|rs\\.?|inr/gi,\"\").replace(/[,\\s]/g,\"\");return/^-?\\d+(\\.\\d+)?$/.test(t)?Number(t)+\"\":null},n=e=>(e+\"\").toLowerCase().replace(/\\s+/g,\" \").trim(),a=e=>(e+\"\").toUpperCase().replace(/[\\s\\-_#:]/g,\"\"),i=e=>{const t=(e+\"\").replace(/\\D/g,\"\");return t.length>10?t.slice(-10):t},s=(e,t)=>{if(null==e)return t;if(\"string\"==typeof e){const r=e.trim();if(!r)return t;try{return JSON.parse(r)}catch(e){return t}}return e},o=(e,t)=>t?(t+\"\").split(\".\").reduce((e,t)=>null==e?void 0:e[t],e):void 0,c=e=>(/^\\w/.test(e)?\"\\\\b\":\"\")+(e+\"\").replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\FLOW_CONFIG\")+(/\\w$/.test(e)?\"\\\\b\":\"\"),d=(e,t)=>t?Array.isArray(e.terms)&&e.terms.length?RegExp(\"(?:\"+e.terms.map(c).join(\"|\")+\")\",\"i\"):null:e.re,l=e=>Object.assign({formalAddress:!0,allowUngroundedSmallCounts:!0},s(e,{})||{}),u=\"janfebmaraprmayjunjulaugsepoctnovdec\",f=u.match(/.{3}/g).join(\"|\"),g=e=>{const t=n(e),r=t.match(/\\d+/g)||[],a=/[a-z]{3}/.exec(t),i=a?(u.indexOf(a[0])+3)/3|0:0;if(i)return(r.find(e=>4===e.length)||\"\")+\"-\"+i+\"-\"+ +(r.find(e=>e.length<3)||0);if(3!==r.length)return t;const s=4===r[0].length;return(s?r[0]:r[2].length<3?\"20\"+r[2]:r[2])+\"-\"+ +r[1]+\"-\"+ +(s?r[2]:r[0])},p=[[\"link\",/https?:\\/\\/[^\\s)>\\]]+/gi,e=>n(e.replace(/[.,;:!?]+$/,\"\"))],[\"phone\",/(?:\\+?91[\\s-]?)?[6-9]\\d{9}\\b/g,i],[\"date\",RegExp(\"\\\\b(\\\\d{1,4}[\\\\/.-]\\\\d{1,2}[\\\\/.-]\\\\d{2,4}|\\\\d{1,2}\\\\s+(?:\"+f+\")[a-z]*(?:\\\\s+\\\\d{4})?|(?:\"+f+\")[a-z]*\\\\s+\\\\d{1,2}(?:,?\\\\s+\\\\d{4})?)\\\\b\",\"gi\"),g],[\"identifier\",/\\b(?:[A-Z]{1,6}[-_ ]?\\d{3,}|\\d{3,}[-_]?[A-Z]{1,6}|[A-Z0-9]*\\d[A-Z0-9]*-[A-Z0-9-]{3,})\\b/g,a],[\"number\",/(?:[₹$€£]\\s?|\\b(?:rs\\.?|inr)\\s?)?-?\\d[\\d,]*(?:\\.\\d+)?\\s?(?:%|percent|lakh|lakhs|crore|k\\b)?/gi,null]],h=[{id:\"order_placed\",kind:\"order_status\",re:/\\b(order|po)\\b[^.!?\\n]{0,40}\\b(placed|confirmed|booked|ho gaya|lag gaya)\\b|\\b(placed|confirmed|booked)\\b[^.!?\\n]{0,20}\\border\\b/i,factPath:\"order.status\",expect:[\"placed\",\"confirmed\",\"booked\"],message:\"Order placed.\"},{id:\"delivered\",kind:\"order_status\",re:/\\b(delivered|deliver ho gaya|pahu?nch gaya)\\b/i,factPath:\"order.status\",expect:[\"delivered\"],message:\"Delivered.\"},{id:\"refund\",kind:\"refund\",re:/\\brefund(ed)?\\b[^.!?\\n]{0,30}\\b(issued|processed|credited|done|sent|initiated|ho gaya|kar diya)\\b/i,factPath:\"refund.status\",expect:[\"issued\",\"processed\",\"credited\",\"initiated\"],message:\"Refund done.\"},{id:\"offer\",kind:\"offer\",re:/\\b(discount|offer|cashback|voucher|coupon|off|free|muft|scheme)\\b/i,factPath:\"offers\",message:\"Offer.\"},{id:\"eta\",kind:\"delivery_eta\",re:/\\b(within|in|by)\\s+\\d+\\s*(min|hour|hr|day|ghant|din)|\\b(aaj|today|tomorrow|kal|tonight|subah|shaam|morning|evening)\\b[^.!?\\n]{0,25}\\b(deliver|pahunch|reach|aa jaa?yega)|\\b(deliver|pahunch|reach)\\w*\\b[^.!?\\n]{0,30}\\b(aaj|today|tomorrow|kal|tonight|by\\s+\\w+)\\b/i,factPath:\"eta\",message:\"ETA promised.\"},{id:\"payment\",kind:\"payment\",re:/\\b(payment|paisa|amount)\\b[^.!?\\n]{0,30}\\b(received|mil gaya|aa gaya|credited|confirmed)\\b/i,factPath:\"payment.status\",expect:[\"received\",\"paid\",\"confirmed\",\"credited\"],message:\"Payment received.\"},{id:\"guarantee\",kind:\"guarantee\",re:/\\b(guarantee|guaranteed|100%\\s*(sure|pakka)|pakka\\s*promise|zaroor milega)\\b/i,never:!0,message:\"Guarantee.\"}],m=/\\b(tu|tum|tera|teri|tere|tumhar[aei]|tujhe|tumhe|tumko)\\b/i,b=/\\b(bhenchod|madarchod|chutiya|bsdk|harami|kamina|saala|fuck|shit|bastard|idiot|stupid)\\b/i;function k(e,t,r){return null==e?r:Array.isArray(e)?(e.forEach((e,n)=>k(e,t+\"[\"+n+\"]\",r)),r):\"object\"==typeof e?(Object.keys(e).forEach(n=>k(e[n],t?t+\".\"+n:n,r)),r):(r.push([t||\"$\",e+\"\"]),r)}const y={currency:\"N\",percent:\"N\",count:\"N\",identifier:\"I\",date:\"D\",link:\"L\",phone:\"P\"},v=(e,t)=>null!=e&&(Array.isArray(e)?e.length>0&&(!t||e.some(e=>t.map(n).includes(n(e)))):\"object\"==typeof e?Object.keys(e).length>0:t?t.map(n).includes(n(e)):(e+\"\").trim().length>0);let w;w=e.needsFactCheck?((e,n)=>{const c=s(t,{})||{},u=Array.isArray(c.unsupported_claims)?c.unsupported_claims:[],f=u.filter(e=>e&&\"block\"===((e.severity||\"\")+\"\").toLowerCase());let w=n.preVerdict;f.length?w=\"block\":\"allow\"===w&&u.length&&(w=\"rewrite\");const A=(n.findings||[]).concat(u.map((e,t)=>({claimId:\"judge\"+(t+1),kind:\"semantic\",token:e.claim,status:\"unsupported\",source:\"judge\",evidence:e.why||\"\",severity:f.includes(e)?\"block\":\"rewrite\",message:e.why||\"Unsupported claim.\"})));let j=null,_=null;if(\"allow\"===w)j=e.draft+\"\";else{const t=(n.findings||[]).some(e=>\"truth_url\"===e.kind)?\"\":\"string\"==typeof c.rewrite?c.rewrite.trim():\"\";t?(_=(e=>{const t=(e&&e.draft||\"\")+\"\",n=((e,t)=>{const n=(e||\"\")+\"\",a=l(t),i=(e=>{const t=[],n=[],a=e=>{const t=e.index,r=t+e[0].length;for(const[e,a]of n)if(t<a&&r>e)return!1;return n.push([t,r]),!0};for(const[n,i,s]of p){let o;for(i.lastIndex=0;o=i.exec(e);){if(!a(o))continue;const e=o[0].trim();if(\"number\"!==n){t.push({kind:n,token:\"link\"===n?e.replace(/[.,;:!?]+$/,\"\"):e,value:s(e)});continue}const i=e.toLowerCase(),c=/lakh/.test(i)?1e5:/crore/.test(i)?1e7:/\\dk$/.test(i.replace(/\\s/g,\"\"))?1e3:1,d=r(i.replace(/%|percent|lakhs?|crores?|k$/g,\"\"));null!=d&&t.push({kind:/[₹$€£]|rs\\.?|inr/i.test(i)?\"currency\":/%|percent/.test(i)?\"percent\":\"count\",token:e,value:Number(d)*c+\"\"})}}return t.map((e,t)=>Object.assign({id:\"f\"+(t+1)},e))})(n),s=new Set(a.disableRules||[]),o=[],c=Array.isArray(a.statementRules)?a.statementRules:[];for(const e of h.concat(c)){if(!e||s.has(e.id))continue;const t=d(e,c.indexOf(e)>=0),r=t?n.match(t):null;r&&o.push({id:\"s\"+(o.length+1),rule:e.id,kind:e.kind||\"statement\",text:r[0],factPath:e.factPath||null,expect:e.expect||null,never:!!e.never,message:e.message||\"\"})}const u={informalAddress:!(!a.formalAddress||!m.test(n)),profanity:b.test(n)},f=i.filter(e=>!(a.allowUngroundedSmallCounts&&\"count\"===e.kind&&/^\\d$/.test(e.value))),g=u.profanity||f.length||o.length?\"high\":u.informalAddress?\"low\":\"none\";return{schemaVersion:\"1\",figures:i,statements:o,register:u,risk:g,needsFactCheck:\"none\"!==g||!!a.alwaysCheck}})(t,e&&e.policy);n.draft=t;const c=((e,t,n,c,d)=>{const u=s(t,{})||{},f=s(n,{})||{},h=l(c),m=d||\"facts\",b=((e,t,n)=>{const s=k(e,\"\",[]);k(t,\"recipient\",s),k(n.allowedValues||[],\"policy.allowedValues\",s);const o=new Map,c=new Map,d=new Map,l=new Map,u=new Map,f=(e,t,r)=>{null==t||e.has(t)||e.set(t,r)};for(const[e,t]of s){f(o,r(t),e);for(const n of t.match(/-?\\d[\\d,]*(?:\\.\\d+)?/g)||[])f(o,r(n),e);/[A-Za-z]/.test(t)&&/\\d/.test(t)&&t.length<=40&&f(c,a(t),e);for(const r of t.match(p[3][1])||[])f(c,a(r),e);for(const r of t.match(p[2][1])||[])f(l,g(r),e);for(const r of t.match(p[1][1])||[])f(d,i(r),e);for(const r of t.match(p[0][1])||[])f(u,p[0][2](r),e)}return{N:o,I:c,P:d,D:l,L:u}})(u,f,h),w=[],A=(e,t,r,n,a,i,s)=>w.push({claimId:e,kind:t,token:r,status:n,source:m,evidence:a||\"\",severity:i,message:s||\"\"}),j=(e,t,r,n,a)=>A(e.id,e.kind,e.token,t,r,n,a),_=(e,t,r,n,a)=>A(e.id,e.kind,e.text,t,r,n,a),x=\"verified\",C=\"contradicted\",P=\"unsupported\",N=e=>'\"'+e+'\" not in facts.';for(const t of e.figures||[]){const e=t.kind,n=b[y[e]]||b.N;let a=\"count\"===e&&h.allowUngroundedSmallCounts&&/^\\d$/.test(t.value)?\"small\":n.get(t.value);if(null==a&&\"identifier\"===e&&(a=b.N.get(r(t.token.replace(/\\D/g,\"\")))),null==a&&\"date\"===e&&\"-\"===t.value[0])for(const[e,r]of n)if(e.endsWith(t.value)){a=r;break}null!=a?j(t,x,a,\"info\"):\"phone\"===e?j(t,C,\"recipient.phone=\"+(f.phone||null),\"block\",\"Phone not the recipient's.\"):j(t,P,\"\",\"block\",N(t.token))}for(const t of e.statements||[]){if(t.never){_(t,C,\"policy\",\"block\",t.message);continue}if(!t.factPath){_(t,\"unverifiable\",\"\",\"rewrite\",t.message);continue}const e=o(u,t.factPath),r=t.factPath+\" = \"+JSON.stringify(void 0===e?null:e);v(e,t.expect)?_(t,x,r,\"info\"):null==e||Array.isArray(e)&&!e.length?_(t,P,r,\"block\",t.message+\" Nothing at \"+t.factPath):_(t,C,r,\"block\",t.message+\" Facts: \"+r)}e.register&&e.register.informalAddress&&A(\"register\",\"register\",\"informal address\",C,\"policy.formalAddress\",\"rewrite\",'Informal address; use \"aap\".'),e.register&&e.register.profanity&&A(\"register\",\"register\",\"profanity\",C,\"policy\",\"block\",\"Abusive language.\");const V=e=>w.some(t=>t.severity===e);return{verifications:w,preVerdict:V(\"block\")?\"block\":V(\"rewrite\")?\"rewrite\":\"allow\"}})(n,e&&e.facts,e&&e.recipient,e&&e.policy,e&&e.provenance);return Object.assign({claims:n,findings:c.verifications.filter(e=>\"info\"!==e.severity)},c)})(Object.assign({},e,{draft:t})),\"allow\"===_.preVerdict?(j=t,w=\"rewrite\"):w=\"block\"):w=\"block\"}return{verdict:w,finalMessage:j,findings:A,counts:{block:A.filter(e=>\"block\"===e.severity).length,rewrite:A.filter(e=>\"rewrite\"===e.severity).length},rewriteCheck:_?{preVerdict:_.preVerdict,findings:_.findings}:null,judgeNotes:\"string\"==typeof c.notes?c.notes:\"\"}})({draft:e.draft,facts:e.facts,recipient:e.recipient,provenance:e.provenance},{preVerdict:e.preVerdict,findings:e.findings}):{verdict:\"allow\",finalMessage:e.draft,findings:[],counts:{block:0,rewrite:0},rewriteCheck:null,judgeNotes:\"fast path: no verifiable claims\"},output={verdict:w.verdict,finalMessage:w.finalMessage,claims:e.claims,verifications:e.verifications,findings:w.findings,counts:w.counts,rewriteCheck:w.rewriteCheck,audit:{needsFactCheck:e.needsFactCheck,provenance:e.provenance,fetchError:e.fetchError||\"\",judgeUsed:!(!t||!e.needsFactCheck),judgeNotes:w.judgeNotes,schemaVersion:e.claims&&e.claims.schemaVersion}};\n",
          "nodeName": "Code"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 250,
        "height": 93
      },
      "position": {
        "x": -125,
        "y": 520
      },
      "selected": false
    },
    {
      "id": "responseNode_triggerNode_1",
      "data": {
        "label": "Response",
        "nodeId": "graphqlResponseNode",
        "values": {
          "id": "responseNode_triggerNode_1",
          "headers": "{\"content-type\":\"application/json\"}",
          "retries": "0",
          "nodeName": "API Response",
          "webhookUrl": "",
          "retry_delay": "0",
          "outputMapping": "{\n  \"verdict\": \"{{codeNode_515.output.verdict}}\",\n  \"finalMessage\": \"{{codeNode_515.output.finalMessage}}\",\n  \"claims\": \"{{codeNode_515.output.claims}}\",\n  \"verifications\": \"{{codeNode_515.output.verifications}}\",\n  \"findings\": \"{{codeNode_515.output.findings}}\",\n  \"counts\": \"{{codeNode_515.output.counts}}\",\n  \"rewriteCheck\": \"{{codeNode_515.output.rewriteCheck}}\",\n  \"audit\": \"{{codeNode_515.output.audit}}\"\n}"
        },
        "isResponseNode": true
      },
      "type": "responseNode",
      "measured": {
        "width": 250,
        "height": 89
      },
      "position": {
        "x": -125,
        "y": 650
      },
      "selected": false
    }
  ],
  "edges": [
    {
      "id": "triggerNode_1-codeNode_211",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 100
          },
          {
            "x": 0,
            "y": 130
          }
        ]
      },
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "codeNode_211",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_211-conditionNode_874",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 230
          },
          {
            "x": 0,
            "y": 260
          }
        ]
      },
      "type": "defaultEdge",
      "source": "codeNode_211",
      "target": "conditionNode_874",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "conditionNode_874-addNode_766",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 360
          },
          {
            "x": 0,
            "y": 375
          },
          {
            "x": -225,
            "y": 375
          },
          {
            "x": -225,
            "y": 390
          }
        ],
        "condition": "Condition 1",
        "branchName": "Condition 1"
      },
      "type": "conditionEdge",
      "source": "conditionNode_874",
      "target": "InstructorLLMNode_699",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "conditionNode_874-addNode_919",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 360
          },
          {
            "x": 0,
            "y": 375
          },
          {
            "x": 225,
            "y": 375
          },
          {
            "x": 225,
            "y": 390
          }
        ],
        "condition": "Else",
        "branchName": "Else"
      },
      "type": "conditionEdge",
      "source": "conditionNode_874",
      "target": "codeNode_504",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "InstructorLLMNode_699-codeNode_515",
      "data": {
        "points": [
          {
            "x": -225,
            "y": 490
          },
          {
            "x": -225,
            "y": 505
          },
          {
            "x": 0,
            "y": 505
          },
          {
            "x": 0,
            "y": 520
          }
        ]
      },
      "type": "defaultEdge",
      "source": "InstructorLLMNode_699",
      "target": "codeNode_515",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_515-responseNode_triggerNode_1",
      "data": {
        "points": [
          {
            "x": 0,
            "y": 620
          },
          {
            "x": 0,
            "y": 650
          }
        ]
      },
      "type": "defaultEdge",
      "source": "codeNode_515",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "xy-edge__codeNode_504bottom-codeNode_515top",
      "data": {
        "points": [
          {
            "x": 225,
            "y": 490
          },
          {
            "x": 225,
            "y": 505
          },
          {
            "x": 0,
            "y": 505
          },
          {
            "x": 0,
            "y": 520
          }
        ],
        "condition": false
      },
      "type": "defaultEdge",
      "source": "codeNode_504",
      "target": "codeNode_515",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-trigger_triggerNode_1",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2026-09-08T13:52:41.562667+00:00"
};

export async function getNodesAndEdges(): Promise<{
    nodes: Record<string, any>[],
    edges: Record<string, any>[],
}> {
    return {
        nodes: flowConfig.nodes,
        edges: flowConfig.edges,
    }
}

export async function getFlowConfig(): Promise<Record<string, any>> {
    return flowConfig;
}