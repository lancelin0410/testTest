import{aB as d,r as t,n as f,aV as v,aW as L,aX as p,aY as S}from"./index-BWYPlUKf.js";const y=d("game",()=>{const s=t([]),u=async()=>{const a=await f();a.code==="00000"&&(s.value=a.data)},r=t([]),l=async()=>{const a=await v();a.code==="00000"&&(r.value=a.data)},c=t([]),G=async()=>{const a=await L();a.state==="200"&&(c.value=a.resultData||[])},e=t([]),g=async()=>{const a=await p();a.state==="200"&&(e.value=a.resultData||[])},o=t([]),n=t([]),i=t([]),m=t([]);return{categoryList:s,getCategory:u,platformList:r,getPlatform:l,favoriteGameList:c,getFavoriteGames:G,recentGameList:e,getRecentGames:g,recentSearches:o,popularSearches:n,hotGameList:i,recommendGameList:m,getGameSearchData:async()=>{const a=await S();return a.state,code===200&&a&&(o.value=a.resultData.recentSearches||[],n.value=a.resultData.popularSearches||[],e.value=a.resultData.recentGameList||[],i.value=a.resultData.hotGameList||[],m.value=a.resultData.recommendGameList||[]),!0}}},{persistedState:{persist:!1}});export{y as u};
