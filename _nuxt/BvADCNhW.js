import{d as x,aG as r,z as v,p as k,B as y,c as d,V as p,n as i,W as a,g as C,f as H,ak as B,i as u,af as I}from"./Bzx-ddzZ.js";const z={slots:{base:["relative text-2xl text-(--ui-text-highlighted) font-bold mt-12 mb-6 scroll-mt-[calc(48px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(48px+var(--ui-header-height))] [&>a]:focus-visible:outline-(--ui-primary) [&>a>code]:border-dashed hover:[&>a>code]:border-(--ui-primary) hover:[&>a>code]:text-(--ui-primary) [&>a>code]:text-xl/7 [&>a>code]:font-bold","[&>a>code]:transition-colors"],leading:["absolute -ms-8 top-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-(--ui-bg-elevated) hover:text-(--ui-primary) rounded-[calc(var(--ui-radius)*1.5)] hidden lg:flex text-(--ui-text-muted)","transition"],leadingIcon:"size-4 shrink-0",link:"group lg:ps-2 lg:-ms-2"}},P=["id"],V=["href"],$=I;var h,m;const j=r({extend:r(z),...((m=(h=$.uiPro)==null?void 0:h.prose)==null?void 0:m.h2)||{}}),L=x({__name:"H2",props:{id:{},class:{},ui:{}},setup(g){const e=g,o=j(),f=v(),{headings:t}=k().public.mdc,b=y(()=>e.id&&typeof(t==null?void 0:t.anchorLinks)=="object"&&t.anchorLinks.h2);return(s,N)=>{var n,c,l;const _=B;return u(),d("h2",{id:s.id,class:i(a(o).base({class:e.class}))},[s.id&&b.value?(u(),d("a",{key:0,href:`#${s.id}`,class:i(a(o).link({class:(n=e.ui)==null?void 0:n.link}))},[C("span",{class:i(a(o).leading({class:(c=e.ui)==null?void 0:c.leading}))},[H(_,{name:a(f).ui.icons.hash,class:i(a(o).leadingIcon({class:(l=e.ui)==null?void 0:l.leadingIcon}))},null,8,["name","class"])],2),p(s.$slots,"default")],10,V)):p(s.$slots,"default",{key:1})],10,P)}}}),E=Object.assign(L,{__name:"ProseH2"});export{E as default};
