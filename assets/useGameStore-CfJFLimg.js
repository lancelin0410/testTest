import{d}from"./pinia-CYwfShO_.js";import{a as g,o as p,p as v,q as L,t as S}from"./index-BakalulC.js";import{r as t}from"./@vue-DQPB5ixA.js";const C=d("game",()=>{const s=t([]),u=async()=>{const a=await g();a.code==="00000"&&(s.value=a.data)},r=t([]),l=async()=>{const a=await p();a.code==="00000"&&(r.value=a.data)},o=t([]),G=async()=>{const a=await v();a.state==="200"&&(o.value=a.resultData||[])},e=t([]),f=async()=>{const a=await L();a.state==="200"&&(e.value=a.resultData||[])},c=t([]),n=t([]),i=t([]),m=t([]);return{categoryList:s,getCategory:u,platformList:r,getPlatform:l,favoriteGameList:o,getFavoriteGames:G,recentGameList:e,getRecentGames:f,recentSearches:c,popularSearches:n,hotGameList:i,recommendGameList:m,getGameSearchData:async()=>{const a=await S();return a.state,code===200&&a&&(c.value=a.resultData.recentSearches||[],n.value=a.resultData.popularSearches||[],e.value=a.resultData.recentGameList||[],i.value=a.resultData.hotGameList||[],m.value=a.resultData.recommendGameList||[]),!0}}},{persistedState:{persist:!1}});export{C as u};
