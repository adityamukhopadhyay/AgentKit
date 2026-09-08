const flowConfig = {
  "id": "140f6dbd-0e02-4fd3-9b08-b3b3fa29710a",
  "name": "send-gate",
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
  "created_at": "2026-09-08T13:52:41.562667+00:00",
  "trigger_id": null,
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
          "code": "// GENERATED from apps/lib/gate.js by apps/scripts/emit-code-node.mjs (terser). Edit the library, not this file.\nconst e={{triggerNode_1.output}},t=e=>{const t=String(e).replace(/[₹$€£]|rs\\.?|inr/gi,\"\").replace(/[,\\s]/g,\"\");if(!/^-?\\d+(\\.\\d+)?$/.test(t))return null;const n=Number(t);return isFinite(n)?String(n):null},n=e=>String(e).toLowerCase().replace(/\\s+/g,\" \").trim(),r=e=>String(e).toUpperCase().replace(/[\\s\\-_#:]/g,\"\"),i=e=>{const t=String(e).replace(/\\D/g,\"\");return t.length>10?t.slice(-10):t},a=(e,t)=>{if(null==e)return t;if(\"string\"==typeof e){const n=e.trim();if(!n)return t;try{return JSON.parse(n)}catch(e){return t}}return e},s=(e,t)=>t?String(t).split(\".\").reduce((e,t)=>null==e?void 0:e[t],e):void 0,o=\"jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec\",c=[[\"link\",/https?:\\/\\/[^\\s)>\\]]+/gi,e=>n(e.replace(/[.,;:!?]+$/,\"\"))],[\"phone\",/(?:\\+?91[\\s-]?)?[6-9]\\d{9}\\b/g,i],[\"date\",new RegExp(\"\\\\b(\\\\d{1,2}[\\\\/.-]\\\\d{1,2}[\\\\/.-]\\\\d{2,4}|\\\\d{4}-\\\\d\\\\d-\\\\d\\\\d|\\\\d{1,2}\\\\s+(?:\"+o+\")[a-z]*(?:\\\\s+\\\\d{4})?|(?:\"+o+\")[a-z]*\\\\s+\\\\d{1,2}(?:,?\\\\s+\\\\d{4})?)\\\\b\",\"gi\"),n],[\"identifier\",/\\b(?:[A-Z]{1,6}[-_ ]?\\d{3,}|\\d{3,}[-_]?[A-Z]{1,6}|[A-Z0-9]*\\d[A-Z0-9]*-[A-Z0-9-]{3,})\\b/g,r],[\"number\",/(?:[₹$€£]\\s?|\\b(?:rs\\.?|inr)\\s?)?-?\\d[\\d,]*(?:\\.\\d+)?\\s?(?:%|percent|lakh|lakhs|crore|k\\b)?/gi,null]],d=[{id:\"order_placed\",kind:\"order_status\",pattern:\"\\\\b(order|po)\\\\b[^.!?\\\\n]{0,40}\\\\b(placed|confirmed|booked|ho gaya|lag gaya)\\\\b|\\\\b(placed|confirmed|booked)\\\\b[^.!?\\\\n]{0,20}\\\\border\\\\b\",factPath:\"order.status\",expect:[\"placed\",\"confirmed\",\"booked\"],message:\"Claims order placed.\"},{id:\"delivered\",kind:\"order_status\",pattern:\"\\\\b(delivered|deliver ho gaya|pahu?nch gaya)\\\\b\",factPath:\"order.status\",expect:[\"delivered\"],message:\"Claims delivered.\"},{id:\"refund\",kind:\"refund\",pattern:\"\\\\brefund(ed)?\\\\b[^.!?\\\\n]{0,30}\\\\b(issued|processed|credited|done|sent|initiated|ho gaya|kar diya)\\\\b\",factPath:\"refund.status\",expect:[\"issued\",\"processed\",\"credited\",\"initiated\"],message:\"Claims refund issued.\"},{id:\"offer\",kind:\"offer\",pattern:\"\\\\b(discount|offer|cashback|voucher|coupon|off|free|muft|scheme)\\\\b\",factPath:\"offers\",message:\"Mentions an offer.\"},{id:\"eta\",kind:\"delivery_eta\",pattern:\"\\\\b(within|in|by)\\\\s+\\\\d+\\\\s*(min|hour|hr|day|ghant|din)|\\\\b(aaj|today|tomorrow|kal|tonight|subah|shaam|morning|evening)\\\\b[^.!?\\\\n]{0,25}\\\\b(deliver|pahunch|reach|aa jaa?yega)|\\\\b(deliver|pahunch|reach)\\\\w*\\\\b[^.!?\\\\n]{0,30}\\\\b(aaj|today|tomorrow|kal|tonight|by\\\\s+\\\\w+)\\\\b\",factPath:\"eta\",message:\"Gives an ETA.\"},{id:\"payment\",kind:\"payment\",pattern:\"\\\\b(payment|paisa|amount)\\\\b[^.!?\\\\n]{0,30}\\\\b(received|mil gaya|aa gaya|credited|confirmed)\\\\b\",factPath:\"payment.status\",expect:[\"received\",\"paid\",\"confirmed\",\"credited\"],message:\"Claims payment received.\"},{id:\"guarantee\",kind:\"guarantee\",pattern:\"\\\\b(guarantee|guaranteed|100%\\\\s*(sure|pakka)|pakka\\\\s*promise|zaroor milega)\\\\b\",never:!0,message:\"Guarantees an outcome.\"}],l=/\\b(tu|tum|tera|teri|tere|tumhar[aei]|tujhe|tumhe|tumko)\\b/i,f=/\\b(bhenchod|madarchod|chutiya|bsdk|harami|kamina|saala|fuck|shit|bastard|idiot|stupid)\\b/i;function u(e,t,n){return null==e?n:Array.isArray(e)?(e.forEach((e,r)=>u(e,t+\"[\"+r+\"]\",n)),n):\"object\"==typeof e?(Object.keys(e).forEach(r=>u(e[r],t?t+\".\"+r:r,n)),n):(n.push([t||\"$\",String(e)]),n)}const p=(e,t)=>null!=e&&(Array.isArray(e)?e.length>0&&(!t||e.some(e=>t.map(n).includes(n(e)))):\"object\"==typeof e?Object.keys(e).length>0:t?t.map(n).includes(n(e)):String(e).trim().length>0);const g=String(e.draft||\"\"),h=function(e,n){const r=String(e||\"\"),i=Object.assign({formalAddress:!0,allowUngroundedSmallCounts:!0},a(n,{})||{}),s=function(e){const n=[],r=[],i=e=>{const t=e.index,n=t+e[0].length;for(const[e,i]of r)if(t<i&&n>e)return!1;return r.push([t,n]),!0};for(const[r,a,s]of c){let o;for(a.lastIndex=0;o=a.exec(e);){if(!i(o))continue;const e=o[0].trim();if(\"number\"!==r){n.push({kind:r,token:\"link\"===r?e.replace(/[.,;:!?]+$/,\"\"):e,value:s(e)});continue}if(!/\\d/.test(e))continue;const a=e.toLowerCase(),c=/lakh/.test(a)?1e5:/crore/.test(a)?1e7:/\\dk$/.test(a.replace(/\\s/g,\"\"))?1e3:1,d=t(a.replace(/%|percent|lakhs?|crores?|k$/g,\"\"));null!=d&&n.push({kind:/[₹$€£]|rs\\.?|inr/i.test(a)?\"currency\":/%|percent/.test(a)?\"percent\":\"count\",token:e,value:String(Number(d)*c)})}}return n.map((e,t)=>Object.assign({id:\"f\"+(t+1)},e))}(r),o=new Set(i.disableRules||[]),u=[];for(const e of d.concat(i.statementRules||[])){if(o.has(e.id))continue;let t;try{t=r.match(new RegExp(e.pattern,\"i\"))}catch(e){continue}t&&u.push({id:\"s\"+(u.length+1),rule:e.id,kind:e.kind||\"statement\",text:t[0],factPath:e.factPath||null,expect:e.expect||null,never:!!e.never,message:e.message||\"\"})}const p={informalAddress:!(!i.formalAddress||!l.test(r)),profanity:f.test(r)},g=s.filter(e=>!(i.allowUngroundedSmallCounts&&\"count\"===e.kind&&/^\\d$/.test(e.value))),h=p.profanity||g.length||u.length?\"high\":p.informalAddress?\"low\":\"none\";return{schemaVersion:\"1\",figures:s,statements:u,register:p,risk:h,needsFactCheck:\"none\"!==h||!!i.alwaysCheck}}(g,e.policy);h.draft=g;const m=\"true\"===String(e.needs_fact_check||\"\").toLowerCase(),k=h.needsFactCheck||m;let b=null,y=\"\";const v=String(e.truth_url||\"\").trim();if(k&&(0===v.indexOf(\"http://\")||0===v.indexOf(\"https://\")))try{const t=(h.figures||[]).filter(e=>\"identifier\"===e.kind).map(e=>e.token),n=v+(v.indexOf(\"?\")>=0?\"&\":\"?\")+\"ids=\"+encodeURIComponent(t.join(\",\"))+\"&recipient=\"+encodeURIComponent(String(e.recipient||\"\")),r=await fetch(n,{headers:{accept:\"application/json\"}});r.ok?b=await r.json():y=\"truth_url responded \"+r.status}catch(e){y=\"truth_url fetch failed: \"+(e&&e.message?e.message:String(e))}const w=function(e,t){const n=a(e,{})||{},r=a(t,null);if(!r||\"object\"!=typeof r||Array.isArray(r)||!Object.keys(r).length)return{facts:n,provenance:\"facts\"};const i=JSON.parse(JSON.stringify(n)),s=(e,t)=>{for(const n of Object.keys(t))e[n]=t[n]&&\"object\"==typeof t[n]&&!Array.isArray(t[n])&&e[n]&&\"object\"==typeof e[n]&&!Array.isArray(e[n])?(s(e[n],t[n]),e[n]):t[n]};return s(i,r),{facts:i,provenance:\"tool\"}}(e.facts,b),A=k?function(e,o,c,d,l){const f=a(o,{})||{},g=a(c,{})||{},h=Object.assign({formalAddress:!0,allowUngroundedSmallCounts:!0},a(d,{})||{}),m=l||\"facts\",k=function(e,a,s){const o=u(e,\"\",[]);u(a,\"recipient\",o),u(s.allowedValues||[],\"policy.allowedValues\",o);const c=new Map,d=new Map,l=new Map,f=new Map,p=new Map,g=(e,t,n)=>{null==t||e.has(t)||e.set(t,n)};for(const[e,a]of o){g(f,n(a),e),g(c,t(a),e);for(const n of a.match(/-?\\d[\\d,]*(?:\\.\\d+)?/g)||[])g(c,t(n),e);/[A-Za-z]/.test(a)&&/\\d/.test(a)&&a.length<=40&&g(d,r(a),e);for(const t of a.match(/\\b[A-Z]{1,6}[-_ ]?\\d{3,}\\b/g)||[])g(d,r(t),e);for(const t of a.match(/(?:\\+?91[\\s-]?)?[6-9]\\d{9}\\b/g)||[])g(l,i(t),e);for(const t of a.match(/https?:\\/\\/[^\\s)>\\]]+/gi)||[])g(p,n(t.replace(/[.,;:!?]+$/,\"\")),e)}return{N:c,I:d,P:l,T:f,L:p,size:o.length}}(f,g,h),b=[],y=(e,t,n,r,i,a,s)=>b.push({claimId:e,kind:t,token:n,status:r,source:m,evidence:i||\"\",severity:a,message:s||\"\"}),v=\"verified\",w=\"contradicted\",A=\"unsupported\";for(const n of e.figures||[]){const e=n.kind;if(\"count\"===e&&h.allowUngroundedSmallCounts&&/^\\d$/.test(n.value))y(n.id,e,n.token,v,\"small count\",\"info\");else if(\"currency\"===e||\"percent\"===e||\"count\"===e)k.N.has(n.value)?y(n.id,e,n.token,v,k.N.get(n.value),\"info\"):y(n.id,e,n.token,A,\"\",\"block\",'\"'+n.token+'\" not in facts.');else if(\"identifier\"===e){const r=t(n.token.replace(/\\D/g,\"\"));k.I.has(n.value)?y(n.id,e,n.token,v,k.I.get(n.value),\"info\"):r&&k.N.has(r)?y(n.id,e,n.token,v,k.N.get(r),\"info\"):y(n.id,e,n.token,A,\"\",\"block\",'\"'+n.token+'\" not in facts.')}else\"date\"===e?k.T.has(n.value)||[...k.T.keys()].some(e=>e.includes(n.value))?y(n.id,e,n.token,v,\"facts text\",\"info\"):y(n.id,e,n.token,A,\"\",\"block\",'\"'+n.token+'\" not in facts.'):\"link\"===e?k.L.has(n.value)?y(n.id,e,n.token,v,k.L.get(n.value),\"info\"):y(n.id,e,n.token,A,\"\",\"block\",\"Link not in facts.\"):\"phone\"===e&&(k.P.has(n.value)?y(n.id,e,n.token,v,k.P.get(n.value),\"info\"):y(n.id,e,n.token,w,\"recipient.phone=\"+JSON.stringify(g.phone||null),\"block\",\"Phone not the recipient's.\"))}for(const t of e.statements||[]){if(t.never){y(t.id,t.kind,t.text,w,\"policy: forbidden\",\"block\",t.message);continue}if(!t.factPath){y(t.id,t.kind,t.text,\"unverifiable\",\"\",\"rewrite\",t.message);continue}const e=s(f,t.factPath),n=t.factPath+\" = \"+JSON.stringify(void 0===e?null:e);p(e,t.expect)?y(t.id,t.kind,t.text,v,n,\"info\"):null==e||Array.isArray(e)&&!e.length?y(t.id,t.kind,t.text,A,n,\"block\",t.message+\" Nothing at \"+t.factPath):y(t.id,t.kind,t.text,w,n,\"block\",t.message+\" Facts: \"+n)}e.register&&e.register.informalAddress&&y(\"register\",\"register\",\"informal address\",w,\"policy.formalAddress\",\"rewrite\",'Informal address; use \"aap\".'),e.register&&e.register.profanity&&y(\"register\",\"register\",\"profanity\",w,\"policy\",\"block\",\"Abusive language.\");const S={verified:0,contradicted:0,unsupported:0,unverifiable:0,block:0,rewrite:0};for(const e of b)S[e.status]++,\"info\"!==e.severity&&S[e.severity]++;return{verifications:b,preVerdict:S.block?\"block\":S.rewrite?\"rewrite\":\"allow\",counts:S,factIndexSize:k.size}}(h,w.facts,e.recipient,e.policy,w.provenance):{verifications:[],preVerdict:\"allow\",counts:{},factIndexSize:0};output={draft:g,claims:h,needsFactCheck:k,provenance:w.provenance,fetchError:y,facts:w.facts,recipient:e.recipient||\"\",verifications:A.verifications,findings:A.verifications.filter(e=>\"info\"!==e.severity),preVerdict:A.preVerdict,counts:A.counts,judgeInput:JSON.stringify({draft:g,facts:w.facts,recipient:e.recipient||null,findings:A.verifications.filter(e=>\"info\"!==e.severity),unresolved:(h.statements||[]).filter(e=>!e.factPath&&!e.never)})};\n",
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
          "rewriteCheck": "null",
          "verifications": "array"
        },
        "values": {
          "code": "// GENERATED from apps/lib/gate.js by apps/scripts/emit-code-node.mjs (terser). Edit the library, not this file.\nconst e={{codeNode_211.output}},t=[{{InstructorLLMNode_699.output}}][0],n=\"unsupported\",r=e=>{const t=String(e).replace(/[₹$€£]|rs\\.?|inr/gi,\"\").replace(/[,\\s]/g,\"\");if(!/^-?\\d+(\\.\\d+)?$/.test(t))return null;const n=Number(t);return isFinite(n)?String(n):null},i=e=>String(e).toLowerCase().replace(/\\s+/g,\" \").trim(),a=e=>String(e).toUpperCase().replace(/[\\s\\-_#:]/g,\"\"),s=e=>{const t=String(e).replace(/\\D/g,\"\");return t.length>10?t.slice(-10):t},o=(e,t)=>{if(null==e)return t;if(\"string\"==typeof e){const n=e.trim();if(!n)return t;try{return JSON.parse(n)}catch(e){return t}}return e},c=(e,t)=>t?String(t).split(\".\").reduce((e,t)=>null==e?void 0:e[t],e):void 0,d=\"jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec\",l=[[\"link\",/https?:\\/\\/[^\\s)>\\]]+/gi,e=>i(e.replace(/[.,;:!?]+$/,\"\"))],[\"phone\",/(?:\\+?91[\\s-]?)?[6-9]\\d{9}\\b/g,s],[\"date\",new RegExp(\"\\\\b(\\\\d{1,2}[\\\\/.-]\\\\d{1,2}[\\\\/.-]\\\\d{2,4}|\\\\d{4}-\\\\d\\\\d-\\\\d\\\\d|\\\\d{1,2}\\\\s+(?:\"+d+\")[a-z]*(?:\\\\s+\\\\d{4})?|(?:\"+d+\")[a-z]*\\\\s+\\\\d{1,2}(?:,?\\\\s+\\\\d{4})?)\\\\b\",\"gi\"),i],[\"identifier\",/\\b(?:[A-Z]{1,6}[-_ ]?\\d{3,}|\\d{3,}[-_]?[A-Z]{1,6}|[A-Z0-9]*\\d[A-Z0-9]*-[A-Z0-9-]{3,})\\b/g,a],[\"number\",/(?:[₹$€£]\\s?|\\b(?:rs\\.?|inr)\\s?)?-?\\d[\\d,]*(?:\\.\\d+)?\\s?(?:%|percent|lakh|lakhs|crore|k\\b)?/gi,null]],u=[{id:\"order_placed\",kind:\"order_status\",pattern:\"\\\\b(order|po)\\\\b[^.!?\\\\n]{0,40}\\\\b(placed|confirmed|booked|ho gaya|lag gaya)\\\\b|\\\\b(placed|confirmed|booked)\\\\b[^.!?\\\\n]{0,20}\\\\border\\\\b\",factPath:\"order.status\",expect:[\"placed\",\"confirmed\",\"booked\"],message:\"Claims order placed.\"},{id:\"delivered\",kind:\"order_status\",pattern:\"\\\\b(delivered|deliver ho gaya|pahu?nch gaya)\\\\b\",factPath:\"order.status\",expect:[\"delivered\"],message:\"Claims delivered.\"},{id:\"refund\",kind:\"refund\",pattern:\"\\\\brefund(ed)?\\\\b[^.!?\\\\n]{0,30}\\\\b(issued|processed|credited|done|sent|initiated|ho gaya|kar diya)\\\\b\",factPath:\"refund.status\",expect:[\"issued\",\"processed\",\"credited\",\"initiated\"],message:\"Claims refund issued.\"},{id:\"offer\",kind:\"offer\",pattern:\"\\\\b(discount|offer|cashback|voucher|coupon|off|free|muft|scheme)\\\\b\",factPath:\"offers\",message:\"Mentions an offer.\"},{id:\"eta\",kind:\"delivery_eta\",pattern:\"\\\\b(within|in|by)\\\\s+\\\\d+\\\\s*(min|hour|hr|day|ghant|din)|\\\\b(aaj|today|tomorrow|kal|tonight|subah|shaam|morning|evening)\\\\b[^.!?\\\\n]{0,25}\\\\b(deliver|pahunch|reach|aa jaa?yega)|\\\\b(deliver|pahunch|reach)\\\\w*\\\\b[^.!?\\\\n]{0,30}\\\\b(aaj|today|tomorrow|kal|tonight|by\\\\s+\\\\w+)\\\\b\",factPath:\"eta\",message:\"Gives an ETA.\"},{id:\"payment\",kind:\"payment\",pattern:\"\\\\b(payment|paisa|amount)\\\\b[^.!?\\\\n]{0,30}\\\\b(received|mil gaya|aa gaya|credited|confirmed)\\\\b\",factPath:\"payment.status\",expect:[\"received\",\"paid\",\"confirmed\",\"credited\"],message:\"Claims payment received.\"},{id:\"guarantee\",kind:\"guarantee\",pattern:\"\\\\b(guarantee|guaranteed|100%\\\\s*(sure|pakka)|pakka\\\\s*promise|zaroor milega)\\\\b\",never:!0,message:\"Guarantees an outcome.\"}],f=/\\b(tu|tum|tera|teri|tere|tumhar[aei]|tujhe|tumhe|tumko)\\b/i,g=/\\b(bhenchod|madarchod|chutiya|bsdk|harami|kamina|saala|fuck|shit|bastard|idiot|stupid)\\b/i;function p(e,t,n){return null==e?n:Array.isArray(e)?(e.forEach((e,r)=>p(e,t+\"[\"+r+\"]\",n)),n):\"object\"==typeof e?(Object.keys(e).forEach(r=>p(e[r],t?t+\".\"+r:r,n)),n):(n.push([t||\"$\",String(e)]),n)}const h=(e,t)=>null!=e&&(Array.isArray(e)?e.length>0&&(!t||e.some(e=>t.map(i).includes(i(e)))):\"object\"==typeof e?Object.keys(e).length>0:t?t.map(i).includes(i(e)):String(e).trim().length>0);const m={draft:e.draft,facts:e.facts,recipient:e.recipient,provenance:e.provenance};let k;k=e.needsFactCheck?function(e,d){const m=o(t,{})||{},k=Array.isArray(m.unsupported_claims)?m.unsupported_claims:[],b=k.filter(e=>e&&\"block\"===String(e.severity||\"\").toLowerCase());let v=d.preVerdict;b.length?v=\"block\":\"allow\"===v&&k.length&&(v=\"rewrite\");const y=(d.findings||[]).concat(k.map((e,t)=>({claimId:\"judge\"+(t+1),kind:\"semantic\",token:e.claim,status:n,source:\"judge\",evidence:e.why||\"\",severity:b.includes(e)?\"block\":\"rewrite\",message:e.why||\"Unsupported claim.\"})));let w=null,A=null;if(\"allow\"===v)w=String(e.draft);else{const t=\"string\"==typeof m.rewrite?m.rewrite.trim():\"\";t?(A=function(e){const t=String(e&&e.draft||\"\"),d=function(e,t){const n=String(e||\"\"),i=Object.assign({formalAddress:!0,allowUngroundedSmallCounts:!0},o(t,{})||{}),a=function(e){const t=[],n=[],i=e=>{const t=e.index,r=t+e[0].length;for(const[e,i]of n)if(t<i&&r>e)return!1;return n.push([t,r]),!0};for(const[n,a,s]of l){let o;for(a.lastIndex=0;o=a.exec(e);){if(!i(o))continue;const e=o[0].trim();if(\"number\"!==n){t.push({kind:n,token:\"link\"===n?e.replace(/[.,;:!?]+$/,\"\"):e,value:s(e)});continue}if(!/\\d/.test(e))continue;const a=e.toLowerCase(),c=/lakh/.test(a)?1e5:/crore/.test(a)?1e7:/\\dk$/.test(a.replace(/\\s/g,\"\"))?1e3:1,d=r(a.replace(/%|percent|lakhs?|crores?|k$/g,\"\"));null!=d&&t.push({kind:/[₹$€£]|rs\\.?|inr/i.test(a)?\"currency\":/%|percent/.test(a)?\"percent\":\"count\",token:e,value:String(Number(d)*c)})}}return t.map((e,t)=>Object.assign({id:\"f\"+(t+1)},e))}(n),s=new Set(i.disableRules||[]),c=[];for(const e of u.concat(i.statementRules||[])){if(s.has(e.id))continue;let t;try{t=n.match(new RegExp(e.pattern,\"i\"))}catch(e){continue}t&&c.push({id:\"s\"+(c.length+1),rule:e.id,kind:e.kind||\"statement\",text:t[0],factPath:e.factPath||null,expect:e.expect||null,never:!!e.never,message:e.message||\"\"})}const d={informalAddress:!(!i.formalAddress||!f.test(n)),profanity:g.test(n)},p=a.filter(e=>!(i.allowUngroundedSmallCounts&&\"count\"===e.kind&&/^\\d$/.test(e.value))),h=d.profanity||p.length||c.length?\"high\":d.informalAddress?\"low\":\"none\";return{schemaVersion:\"1\",figures:a,statements:c,register:d,risk:h,needsFactCheck:\"none\"!==h||!!i.alwaysCheck}}(t,e&&e.policy);d.draft=t;const m=function(e,t,d,l,u){const f=o(t,{})||{},g=o(d,{})||{},m=Object.assign({formalAddress:!0,allowUngroundedSmallCounts:!0},o(l,{})||{}),k=u||\"facts\",b=function(e,t,n){const o=p(e,\"\",[]);p(t,\"recipient\",o),p(n.allowedValues||[],\"policy.allowedValues\",o);const c=new Map,d=new Map,l=new Map,u=new Map,f=new Map,g=(e,t,n)=>{null==t||e.has(t)||e.set(t,n)};for(const[e,t]of o){g(u,i(t),e),g(c,r(t),e);for(const n of t.match(/-?\\d[\\d,]*(?:\\.\\d+)?/g)||[])g(c,r(n),e);/[A-Za-z]/.test(t)&&/\\d/.test(t)&&t.length<=40&&g(d,a(t),e);for(const n of t.match(/\\b[A-Z]{1,6}[-_ ]?\\d{3,}\\b/g)||[])g(d,a(n),e);for(const n of t.match(/(?:\\+?91[\\s-]?)?[6-9]\\d{9}\\b/g)||[])g(l,s(n),e);for(const n of t.match(/https?:\\/\\/[^\\s)>\\]]+/gi)||[])g(f,i(n.replace(/[.,;:!?]+$/,\"\")),e)}return{N:c,I:d,P:l,T:u,L:f,size:o.length}}(f,g,m),v=[],y=(e,t,n,r,i,a,s)=>v.push({claimId:e,kind:t,token:n,status:r,source:k,evidence:i||\"\",severity:a,message:s||\"\"}),w=\"verified\",A=\"contradicted\",j=n;for(const t of e.figures||[]){const e=t.kind;if(\"count\"===e&&m.allowUngroundedSmallCounts&&/^\\d$/.test(t.value))y(t.id,e,t.token,w,\"small count\",\"info\");else if(\"currency\"===e||\"percent\"===e||\"count\"===e)b.N.has(t.value)?y(t.id,e,t.token,w,b.N.get(t.value),\"info\"):y(t.id,e,t.token,j,\"\",\"block\",'\"'+t.token+'\" not in facts.');else if(\"identifier\"===e){const n=r(t.token.replace(/\\D/g,\"\"));b.I.has(t.value)?y(t.id,e,t.token,w,b.I.get(t.value),\"info\"):n&&b.N.has(n)?y(t.id,e,t.token,w,b.N.get(n),\"info\"):y(t.id,e,t.token,j,\"\",\"block\",'\"'+t.token+'\" not in facts.')}else\"date\"===e?b.T.has(t.value)||[...b.T.keys()].some(e=>e.includes(t.value))?y(t.id,e,t.token,w,\"facts text\",\"info\"):y(t.id,e,t.token,j,\"\",\"block\",'\"'+t.token+'\" not in facts.'):\"link\"===e?b.L.has(t.value)?y(t.id,e,t.token,w,b.L.get(t.value),\"info\"):y(t.id,e,t.token,j,\"\",\"block\",\"Link not in facts.\"):\"phone\"===e&&(b.P.has(t.value)?y(t.id,e,t.token,w,b.P.get(t.value),\"info\"):y(t.id,e,t.token,A,\"recipient.phone=\"+JSON.stringify(g.phone||null),\"block\",\"Phone not the recipient's.\"))}for(const t of e.statements||[]){if(t.never){y(t.id,t.kind,t.text,A,\"policy: forbidden\",\"block\",t.message);continue}if(!t.factPath){y(t.id,t.kind,t.text,\"unverifiable\",\"\",\"rewrite\",t.message);continue}const e=c(f,t.factPath),n=t.factPath+\" = \"+JSON.stringify(void 0===e?null:e);h(e,t.expect)?y(t.id,t.kind,t.text,w,n,\"info\"):null==e||Array.isArray(e)&&!e.length?y(t.id,t.kind,t.text,j,n,\"block\",t.message+\" Nothing at \"+t.factPath):y(t.id,t.kind,t.text,A,n,\"block\",t.message+\" Facts: \"+n)}e.register&&e.register.informalAddress&&y(\"register\",\"register\",\"informal address\",A,\"policy.formalAddress\",\"rewrite\",'Informal address; use \"aap\".'),e.register&&e.register.profanity&&y(\"register\",\"register\",\"profanity\",A,\"policy\",\"block\",\"Abusive language.\");const C={verified:0,contradicted:0,unsupported:0,unverifiable:0,block:0,rewrite:0};for(const e of v)C[e.status]++,\"info\"!==e.severity&&C[e.severity]++;return{verifications:v,preVerdict:C.block?\"block\":C.rewrite?\"rewrite\":\"allow\",counts:C,factIndexSize:b.size}}(d,e&&e.facts,e&&e.recipient,e&&e.policy,e&&e.provenance);return Object.assign({claims:d,findings:m.verifications.filter(e=>\"info\"!==e.severity)},m)}(Object.assign({},e,{draft:t})),\"allow\"===A.preVerdict?(w=t,v=\"rewrite\"):v=\"block\"):v=\"block\"}return{verdict:v,finalMessage:w,findings:y,counts:{block:y.filter(e=>\"block\"===e.severity).length,rewrite:y.filter(e=>\"rewrite\"===e.severity).length},rewriteCheck:A?{preVerdict:A.preVerdict,findings:A.findings}:null,judgeNotes:\"string\"==typeof m.notes?m.notes:\"\"}}(m,{preVerdict:e.preVerdict,findings:e.findings}):{verdict:\"allow\",finalMessage:e.draft,findings:[],counts:{block:0,rewrite:0},rewriteCheck:null,judgeNotes:\"fast path: no verifiable claims\"},output={verdict:k.verdict,finalMessage:k.finalMessage,claims:e.claims,verifications:e.verifications,findings:k.findings,counts:k.counts,rewriteCheck:k.rewriteCheck,audit:{needsFactCheck:e.needsFactCheck,provenance:e.provenance,fetchError:e.fetchError||\"\",judgeUsed:!(!t||!e.needsFactCheck),judgeNotes:k.judgeNotes,schemaVersion:e.claims&&e.claims.schemaVersion}};\n",
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
  ]
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