import{b as h,_ as u}from"./index.9bf8e4f0.js";import{o as f,c as _,a as s,e as b}from"./vendor.da4354f4.js";const d={_origin:"https://api.emailjs.com"},y=(t,e="https://api.emailjs.com")=>{d._userID=t,d._origin=e},c=(t,e,r)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class p{constructor(e){this.status=e.status,this.text=e.responseText}}const m=(t,e,r={})=>new Promise((a,n)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:i})=>{const l=new p(i);l.status===200||l.text==="OK"?a(l):n(l)}),o.addEventListener("error",({target:i})=>{n(new p(i))}),o.open("POST",d._origin+t,!0),Object.keys(r).forEach(i=>{o.setRequestHeader(i,r[i])}),o.send(e)}),g=(t,e,r,a)=>{const n=a||d._userID;c(n,t,e);const o={lib_version:"3.4.0",user_id:n,service_id:t,template_id:e,template_params:r};return m("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},x=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},v=(t,e,r,a)=>{const n=a||d._userID,o=x(r);c(n,t,e);const i=new FormData(o);return i.append("lib_version","3.4.0"),i.append("service_id",t),i.append("template_id",e),i.append("user_id",n),m("/api/v1.0/email/send-form",i)};var w={init:y,send:g,sendForm:v},$={methods:{sendEmail(t){t.preventDefault();let e=!0;const{name:{value:r},email:{value:a},message:{value:n}}=this.$refs;!a||!/.+@.+\..{2,3}/.test(a)?(this.$refs.response.style.color="darkred",this.$refs.response.style.border="1px solid darkred",this.$refs.response.innerHTML="<div style='font-weight:bold;'>Please enter a valid email address.</div>",e=!1):!r||r.length<=1?(this.$refs.response.style.color="darkred",this.$refs.response.style.border="1px solid darkred",this.$refs.response.innerHTML="<div style='font-weight:bold;'><b>Please enter your name.</b></div>",e=!1):!n||n.length<=10?(this.$refs.response.style.color="darkred",this.$refs.response.style.border="1px solid darkred",this.$refs.response.innerHTML="<div style='font-weight:bold;'><b>Please enter a message (at least 10 characters long).</b></div>",e=!1):(this.$refs.response.style.color="black",this.$refs.response.style.border="1px solid transparent",this.$refs.response.innerHTML=""),e==!0&&(this.$refs.submit.disabled=!0,this.$refs.submit.opacity=.6,this.$refs.submit.innerHTML="Submitting...",w.sendForm("service_p5qd7wt","template_5dbp12j",this.$refs.form,"user_UP4JSX06bSO1AlwW13SGc").then(()=>{this.$refs.submit.innerHTML="Send",this.$refs.submit.disabled=!1,this.$refs.submit.opacity=1,this.$refs.response.style.color="darkgreen",this.$refs.response.style.border="1px solid darkgreen",this.$refs.response.innerHTML="<div style='font-weight:bold;'><b>Thank you for reaching out! I'll be in touch shortly regarding your inquiry.</b></div>",this.$refs.name.value="",this.$refs.email.value="",this.$refs.message.value="",this.$refs.number.value=Math.random()*1e5|0},()=>{this.$refs.submit.innerHTML="Send",this.$refs.submit.disabled=!1,this.$refs.submit.opacity=1,this.$refs.response.style.color="darkred",this.$refs.response.style.border="1px solid darkred",this.$refs.response.innerHTML="<div style='font-weight:bold;'><b>Unfortunately, there was a problem submitting your message - please try again later or use one of the other listed contact methods!</b></div>"}))}}};const k={class:"contact-wrapper"},T={class:"contact-card"},L={class:"contact-content",style:{"padding-top":"70px","min-height":"calc(100vh - 250px)",width:"max-content"}},M=s("h2",null,"Let's get in touch",-1),H=s("p",null,"Explore the future with me.",-1),S=s("a",{href:"mailto:jay@jayeclark.dev",class:"btn btn-default"},"Email Me",-1),j=s("a",{href:"https://www.linkedin.com/in/jayeclark/",class:"btn btn-default",target:"_blank"},"Connect on LinkedIn",-1),E={style:{"margin-top":"20px","min-width":"40vw"}},q=b(" Or submit your contact details here: "),P={id:"contact-form",ref:"form",style:{padding:"10px 0px"}},D={ref:"number",id:"contact_number",type:"hidden",name:"contact_number"},F={id:"contact_name",ref:"name",style:{width:"100%","max-width":"400px",margin:"5px 0px",padding:"5px"},placeholder:"Name",type:"text",name:"from_name"},O=s("br",null,null,-1),V={id:"contact_email",ref:"email",style:{width:"100%","max-width":"400px",margin:"5px 0px",padding:"5px"},placeholder:"Email",type:"email",name:"from_email"},I=s("br",null,null,-1),C={id:"contact_message",ref:"message",style:{width:"100%","max-width":"400px",margin:"5px 0px",padding:"5px",height:"80px"},placeholder:"Message",name:"message"},N=s("br",null,null,-1),B={ref:"response",style:{"min-height":"70px","border-radius":"8px",border:"1px solid transparent",padding:"10px",display:"flex","align-items":"center","margin-right":"15px"}},J=s("div",{class:"contact-photo"},[s("img",{src:u,style:{"max-width":"100%"}})],-1);function R(t,e){return f(),_("div",k,[s("div",T,[s("div",L,[M,H,S,j,s("div",E,[q,s("form",P,[s("input",D,null,512),s("input",F,null,512),O,s("input",V,null,512),I,s("textarea",C,null,512),N,s("button",{ref:"submit",class:"btn btn-primary",style:{width:"120px",margin:"10px 0px 10px calc(100% - 120px)"},type:"button",onClick:e[0]||(e[0]=r=>t.sendEmail(r))}," Send ",512)],512),s("div",B,null,512)])]),J])])}var A=h($,[["render",R]]);export{A as default};