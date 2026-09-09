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
          "code": "// GENERATED from apps/lib/gate.js (npm run emit). Edit the library, not this file.\nconst e={{triggerNode_1.output}},t=e=>{const t=String(e).replace(/[₹$€£]|rs\\.?|inr/gi,\"\").replace(/[,\\s]/g,\"\");if(!/^-?\\d+(\\.\\d+)?$/.test(t))return null;const r=Number(t);return isFinite(r)?String(r):null},r=e=>String(e).toLowerCase().replace(/\\s+/g,\" \").trim(),n=e=>String(e).toUpperCase().replace(/[\\s\\-_#:]/g,\"\"),a=e=>{const t=String(e).replace(/\\D/g,\"\");return t.length>10?t.slice(-10):t},i=(e,t)=>{if(null==e)return t;if(\"string\"==typeof e){const r=e.trim();if(!r)return t;try{return JSON.parse(r)}catch(e){return t}}return e},s=(e,t)=>t?String(t).split(\".\").reduce((e,t)=>null==e?void 0:e[t],e):void 0,o=e=>(/^\\w/.test(e)?\"\\\\b\":\"\")+String(e).replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\FLOW_CONFIG\")+(/\\w$/.test(e)?\"\\\\b\":\"\"),c=(e,t)=>t?Array.isArray(e.terms)&&e.terms.length?new RegExp(\"(?:\"+e.terms.map(o).join(\"|\")+\")\",\"i\"):null:e.re,d=e=>Object.assign({formalAddress:!0,allowUngroundedSmallCounts:!0},i(e,{})||{}),l=\"jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec\",u=[[\"link\",/https?:\\/\\/[^\\s)>\\]]+/gi,e=>r(e.replace(/[.,;:!?]+$/,\"\"))],[\"phone\",/(?:\\+?91[\\s-]?)?[6-9]\\d{9}\\b/g,a],[\"date\",new RegExp(\"\\\\b(\\\\d{1,2}[\\\\/.-]\\\\d{1,2}[\\\\/.-]\\\\d{2,4}|\\\\d{4}-\\\\d\\\\d-\\\\d\\\\d|\\\\d{1,2}\\\\s+(?:\"+l+\")[a-z]*(?:\\\\s+\\\\d{4})?|(?:\"+l+\")[a-z]*\\\\s+\\\\d{1,2}(?:,?\\\\s+\\\\d{4})?)\\\\b\",\"gi\"),r],[\"identifier\",/\\b(?:[A-Z]{1,6}[-_ ]?\\d{3,}|\\d{3,}[-_]?[A-Z]{1,6}|[A-Z0-9]*\\d[A-Z0-9]*-[A-Z0-9-]{3,})\\b/g,n],[\"number\",/(?:[₹$€£]\\s?|\\b(?:rs\\.?|inr)\\s?)?-?\\d[\\d,]*(?:\\.\\d+)?\\s?(?:%|percent|lakh|lakhs|crore|k\\b)?/gi,null]],f=[{id:\"order_placed\",kind:\"order_status\",re:/\\b(order|po)\\b[^.!?\\n]{0,40}\\b(placed|confirmed|booked|ho gaya|lag gaya)\\b|\\b(placed|confirmed|booked)\\b[^.!?\\n]{0,20}\\border\\b/i,factPath:\"order.status\",expect:[\"placed\",\"confirmed\",\"booked\"],message:\"Order placed.\"},{id:\"delivered\",kind:\"order_status\",re:/\\b(delivered|deliver ho gaya|pahu?nch gaya)\\b/i,factPath:\"order.status\",expect:[\"delivered\"],message:\"Delivered.\"},{id:\"refund\",kind:\"refund\",re:/\\brefund(ed)?\\b[^.!?\\n]{0,30}\\b(issued|processed|credited|done|sent|initiated|ho gaya|kar diya)\\b/i,factPath:\"refund.status\",expect:[\"issued\",\"processed\",\"credited\",\"initiated\"],message:\"Refund done.\"},{id:\"offer\",kind:\"offer\",re:/\\b(discount|offer|cashback|voucher|coupon|off|free|muft|scheme)\\b/i,factPath:\"offers\",message:\"Offer.\"},{id:\"eta\",kind:\"delivery_eta\",re:/\\b(within|in|by)\\s+\\d+\\s*(min|hour|hr|day|ghant|din)|\\b(aaj|today|tomorrow|kal|tonight|subah|shaam|morning|evening)\\b[^.!?\\n]{0,25}\\b(deliver|pahunch|reach|aa jaa?yega)|\\b(deliver|pahunch|reach)\\w*\\b[^.!?\\n]{0,30}\\b(aaj|today|tomorrow|kal|tonight|by\\s+\\w+)\\b/i,factPath:\"eta\",message:\"ETA promised.\"},{id:\"payment\",kind:\"payment\",re:/\\b(payment|paisa|amount)\\b[^.!?\\n]{0,30}\\b(received|mil gaya|aa gaya|credited|confirmed)\\b/i,factPath:\"payment.status\",expect:[\"received\",\"paid\",\"confirmed\",\"credited\"],message:\"Payment received.\"},{id:\"guarantee\",kind:\"guarantee\",re:/\\b(guarantee|guaranteed|100%\\s*(sure|pakka)|pakka\\s*promise|zaroor milega)\\b/i,never:!0,message:\"Guarantee.\"}],p=/\\b(tu|tum|tera|teri|tere|tumhar[aei]|tujhe|tumhe|tumko)\\b/i,g=/\\b(bhenchod|madarchod|chutiya|bsdk|harami|kamina|saala|fuck|shit|bastard|idiot|stupid)\\b/i;function h(e,t,r){return null==e?r:Array.isArray(e)?(e.forEach((e,n)=>h(e,t+\"[\"+n+\"]\",r)),r):\"object\"==typeof e?(Object.keys(e).forEach(n=>h(e[n],t?t+\".\"+n:n,r)),r):(r.push([t||\"$\",String(e)]),r)}const m=(e,t)=>null!=e&&(Array.isArray(e)?e.length>0&&(!t||e.some(e=>t.map(r).includes(r(e)))):\"object\"==typeof e?Object.keys(e).length>0:t?t.map(r).includes(r(e)):String(e).trim().length>0),b=String(e.draft||\"\"),k=((e,r)=>{const n=String(e||\"\"),a=d(r),i=(e=>{const r=[],n=[],a=e=>{const t=e.index,r=t+e[0].length;for(const[e,a]of n)if(t<a&&r>e)return!1;return n.push([t,r]),!0};for(const[n,i,s]of u){let o;for(i.lastIndex=0;o=i.exec(e);){if(!a(o))continue;const e=o[0].trim();if(\"number\"!==n){r.push({kind:n,token:\"link\"===n?e.replace(/[.,;:!?]+$/,\"\"):e,value:s(e)});continue}if(!/\\d/.test(e))continue;const i=e.toLowerCase(),c=/lakh/.test(i)?1e5:/crore/.test(i)?1e7:/\\dk$/.test(i.replace(/\\s/g,\"\"))?1e3:1,d=t(i.replace(/%|percent|lakhs?|crores?|k$/g,\"\"));null!=d&&r.push({kind:/[₹$€£]|rs\\.?|inr/i.test(i)?\"currency\":/%|percent/.test(i)?\"percent\":\"count\",token:e,value:String(Number(d)*c)})}}return r.map((e,t)=>Object.assign({id:\"f\"+(t+1)},e))})(n),s=new Set(a.disableRules||[]),o=[],l=Array.isArray(a.statementRules)?a.statementRules:[];for(const e of f.concat(l)){if(!e||s.has(e.id))continue;const t=c(e,l.indexOf(e)>=0),r=t?n.match(t):null;r&&o.push({id:\"s\"+(o.length+1),rule:e.id,kind:e.kind||\"statement\",text:r[0],factPath:e.factPath||null,expect:e.expect||null,never:!!e.never,message:e.message||\"\"})}const h={informalAddress:!(!a.formalAddress||!p.test(n)),profanity:g.test(n)},m=i.filter(e=>!(a.allowUngroundedSmallCounts&&\"count\"===e.kind&&/^\\d$/.test(e.value))),b=h.profanity||m.length||o.length?\"high\":h.informalAddress?\"low\":\"none\";return{schemaVersion:\"1\",figures:i,statements:o,register:h,risk:b,needsFactCheck:\"none\"!==b||!!a.alwaysCheck}})(b,e.policy);k.draft=b;const y=\"true\"===String(e.needs_fact_check||\"\").toLowerCase(),v=k.needsFactCheck||y;let w=null,A=\"\";const S=String(e.truth_url||\"\").trim();if(v&&S&&(A=(e=>{let t;try{t=new URL(String(e||\"\"))}catch(e){return\"truth_url: invalid URL\"}const n=t.hostname.toLowerCase(),a=([\"raw.githubusercontent.com\"]||[]).map(r).filter(Boolean);return\"https:\"!==t.protocol?\"truth_url: https only\":t.username||t.password?\"truth_url: no credentials in URL\":n.indexOf(\".\")<0||\"[\"===n[0]||/^\\d+(\\.\\d+){3}$/.test(n)||/\\.(local|internal|localhost)$/.test(n)?\"truth_url: public host only\":a.length&&!a.some(e=>n===e||n.slice(-e.length-1)===\".\"+e)?\"truth_url: host not on allow-list\":null})(S)||\"\",!A))try{const e=(k.figures||[]).filter(e=>\"identifier\"===e.kind).map(e=>e.token),t={accept:\"application/json\"},r=await fetch(S+(S.indexOf(\"?\")>=0?\"&\":\"?\")+\"ids=\"+encodeURIComponent(e.join(\",\")),{headers:t,redirect:\"error\",signal:AbortSignal.timeout(8e3)}),n=r.ok?await r.text():\"\";A=r.ok?n.length>2e5?\"truth_url: body too large\":\"\":\"truth_url: HTTP \"+r.status,A||(w=JSON.parse(n))}catch(e){A=\"truth_url: \"+(e&&e.message||e)}const x=((t,r)=>{const n=i(e.facts,{})||{},a=i(r,null);if(!a||\"object\"!=typeof a||Array.isArray(a)||!Object.keys(a).length)return{facts:n,provenance:\"facts\"};const s=JSON.parse(JSON.stringify(n)),o=(e,t)=>{for(const r of Object.keys(t))e[r]=t[r]&&\"object\"==typeof t[r]&&!Array.isArray(t[r])&&e[r]&&\"object\"==typeof e[r]&&!Array.isArray(e[r])?(o(e[r],t[r]),e[r]):t[r]};return o(s,a),{facts:s,provenance:\"tool\"}})(0,w),_=v?((e,o,c,l,f)=>{const p=i(x.facts,{})||{},g=i(c,{})||{},b=d(l),k=f||\"facts\",y=((e,i,s)=>{const o=h(e,\"\",[]);h(i,\"recipient\",o),h(s.allowedValues||[],\"policy.allowedValues\",o);const c=new Map,d=new Map,l=new Map,f=new Map,p=new Map,g=(e,t,r)=>{null==t||e.has(t)||e.set(t,r)};for(const[e,i]of o){g(f,r(i),e),g(c,t(i),e);for(const r of i.match(/-?\\d[\\d,]*(?:\\.\\d+)?/g)||[])g(c,t(r),e);/[A-Za-z]/.test(i)&&/\\d/.test(i)&&i.length<=40&&g(d,n(i),e);for(const t of i.match(/\\b[A-Z]{1,6}[-_ ]?\\d{3,}\\b/g)||[])g(d,n(t),e);for(const t of i.match(u[1][1])||[])g(l,a(t),e);for(const t of i.match(u[0][1])||[])g(p,u[0][2](t),e)}return{N:c,I:d,P:l,T:f,L:p}})(p,g,b),v=[],w=(e,t,r,n,a,i,s)=>v.push({claimId:e,kind:t,token:r,status:n,source:k,evidence:a||\"\",severity:i,message:s||\"\"}),A=\"verified\",S=\"contradicted\",_=\"unsupported\",j=e=>'\"'+e+'\" not in facts.';for(const r of e.figures||[]){const e=r.kind;if(\"count\"===e&&b.allowUngroundedSmallCounts&&/^\\d$/.test(r.value))w(r.id,e,r.token,A,\"small\",\"info\");else if(\"currency\"===e||\"percent\"===e||\"count\"===e)y.N.has(r.value)?w(r.id,e,r.token,A,y.N.get(r.value),\"info\"):w(r.id,e,r.token,_,\"\",\"block\",j(r.token));else if(\"identifier\"===e){const n=t(r.token.replace(/\\D/g,\"\"));y.I.has(r.value)?w(r.id,e,r.token,A,y.I.get(r.value),\"info\"):n&&y.N.has(n)?w(r.id,e,r.token,A,y.N.get(n),\"info\"):w(r.id,e,r.token,_,\"\",\"block\",j(r.token))}else\"date\"===e?y.T.has(r.value)||[...y.T.keys()].some(e=>e.includes(r.value))?w(r.id,e,r.token,A,\"facts text\",\"info\"):w(r.id,e,r.token,_,\"\",\"block\",j(r.token)):\"link\"===e?y.L.has(r.value)?w(r.id,e,r.token,A,y.L.get(r.value),\"info\"):w(r.id,e,r.token,_,\"\",\"block\",\"Link not in facts.\"):\"phone\"===e&&(y.P.has(r.value)?w(r.id,e,r.token,A,y.P.get(r.value),\"info\"):w(r.id,e,r.token,S,\"recipient.phone=\"+JSON.stringify(g.phone||null),\"block\",\"Phone not the recipient's.\"))}for(const t of e.statements||[]){if(t.never){w(t.id,t.kind,t.text,S,\"policy: forbidden\",\"block\",t.message);continue}if(!t.factPath){w(t.id,t.kind,t.text,\"unverifiable\",\"\",\"rewrite\",t.message);continue}const e=s(p,t.factPath),r=t.factPath+\" = \"+JSON.stringify(void 0===e?null:e);m(e,t.expect)?w(t.id,t.kind,t.text,A,r,\"info\"):null==e||Array.isArray(e)&&!e.length?w(t.id,t.kind,t.text,_,r,\"block\",t.message+\" Nothing at \"+t.factPath):w(t.id,t.kind,t.text,S,r,\"block\",t.message+\" Facts: \"+r)}e.register&&e.register.informalAddress&&w(\"register\",\"register\",\"informal address\",S,\"policy.formalAddress\",\"rewrite\",'Informal address; use \"aap\".'),e.register&&e.register.profanity&&w(\"register\",\"register\",\"profanity\",S,\"policy\",\"block\",\"Abusive language.\");const P={verified:0,contradicted:0,unsupported:0,unverifiable:0,block:0,rewrite:0};for(const e of v)P[e.status]++,\"info\"!==e.severity&&P[e.severity]++;return{verifications:v,preVerdict:P.block?\"block\":P.rewrite?\"rewrite\":\"allow\",counts:P}})(k,0,e.recipient,e.policy,x.provenance):{verifications:[],preVerdict:\"allow\",counts:{},factIndexSize:0},j=_.verifications.filter(e=>\"info\"!==e.severity),P=i(e.recipient,{})||{};output={draft:b,claims:k,needsFactCheck:v,provenance:x.provenance,fetchError:A,facts:x.facts,recipient:e.recipient||\"\",verifications:_.verifications,findings:j,preVerdict:_.preVerdict,counts:_.counts,judgeInput:JSON.stringify({draft:b,facts:x.facts,recipient:P.name?{name:String(P.name)}:null,findings:j,unresolved:(k.statements||[]).filter(e=>!e.factPath&&!e.never)})};\n",
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
      "selected": false
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
          "code": "// GENERATED from apps/lib/gate.js (npm run emit). Edit the library, not this file.\nconst e={{codeNode_211.output}},t=[{{InstructorLLMNode_699.output}}][0],r=\"unsupported\",n=e=>{const t=String(e).replace(/[₹$€£]|rs\\.?|inr/gi,\"\").replace(/[,\\s]/g,\"\");if(!/^-?\\d+(\\.\\d+)?$/.test(t))return null;const r=Number(t);return isFinite(r)?String(r):null},i=e=>String(e).toLowerCase().replace(/\\s+/g,\" \").trim(),s=e=>String(e).toUpperCase().replace(/[\\s\\-_#:]/g,\"\"),a=e=>{const t=String(e).replace(/\\D/g,\"\");return t.length>10?t.slice(-10):t},o=(e,t)=>{if(null==e)return t;if(\"string\"==typeof e){const r=e.trim();if(!r)return t;try{return JSON.parse(r)}catch(e){return t}}return e},c=(e,t)=>t?String(t).split(\".\").reduce((e,t)=>null==e?void 0:e[t],e):void 0,d=e=>(/^\\w/.test(e)?\"\\\\b\":\"\")+String(e).replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\FLOW_CONFIG\")+(/\\w$/.test(e)?\"\\\\b\":\"\"),l=(e,t)=>t?Array.isArray(e.terms)&&e.terms.length?new RegExp(\"(?:\"+e.terms.map(d).join(\"|\")+\")\",\"i\"):null:e.re,u=e=>Object.assign({formalAddress:!0,allowUngroundedSmallCounts:!0},o(e,{})||{}),f=\"jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec\",g=[[\"link\",/https?:\\/\\/[^\\s)>\\]]+/gi,e=>i(e.replace(/[.,;:!?]+$/,\"\"))],[\"phone\",/(?:\\+?91[\\s-]?)?[6-9]\\d{9}\\b/g,a],[\"date\",new RegExp(\"\\\\b(\\\\d{1,2}[\\\\/.-]\\\\d{1,2}[\\\\/.-]\\\\d{2,4}|\\\\d{4}-\\\\d\\\\d-\\\\d\\\\d|\\\\d{1,2}\\\\s+(?:\"+f+\")[a-z]*(?:\\\\s+\\\\d{4})?|(?:\"+f+\")[a-z]*\\\\s+\\\\d{1,2}(?:,?\\\\s+\\\\d{4})?)\\\\b\",\"gi\"),i],[\"identifier\",/\\b(?:[A-Z]{1,6}[-_ ]?\\d{3,}|\\d{3,}[-_]?[A-Z]{1,6}|[A-Z0-9]*\\d[A-Z0-9]*-[A-Z0-9-]{3,})\\b/g,s],[\"number\",/(?:[₹$€£]\\s?|\\b(?:rs\\.?|inr)\\s?)?-?\\d[\\d,]*(?:\\.\\d+)?\\s?(?:%|percent|lakh|lakhs|crore|k\\b)?/gi,null]],p=[{id:\"order_placed\",kind:\"order_status\",re:/\\b(order|po)\\b[^.!?\\n]{0,40}\\b(placed|confirmed|booked|ho gaya|lag gaya)\\b|\\b(placed|confirmed|booked)\\b[^.!?\\n]{0,20}\\border\\b/i,factPath:\"order.status\",expect:[\"placed\",\"confirmed\",\"booked\"],message:\"Order placed.\"},{id:\"delivered\",kind:\"order_status\",re:/\\b(delivered|deliver ho gaya|pahu?nch gaya)\\b/i,factPath:\"order.status\",expect:[\"delivered\"],message:\"Delivered.\"},{id:\"refund\",kind:\"refund\",re:/\\brefund(ed)?\\b[^.!?\\n]{0,30}\\b(issued|processed|credited|done|sent|initiated|ho gaya|kar diya)\\b/i,factPath:\"refund.status\",expect:[\"issued\",\"processed\",\"credited\",\"initiated\"],message:\"Refund done.\"},{id:\"offer\",kind:\"offer\",re:/\\b(discount|offer|cashback|voucher|coupon|off|free|muft|scheme)\\b/i,factPath:\"offers\",message:\"Offer.\"},{id:\"eta\",kind:\"delivery_eta\",re:/\\b(within|in|by)\\s+\\d+\\s*(min|hour|hr|day|ghant|din)|\\b(aaj|today|tomorrow|kal|tonight|subah|shaam|morning|evening)\\b[^.!?\\n]{0,25}\\b(deliver|pahunch|reach|aa jaa?yega)|\\b(deliver|pahunch|reach)\\w*\\b[^.!?\\n]{0,30}\\b(aaj|today|tomorrow|kal|tonight|by\\s+\\w+)\\b/i,factPath:\"eta\",message:\"ETA promised.\"},{id:\"payment\",kind:\"payment\",re:/\\b(payment|paisa|amount)\\b[^.!?\\n]{0,30}\\b(received|mil gaya|aa gaya|credited|confirmed)\\b/i,factPath:\"payment.status\",expect:[\"received\",\"paid\",\"confirmed\",\"credited\"],message:\"Payment received.\"},{id:\"guarantee\",kind:\"guarantee\",re:/\\b(guarantee|guaranteed|100%\\s*(sure|pakka)|pakka\\s*promise|zaroor milega)\\b/i,never:!0,message:\"Guarantee.\"}],h=/\\b(tu|tum|tera|teri|tere|tumhar[aei]|tujhe|tumhe|tumko)\\b/i,m=/\\b(bhenchod|madarchod|chutiya|bsdk|harami|kamina|saala|fuck|shit|bastard|idiot|stupid)\\b/i;function k(e,t,r){return null==e?r:Array.isArray(e)?(e.forEach((e,n)=>k(e,t+\"[\"+n+\"]\",r)),r):\"object\"==typeof e?(Object.keys(e).forEach(n=>k(e[n],t?t+\".\"+n:n,r)),r):(r.push([t||\"$\",String(e)]),r)}const b=(e,t)=>null!=e&&(Array.isArray(e)?e.length>0&&(!t||e.some(e=>t.map(i).includes(i(e)))):\"object\"==typeof e?Object.keys(e).length>0:t?t.map(i).includes(i(e)):String(e).trim().length>0);let y;y=e.needsFactCheck?((e,d)=>{const f=o(t,{})||{},y=Array.isArray(f.unsupported_claims)?f.unsupported_claims:[],v=y.filter(e=>e&&\"block\"===String(e.severity||\"\").toLowerCase());let w=d.preVerdict;v.length?w=\"block\":\"allow\"===w&&y.length&&(w=\"rewrite\");const A=(d.findings||[]).concat(y.map((e,t)=>({claimId:\"judge\"+(t+1),kind:\"semantic\",token:e.claim,status:r,source:\"judge\",evidence:e.why||\"\",severity:v.includes(e)?\"block\":\"rewrite\",message:e.why||\"Unsupported claim.\"})));let j=null,S=null;if(\"allow\"===w)j=String(e.draft);else{const t=\"string\"==typeof f.rewrite?f.rewrite.trim():\"\";t?(S=(e=>{const t=String(e&&e.draft||\"\"),d=((e,t)=>{const r=String(e||\"\"),i=u(t),s=(e=>{const t=[],r=[],i=e=>{const t=e.index,n=t+e[0].length;for(const[e,i]of r)if(t<i&&n>e)return!1;return r.push([t,n]),!0};for(const[r,s,a]of g){let o;for(s.lastIndex=0;o=s.exec(e);){if(!i(o))continue;const e=o[0].trim();if(\"number\"!==r){t.push({kind:r,token:\"link\"===r?e.replace(/[.,;:!?]+$/,\"\"):e,value:a(e)});continue}if(!/\\d/.test(e))continue;const s=e.toLowerCase(),c=/lakh/.test(s)?1e5:/crore/.test(s)?1e7:/\\dk$/.test(s.replace(/\\s/g,\"\"))?1e3:1,d=n(s.replace(/%|percent|lakhs?|crores?|k$/g,\"\"));null!=d&&t.push({kind:/[₹$€£]|rs\\.?|inr/i.test(s)?\"currency\":/%|percent/.test(s)?\"percent\":\"count\",token:e,value:String(Number(d)*c)})}}return t.map((e,t)=>Object.assign({id:\"f\"+(t+1)},e))})(r),a=new Set(i.disableRules||[]),o=[],c=Array.isArray(i.statementRules)?i.statementRules:[];for(const e of p.concat(c)){if(!e||a.has(e.id))continue;const t=l(e,c.indexOf(e)>=0),n=t?r.match(t):null;n&&o.push({id:\"s\"+(o.length+1),rule:e.id,kind:e.kind||\"statement\",text:n[0],factPath:e.factPath||null,expect:e.expect||null,never:!!e.never,message:e.message||\"\"})}const d={informalAddress:!(!i.formalAddress||!h.test(r)),profanity:m.test(r)},f=s.filter(e=>!(i.allowUngroundedSmallCounts&&\"count\"===e.kind&&/^\\d$/.test(e.value))),k=d.profanity||f.length||o.length?\"high\":d.informalAddress?\"low\":\"none\";return{schemaVersion:\"1\",figures:s,statements:o,register:d,risk:k,needsFactCheck:\"none\"!==k||!!i.alwaysCheck}})(t,e&&e.policy);d.draft=t;const f=((e,t,d,l,f)=>{const p=o(t,{})||{},h=o(d,{})||{},m=u(l),y=f||\"facts\",v=((e,t,r)=>{const o=k(e,\"\",[]);k(t,\"recipient\",o),k(r.allowedValues||[],\"policy.allowedValues\",o);const c=new Map,d=new Map,l=new Map,u=new Map,f=new Map,p=(e,t,r)=>{null==t||e.has(t)||e.set(t,r)};for(const[e,t]of o){p(u,i(t),e),p(c,n(t),e);for(const r of t.match(/-?\\d[\\d,]*(?:\\.\\d+)?/g)||[])p(c,n(r),e);/[A-Za-z]/.test(t)&&/\\d/.test(t)&&t.length<=40&&p(d,s(t),e);for(const r of t.match(/\\b[A-Z]{1,6}[-_ ]?\\d{3,}\\b/g)||[])p(d,s(r),e);for(const r of t.match(g[1][1])||[])p(l,a(r),e);for(const r of t.match(g[0][1])||[])p(f,g[0][2](r),e)}return{N:c,I:d,P:l,T:u,L:f}})(p,h,m),w=[],A=(e,t,r,n,i,s,a)=>w.push({claimId:e,kind:t,token:r,status:n,source:y,evidence:i||\"\",severity:s,message:a||\"\"}),j=\"verified\",S=\"contradicted\",x=r,_=e=>'\"'+e+'\" not in facts.';for(const t of e.figures||[]){const e=t.kind;if(\"count\"===e&&m.allowUngroundedSmallCounts&&/^\\d$/.test(t.value))A(t.id,e,t.token,j,\"small\",\"info\");else if(\"currency\"===e||\"percent\"===e||\"count\"===e)v.N.has(t.value)?A(t.id,e,t.token,j,v.N.get(t.value),\"info\"):A(t.id,e,t.token,x,\"\",\"block\",_(t.token));else if(\"identifier\"===e){const r=n(t.token.replace(/\\D/g,\"\"));v.I.has(t.value)?A(t.id,e,t.token,j,v.I.get(t.value),\"info\"):r&&v.N.has(r)?A(t.id,e,t.token,j,v.N.get(r),\"info\"):A(t.id,e,t.token,x,\"\",\"block\",_(t.token))}else\"date\"===e?v.T.has(t.value)||[...v.T.keys()].some(e=>e.includes(t.value))?A(t.id,e,t.token,j,\"facts text\",\"info\"):A(t.id,e,t.token,x,\"\",\"block\",_(t.token)):\"link\"===e?v.L.has(t.value)?A(t.id,e,t.token,j,v.L.get(t.value),\"info\"):A(t.id,e,t.token,x,\"\",\"block\",\"Link not in facts.\"):\"phone\"===e&&(v.P.has(t.value)?A(t.id,e,t.token,j,v.P.get(t.value),\"info\"):A(t.id,e,t.token,S,\"recipient.phone=\"+JSON.stringify(h.phone||null),\"block\",\"Phone not the recipient's.\"))}for(const t of e.statements||[]){if(t.never){A(t.id,t.kind,t.text,S,\"policy: forbidden\",\"block\",t.message);continue}if(!t.factPath){A(t.id,t.kind,t.text,\"unverifiable\",\"\",\"rewrite\",t.message);continue}const e=c(p,t.factPath),r=t.factPath+\" = \"+JSON.stringify(void 0===e?null:e);b(e,t.expect)?A(t.id,t.kind,t.text,j,r,\"info\"):null==e||Array.isArray(e)&&!e.length?A(t.id,t.kind,t.text,x,r,\"block\",t.message+\" Nothing at \"+t.factPath):A(t.id,t.kind,t.text,S,r,\"block\",t.message+\" Facts: \"+r)}e.register&&e.register.informalAddress&&A(\"register\",\"register\",\"informal address\",S,\"policy.formalAddress\",\"rewrite\",'Informal address; use \"aap\".'),e.register&&e.register.profanity&&A(\"register\",\"register\",\"profanity\",S,\"policy\",\"block\",\"Abusive language.\");const C={verified:0,contradicted:0,unsupported:0,unverifiable:0,block:0,rewrite:0};for(const e of w)C[e.status]++,\"info\"!==e.severity&&C[e.severity]++;return{verifications:w,preVerdict:C.block?\"block\":C.rewrite?\"rewrite\":\"allow\",counts:C}})(d,e&&e.facts,e&&e.recipient,e&&e.policy,e&&e.provenance);return Object.assign({claims:d,findings:f.verifications.filter(e=>\"info\"!==e.severity)},f)})(Object.assign({},e,{draft:t})),\"allow\"===S.preVerdict?(j=t,w=\"rewrite\"):w=\"block\"):w=\"block\"}return{verdict:w,finalMessage:j,findings:A,counts:{block:A.filter(e=>\"block\"===e.severity).length,rewrite:A.filter(e=>\"rewrite\"===e.severity).length},rewriteCheck:S?{preVerdict:S.preVerdict,findings:S.findings}:null,judgeNotes:\"string\"==typeof f.notes?f.notes:\"\"}})({draft:e.draft,facts:e.facts,recipient:e.recipient,provenance:e.provenance},{preVerdict:e.preVerdict,findings:e.findings}):{verdict:\"allow\",finalMessage:e.draft,findings:[],counts:{block:0,rewrite:0},rewriteCheck:null,judgeNotes:\"fast path: no verifiable claims\"},output={verdict:y.verdict,finalMessage:y.finalMessage,claims:e.claims,verifications:e.verifications,findings:y.findings,counts:y.counts,rewriteCheck:y.rewriteCheck,audit:{needsFactCheck:e.needsFactCheck,provenance:e.provenance,fetchError:e.fetchError||\"\",judgeUsed:!(!t||!e.needsFactCheck),judgeNotes:y.judgeNotes,schemaVersion:e.claims&&e.claims.schemaVersion}};\n",
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
      "selected": true
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