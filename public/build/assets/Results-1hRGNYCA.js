import{_ as c}from"./AuthenticatedLayout-WKzPmad_.js";import{o as u,c as _,w as h,b as e,d as l,t as n,p as g,a as m}from"./app-95_fpIAP.js";import{_ as p}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./ApplicationLogo-YpRhYfFp.js";const s=d=>(g("data-v-6d53631f"),d=d(),m(),d),x={class:"container mx-auto overflow-hidden"},v=s(()=>e("h1",{"data-aos":"fade-up","data-aos-duration":"750",class:"text-2xl font-bold text-center pt-20 pb-5"},"Mijn Resultaten ",-1)),f={class:"results-cards"},b=s(()=>e("h2",{"data-aos":"fade-right","data-aos-duration":"1000",class:"results-text"},[e("span",{class:"results-text-blue"},"Plannen en Ontwerpen"),l(" - Results")],-1)),G={"data-aos":"fade-left","data-aos-duration":"1000",class:"results-grades-cards"},T=s(()=>e("h2",{class:"results-text"},"Leerjaar 1 t/m 4 - Gemiddelde Cijfers",-1)),R=s(()=>e("p",{class:"text-xl"}," Thema 1 t/m 4 - Plannen en Ontwerpen: 6.5 ",-1)),C=s(()=>e("p",{class:"text-xl"}," Thema 7 t/m 8 - Plannen en Ontwerpen: 7.6 ",-1)),O=s(()=>e("p",{class:"text-xl"}," Thema 9 t/m 10 - Plannen en Ontwerpen: 8.5 ",-1)),k={class:"text-xl"},I=s(()=>e("span",{class:"results-text-blue"},"Gemiddelde ",-1)),V={class:"results-cards"},j=s(()=>e("h2",{"data-aos":"fade-right","data-aos-duration":"1000",class:"results-text"},[e("span",{class:"results-text-blue"},"Realiseren"),l(" - Results")],-1)),y={"data-aos":"fade-left","data-aos-duration":"1000",class:"results-grades-cards"},A=s(()=>e("h2",{class:"results-text"},"Leerjaar 1 t/m 4 - Gemiddelde Cijfers",-1)),P=s(()=>e("p",{class:"text-xl"}," Thema 1 t/m 4 - Realiseren: 6.6 ",-1)),w=s(()=>e("p",{class:"text-xl"}," Thema 7 t/m 8 - Realiseren: 6.0 ",-1)),B=s(()=>e("p",{class:"text-xl"}," Thema 9 t/m 10 - Realiseren: 7,7 ",-1)),M={class:"text-xl"},E=s(()=>e("span",{class:"results-text-blue"},"Gemiddelde ",-1)),W={class:"results-cards"},$=s(()=>e("h2",{"data-aos":"fade-right","data-aos-duration":"1000",class:"results-text"},[e("span",{class:"results-text-blue"},"Testen en Verbeteren"),l(" - Results")],-1)),L={"data-aos":"fade-left","data-aos-duration":"1000",class:"results-grades-cards"},S=s(()=>e("h2",{class:"results-text"},"Leerjaar 1 t/m 4 - Gemiddelde Cijfers",-1)),F=s(()=>e("p",{class:"text-xl"}," Thema 1 t/m 4 - Testen en Verbeteren: 8.4 ",-1)),N=s(()=>e("p",{class:"text-xl"}," Thema 7 t/m 8 - Testen en Verbeteren: 6.8 ",-1)),D=s(()=>e("p",{class:"text-xl"}," Thema 9 t/m 10 - Testen en Verbeteren: 8.4 ",-1)),q={class:"text-xl"},z=s(()=>e("span",{class:"results-text-blue"},"Gemiddelde ",-1)),H={class:"results-cards"},J=s(()=>e("h2",{"data-aos":"fade-right","data-aos-duration":"1000",class:"results-text"},[e("span",{class:"results-text-blue"},"Computervaardigheden"),l(" - Results")],-1)),K={"data-aos":"fade-left","data-aos-duration":"1000",class:"results-grades-cards"},Q=s(()=>e("h2",{class:"results-text"},"Leerjaar 1 t/m 4 - Gemiddelde Cijfers",-1)),U=s(()=>e("p",{class:"text-xl"}," Thema 1 t/m 4 - Computervaardigheden: 7.3 ",-1)),X=s(()=>e("p",{class:"text-xl"}," Thema 7 t/m 8 - Computervaardigheden: 7.5 ",-1)),Y={class:"text-xl"},Z=s(()=>e("span",{class:"results-text-blue"},"Gemiddelde ",-1)),ee={mounted(){document.title=this.pageTitle+" | Ricardo van Toorn"},data(){return{pageTitle:"My Results",gradesREA:[6.6,6,7.7],gradesPO:[6.5,7.6,8.5],gradesCOM:[7.3,7.5],gradesTV:[8.4,6.8,8.4],averageGradeREA:"...",averageGradePO:"...",averageGradeCOM:"...",averageGradeTV:"..."}},methods:{BerekenGemiddelde(d,a){let t=this[d],r=t.reduce((o,i)=>o+i,0);this[a]=(r/t.length).toFixed(1)},calculateAverageWithInterval(d,a){const t=this[d];let r=0,o=0;const i=setInterval(()=>{o<t.length?(r+=t[o],this[a]=(r/(o+1)).toFixed(1),o++):clearInterval(i)},100)}}},se=Object.assign(ee,{__name:"Results",setup(d){return(a,t)=>(u(),_(c,null,{default:h(()=>[e("div",x,[v,e("div",f,[b,e("div",G,[T,R,C,O,e("p",k,[I,l(" - "+n(a.averageGradePO),1)]),e("button",{class:"bg-gray-300 hover:bg-gray-400 p-2 rounded-lg",onClick:t[0]||(t[0]=r=>a.calculateAverageWithInterval("gradesPO","averageGradePO"))},"Bereken Gemiddelde")])]),e("div",V,[j,e("div",y,[A,P,w,B,e("p",M,[E,l(" - "+n(a.averageGradeREA),1)]),e("button",{class:"bg-gray-300 hover:bg-gray-400 p-2 rounded-lg",onClick:t[1]||(t[1]=r=>a.calculateAverageWithInterval("gradesREA","averageGradeREA"))},"Bereken Gemiddelde")])]),e("div",W,[$,e("div",L,[S,F,N,D,e("p",q,[z,l(" - "+n(a.averageGradeTV),1)]),e("button",{class:"bg-gray-300 hover:bg-gray-400 p-2 rounded-lg",onClick:t[2]||(t[2]=r=>a.calculateAverageWithInterval("gradesTV","averageGradeTV"))},"Bereken Gemiddelde")])]),e("div",H,[J,e("div",K,[Q,U,X,e("p",Y,[Z,l(" - "+n(a.averageGradeCOM),1)]),e("button",{class:"bg-gray-300 hover:bg-gray-400 p-2 rounded-lg",onClick:t[3]||(t[3]=r=>a.calculateAverageWithInterval("gradesCOM","averageGradeCOM"))},"Bereken Gemiddelde")])])])]),_:1}))}}),le=p(se,[["__scopeId","data-v-6d53631f"]]);export{le as default};