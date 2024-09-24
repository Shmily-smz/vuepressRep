"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[6540],{61269:(e,s,r)=>{r.r(s),r.d(s,{comp:()=>Z,data:()=>z});var n=r(20641);const t=r.p+"assets/img/1.a22a3d10.png",l=r.p+"assets/img/4.3cd6b9c9.png",i=r.p+"assets/img/5.b5e079c3.png",a=r.p+"assets/img/6.0b04abe1.png",v=r.p+"assets/img/7.190132f5.png",c={},Z=(0,r(66262).A)(c,[["render",function(e,s){return(0,n.uX)(),(0,n.CE)("div",null,s[0]||(s[0]=[(0,n.Fv)('<h3 id="_1-问题描述" tabindex="-1"><a class="header-anchor" href="#_1-问题描述"><span>1. 问题描述</span></a></h3><ol><li>ABC所封装的CEF自带的汉字字体不够美观,需要进行外部字体的引用.</li><li>输入域等字体大小需要提供选项让柜员进行选择.</li></ol><h3 id="_2-问题分析" tabindex="-1"><a class="header-anchor" href="#_2-问题分析"><span>2. 问题分析</span></a></h3><ol><li>外部字体的引入可以使用css的@font-face的方式解决</li><li>需要标注出需要统一修改字体大小的h5元素:不考虑使用js去逐个修改,浪费性能且每个widget都需要新增api.以css的方式进行处理,在<code>&lt;body&gt;</code>上标注上代表对应字体font-size的class,然后利用子孙选择器让对应的h5元素进行font-size修改.</li></ol><h3 id="_3-问题解决" tabindex="-1"><a class="header-anchor" href="#_3-问题解决"><span>3. 问题解决</span></a></h3><p><strong>1) 利用@font-face引用外部字体的实现:</strong><strong>1.1)css中外部字体的的引用方式说明</strong> font-family的声明方式说明: <img src="'+t+'" alt="图片描述"> 声明好的font-family的使用方式说明: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAABmCAYAAACa/hfIAAAd+UlEQVR4Ae2dd3xUxdeHb0gI6ZEmPSJSIlWRbkFBVJogKgoi+lNAEARBkCLSpQligYCAgEh7AUVp0oIJCSRAKNmUTUjZZNO275IQigjP+9lN2U2ISDTBXJw/9rPJ7s3cM+d855kzZ+aCdOXKFcRL+EBoQGhAbhqQ5GawsFcMMqEBoQGrBgS8ROYpMm+hAVlqQMBLCFeWwhXZl8i+BLwEvAS8hAZkqQEBLyFcWQpXZF4i8xLwEvAS8BIakKUGBLyEcGUpXJF5icxLwEvAS8BLaECWGhDwEsKVpXBF5iUyLwEvAS8BL6EBWWpAwEsIV5bCFZmXyLwEvAS8BLyEBmSpAQEvIVxZCldkXiLzEvAS8BLwEhqQpQYEvIRwZSlckXmJzKuM4GVBeeQ8r74XxBvfxmGUKxByLVzJvsDVi7FcvZQrBrVc4yjs/k9ot4zgZeDY5gh6vh1Et0nnSamQ4snBkK7l7Jk0zqgttwb38kWu6bdyI6ELN5V9uKEz3npNheyXmIFFFvbf1EAZwSsXg1rDwWA1gbF6civkINdycM0pBo4JYlZg5q1guhTDH4kPQtzT/JG1i2vZObdeUyH79d8UrgCWiHsZwUsOjsxky5wTdBwSxPSS4JVznBvxEjeTZnHtYrYAlwC10EAF10AZwctE2I4zvPBOEG1nnEdT0OnEBAaOP0bbIUGsj7zI+aNnGfFhMO2HBNFj8kkOJhVdmqXvC7Fd+9ayWGLSM/i/gOM8NSSI9v8LZkSAgvNp5kJBmTIMfDUviLZDTrDpvIFLBfe8oufQ+lO8MCSItquUXLlykbNHzvG69fdir2Frkkk05IM3JzQPXsmLuZotBxgLG0X29d/WwF2D18crTzN0/AlenRzGSx8c47EhQTw7KYJDqRcLgVQAr1enHeejhSd4ZVIYA6eE03dMsC1j6jM/kvCUvHrVncMrm9gwJR9PDeP5d4Nt9+06NoyBU08xc2caqSYBLwGB/zYE5Br/uwav52ZGcDBGx8UcE2nnonh7WBBth4cwdW8q2flZUwG8OgwPYdw6JcosE1dyLShPxvLhx8G0ffMY8w7m1avuHF4FwvyrZeMRbsRJ3BSZV+FkIldRC7sLNH9vv981eM04nOlQyDdxcFGQDUYfrE0sXGYWwOvFWecJSrJwOR9ql7PN/PbjKXoOCaL3qjjb4CpreF3TzOSmsgY31Nu4euneDroY3CK+94IG7hq81imKnps6vdZagzrG6IAEMotlXkO/iCXa6CCwy/a61WNLFGUOr9/Te3Ij/iFuJi3id7OWK5cd7l1YSxOf3QuCF324d3R81+C1Prqo024HL1vBvqAWZYOHHV5tywNeae+D0oWbF4Zy3agVyyYBbKEBGWigQsJr8OJozmvtmVputpmjP56i15Ag3vo+0SYsc6aBbz6zZm/HWR+hJyc/W7ps1rBtZRhPF+42FkDTXvOafCjjFnFe1a3gprIaN1I3cTWn4G/Eu8hUhAYqqgYqJLy6fhjOqt/SMWbncuXyRZIik5g6LZi274byTYjeBp4cvZFNASF0GBLEqI3JpBqzyc25yIVT8YybEpx3LMJ2VKJAfHZ4vbomHn2OHY624OT8Jo5KyGC2ragDSdhVMM7u3nuFhNezo44xdN5JPl0dy8J1kYybEUKXN4MZ/GUMkZn5B0gvXSTi0DkGDgvisfdC+SggivlrIpm49ATDJoTYzoflnfMqcKaBo6tP0nloEJ3fP8G0NbFsCtGSdTH/e3HO65ZsVAzIAu2I94qohQoJryELz7MrMIbxE/MyqC4jQ5j+vZLTKgvZuZfzB9llLHoNh3dEMHR0kO38Vo+Pwlj1m5Ltq046HFItEF4uRlUyXy8K4am3gnjsrSDGblShKtgYEPAS8BKZp6w0UEbwusyl7EsYjDnozJcKjzhcyc3FYMpBZ8zhYrHjB5cu5n1usuQWHqEoOCphK9gbczGb867Rm3Kw5OSSe7kAXPlAunyZSzmXMOXfw2C+RPalXHIu5ttysdjS8HIu2Rdz0FvtNOZgumhtM7+tAnglzeXqRfFcY0WcaYVNBROxeLdqoYzgVTbOLAKvIruNZdP+bcWfE80fCZ4Qb91xjMUK3tteL2Zp4R+hgX9VAwJeBQLMNXAtczY34x/gprK/+CdxCvwi3v/VASom0D9PXMoGXrlZXM2O/sevjN15Na63loYTq/vn7ZXaJks4v2uWcz19Ib8bzgnRCnAJDVRgDZQJvK5awvhdu/gfv3LjlxAeuoTo85+TnfXP2/unNolZ789nPeEb4Zt/WwNlAi9z5q9kxi3BpE/AYtbcOy+LBYt4CR8IDVRIDZQZvDKUSzEZ1BWykwJAAsJCA/eeBgS8xKwqJhyhAVlqQMBLCFeWwhWZ1L2XSZU2pgJeAl4CXkIDstSAgJcQriyFW9pZWlx/72Vq8oCX2YQuNYrdK6bx/KM1kCSJxj1WoqjA4DEZMzl7aANj+naguqcrUtV+bLlwlwVkjOPHyQOoUaMDc36JwpTvr6Qdo20+bOA/mqDUu2xTaWJmyCDwm/d5UJLoPGkjGTpThQetISORPQEf80LLunhIEvePXFvhbZYr2GUBL5M2mV1LhtDE1406zdrxQs/evDNqF3GlGQh/41qzyYA6/hyhx8+QmK7FXIo2ksK+o+fDHnjd70fHrs/Rq9dUDqruMijSjzP7aX+kKl70XXyErHz7BbzKKw5ZHPu8H/Wc3ajVuC3dnu9F72W77wK8DKTGnOf48WCiUvR34X7l5b/StSsLeGkSw/nk5epIUhvGfhuIwVS6Tv7dmUWfkcAPM7rT9vkRbD+ZUJi53El7oV/2R5K86PL6TELjNZjNd8fmorZlcn7PKqbM/ZwDivRCUQt4lVcsTjHTT0Kq0ZhBXx1EfdcyxSjWv9iDx7s9w7IjqYVxLqqF8urzv9euLOCVER/CxD4SktSDz/dG3bXgaFMVzHxZQvLvy8bwC6WCV+DC7khSbfqOXkdM1r8X4JIELOBVXvEIYqIkIfm1ZtSPkXdNpxZLKNMlCZ8G/iw+LOBVqme6rCfsy+uQatBCP+rXq42PuxVeblS9vy5+fn70WHvSLo7MBPavns4r3dvZvmvVqTvvzV3H2WSD/RrrkunMD7Twb0yLtp34OSKZoz8sYGC3VjR84BH6jF7MkXh7yh2yrAUN6tfF10NCquxOjTr1aODnR6cVJ4q2WWwpqQ5cSvs2TalV1Q1Jcsbduzp16/vh98ZykqzXmrTEndzP0inv8Vynxvg90JBW3QayeFsIKq19UOmSIlj4fnf8/PqwPDiZxOPrGdW3Iw+3aEv/D1cQnabDbNQTuX85I3p1wt+vNc8OnUVIir0Ni0XBdz2esPlkwMaIQruLw0sfsZVnu7SxXbf0SEbhdXngUxMwzA+/Tv1ZuPscBl00O5bNZ2nABsIS7P4qCZLWz9RndrNk6js8174lD/n58UjX15i7IYg0o6OdVr/oiQ3ezsdvPsPDTfKuW7QzjL1f/nnNK+XMAZZNGMTjbfzwa+xP537DWbL1GHqjY20sgyPLBtG6qR/tJ27n1PHtjHvxCZoOmEWoKiu/r3qSz+5nybjX6Ny4EQ0bPcFb074iRKkt5otiNhfGPoGfx7xBC7/a+Fjh5VwZ75p5Ov14Y7i9jawEgrcu5d1+T9p83bTFM7w9+WsCFckYHDLzrHO/MPyljvj5vcLmeAvKI6sZ3e/xwhgHFZYfktk/dTht/WrjK0k4OVemaq36trbHrTpsu686OpA1Sxfx3c/BqLIc/fJnfZHP5xU+8wqc7YuPtxdVXKzwcsHN0xtfX186B5zAYjaReX4no57yw8W5Mu5e3vj4+ODt5YGrsxNSg5fYdk5nz5jCv8XXswreVavx7rC3aFkj73ov98o4VXKn1YuzCEvJC3DQwgb4+HhTpbKEVMkFD2vbvr60WBZiF2OheO0BTz04H/8Ha+Pp5oIkOeHi6o63jy++/b8gwWJBdXoLbz1TJa89H1+bvZ7urlTybMawrw+Tpjfb2tclhDHttRZI0qNMmDmejh5WW73xcKtMJSeJlsNWE7LlA1q4eeLt44OXexWcnCQ8n/iE8My8NiyWs3zVqpGtOP/EyrBCu4vDy6I/zbLujW3XPTxlD+kOA8mctJk+khONu77O7vNaUo9tYOrkyUyePo8N+8+hLcEHdpAFMsLF3ldfX6udlXH2qMagJftQmQrsNBG39zM6VHfCubIbnt4+Nr9UrX4fHTt3oE6xgr3ZmMaJTdNpVtsbZ1d3vGzXe2Pzo5MvHcZuIdVQ0HY6++Z0p7qHhO+LHzKoRy3b9b7dJhCclInZpCd85zyebOSNq7un7b5WP7tVrkKznmM5GJl2B0v+eHa+258Gvl5UscLLqRKuHnk6/eC741jMZjLiTzD/9fZUr+SCm4cXPj6+eHt5UsXFGZ+HXuDrozGFNdWM09t4qUt9JKkLc76ezCO26+0xlh6dyNE0q06T2D3+DRo73NfN08c2PkZ8/ast3qd3LmLK5MlMWbCOsDh14T3sMbJrV26fVXh4WR36Z8tGXXIYi97sTFXnarR6eS77IpPRanWknDvI4neewtvFiQeen05oev6Mkw8vycWNRwd8zK6TSei0GhS759ChqoRLww4s3BuFMX9AlseyMT02nO0/rCY4Wo3RbMG6KXBy5zy61JXw6P4RJ5LzsgE7vCSqNxvE+pAEtBnJHF03iXYNPZCkatRt2ZaZP54mXZNJ5J5FPF7vPpzdvRn9Y0I+qO4QXhYLsVtH2rKGBv4jOawqmKGNKFb0wMm1Nn3H7iDRmi3pL3Bo01o2/t8vnFcVy2xvAdkZNs74lmPWvtrqlBpid39CK8mJJl2H2mBoGzDqYEY9IuFetSlvfLKRiAQNZl0m4Ts/p29ra63TYbfRbEAZuIGXWlfDo15HxizfQ5xah0GbQvjuL3ipQx0qOfkwaMWZfLDa4eVaqwmDp25FkW4sBLk27gCDW3tz30M9mLv1BBqDCaMuiY3TelKjSm36zdhOiqbAH3810EteNpr0anZMfZYarr607jOWzSFR6IwW1LEnWDH+Vfx8XfHq+CHhGXnt2+ElUbPVCDYExaLVaojc9zld61e1+eO1Dfbd49stGzOSTrFr43p+OnqaNO2d9uOv+lkxvpcxvIzEHFpOr+YeSE2GsDtWUyhI64DQKTbR28sN7/qP8tlBVd53+fByq1qH2Xsca1ipfPWShOTRnHErjpFRjvCyWLMao46U+EhCjxxm56YAFk4fTusGEtL9b7IzNu/5UDu8ajL0W/vSwxAXyLjnWuMiSTQf+RPJBcDQneWLHo2QXD3ovPho/sC9c3hZkn7l7UYSXvWaMntvvm8MUSzrKOFd/xHmH0i0Z7AF97yDd7NeT2r8eUKD9rNjw1qWL3qbtpKEZ9teLA9OssUl9adR1JBcaf3cRwTG25dqZq2aH+e8TjUHeJl1an5e+Ca1JE+6TdpcrCieTtCyQXi4OlGry1xOaayDzA6vao3f5Od4O7isOolaPxhf5/vp+cFqFBkFg9tE/Inv6N1YwrfPNE6pimrLBtwS+14yvLQpRxjeSMKjWXeW7j2PzmHDKSNyN8O6NqGyVJ+Jv+ZtqtjhVYcxu1LsujbGsLJPExu8mk/bS2ahDaLmVao6l+M/h1GeNS+rUErOvLII+24Knd0kag35nGRNsSzAFMnXXb1wqvUQQ7eeKwIvn/sbsCmiQKh5s8jG963L0qaMXBCIOl8UJWdeepRHNjKpd296F75eYsyUjSgcCvMlF+zNZCVGsHr6ezz/ZCfaNG9OI7/GtHi0GdU8rfd/lY2KvIKrHV5W+BZkUhYs6adY3K8L7pLEgHVxdmFbUtj2vr+tPtdh6m7SbH0oBbwsGkJmtcPJvS79pu0m1WJBfzLAdsaqYffpHM/PCv584JYwG2tiWTt9EN2e7EibVs1o2KQFnTs0scFIatWDBUfy7A9d+CCSsy89Rm8hzrEWZtYQtmEajzjAy5iZyKpxjyNJD/Px9+FFQGC1TRu8DB8PV6rXfZdfk4vCq84r3xFfOODz7N03tRpSJS8aPNyJHoXx7EWPru2o6yshdRpDYGIGZoOGQ2smOMS8N737D2DinmiHGJQMr8wzq3jGejbx2aHsi8x0uN6ayUaxcuAzNp/0+y7e9p0dXl1YFeXo11S2j/W3wct/7HZbjPLiIeAlM3hlEBowkQ6SRKvRa0jXFp1RLZY4Ngz0Rrq/EYO3nM0TTH7m5VvLj61nHUVh4c7hpeX05pk8Za1tFL7ceaTbTI6n2dssCV5mo5a9i9+hkbsvLXqP4fs9oSgUMZw++gOvdPwzeLVjweFi8OqfB6/Xvr/gMBDyhV3ZnQ5Tfv4b8LJgjF5FN8mDdn2ncypVT8iSDrY+vr7qLIZig/6vIaYjZGlvfLx98H92JKt3hxARGUN8/E7esfrNAV7WuqbkXp2+Cw46DEirL7Wc3DyTxxzhlZHAitHtkKT2zPvxbJFCt82mk6ttdc3qdf/HvmLwqjdsMynF+vHTBMmWrdZr2pIOnTrc+np9HqHJWZh0GWyc1Nkh5hJSFU8ca4kWS8nwygj/is6SROs+wzmqLDbJWuLYOLgHNSWJvmuLw+sp1sTaNWWxCHg56k7Gy8Yswrd9wuM1JaS+s4jOKLrzZc4KZJyPB+51mjHt55h/Bq+mffg+zHGZ6Siokn8uCV4GjYoZ/SSkhj1ZdjAqDwhmM6ozOxjY7t+Hl8Wi4Zshlan6yPNsOrqHGc0bIlXuzdYiA6jk/jqKyvaz6QRTfTzxrNeM2XsTCyFrzviFQcXg9ds861MTXjz96rcodAWFdgtmfTqHlo7gAQd4mbJUrJ30PJWkBowKCEJrtF9vsZhQbp+Al5szNR+cyrFMq632ZWNJ8DowtR6SaxOGzt5DSuEGwh32sRgI/wxeWdEbedFZos4Tr/N/J9VFNgBMqlA+7d0OD8mFkTvysm575lVKeNX3Z+Ehh2XmLfb93X5VzL+TMbwspETs4N1udajs1IIxG0JJztRjMpnQpScSsvoD6rm58GCn9zlY8FjO38287uvEvF/OYDA7DpTbB7QkeOkzIxn3lDNS/aeZvfMUWpMZkzaF/StG4u9WEeBlIWz9WB6o3pJ3R79Dg/r3UWv4zqLZkElDYnQkUbHxpN/uEGbqft6p7oFHrYeYsvUcWqMFoyaZ418Msm3rO2ZeGYdnUqdyJeo/2p+VB6LJ0pswG3Uknj7A+F55u6CFjwcZszjx/XTa+7pSp9sY9p1OQGuwXq9HHR/IgsFtcK3kRce5h9HYBu/t4ZW8fyaN3D1o8fx4doYloLPB0Gy7v/pCAikZmlLU+krOvPRZCub3r0UVn6YMnruJyJQsW5uGrFSObZpH5ya+eNR5m735j2r9XXi51nyQUevDbb4umEz0GhUxkZEok9S2TYKCz++Fd1nDy6JTcWTlRDo/4I1T/fa8NWE68+bOZdqYIXRoeB+eddoyeUtE4WMxllLCS58ex5fDG1FZ8qVd7xHMmTef5ccclnC3mdlKgpd16bFy1CN4Sr606fE2M+Z8xrzp4xj44hM8WKdiwCtF8QvvPlafevVr4+bmz5zggrNQebDWKg+y7NPJfDJ3KbvDk2+znIxn/YCHkCp70+SZoUyes4BZk97jtZd70LJY5mXRn2P5gDb4uPjQ7KmX+Wj6HObPnsbIl3rxeOuHbbughfCymMlKCOOL0d2p6u5N425DmTxzLp/N/pSRrzxJbV8fmj7zEfsLl2e3h5dBE8H8ga2p5lmdNj3fZNqseSxYMJ951vsPnMjaX8/+xXEQx0msZHhZj2Oc+3kpvZrdj3edFrz83kfMWbCAmR8Np1uLBvjWbsnwgMPo8/VUenhF882jHkV8vSs0b7WRGLaFWZOns+LHYFQ6R1vl/7O84WWxYEpXEvjDQob3f5IHangiSVWoVr8Fzw0ay1fbglAZHIJUSnhZa1QRewIY9KQ/Hq7OSN730/XL44VLoNvNXiXBy2IyogzayoRXnsDPpwpOXjXpMmAMX25cy2tPVAx4GdKVrBn7LPdZdwQ7f0KUYwHduosbH8hXn05m+rwv2HtKVXispCRfqE5tZuwrnal3nxtuPg148uXxbD+5g1HF4WWxkHb+AJ++3RP/mj64SD480L4n4+etZ/28ESU8mG0gNfooATPeo3v7JjZbXdy8aNzmGYZO+Jy9ZxyXTreHl/WsYNLp/Sz98A26PFwfF2cnnCpVokHzdgz43+cciLh9H4v2u2R4Wa8xatSE/BTAuIE9aFHf3VY7c6/zEE/2/x8LvtuPMkNXqKvSw8tI3MH5vNzlIXzdJNx8avLe8kBbe+d+WsLkmUvZFRKDzuH8XlG7HcbIbSbkivY3soCXyXq0IEGBQnGBtOK7ilZnG3VkpiYTFxuNQhFFjPICKWkajMWXefoMoqIUREXHkKkvGrBMlbX9WFRqrcMywYzJoEOdfIHoKAWK6FgS0+0iu10wtWkXbMX4BFVGkWcxree6MtXJxEVH2dpLUmei02tIirfeP5FMQ94uqHXZlJqoRKGIQ+24GWHSk5YYT5RCQWKm4yaFiSyV9foo4lILljp60pWxKBQK4h3sNmapbJ/FKFW37NZZshLZMe1lakpeDP4y6NZDjWar/SmkpqXnL7GK+rGoT0xo1EkoY6KIilaSrM7CZNaiUihQKC8U6ZfZbEKTkcIFWwyjiUtMIUtvRJuuItZqf0ompiLxNGPUZqJKjCfG2l5UNPEJKtI1hiI1JWsdTKPOi19McqZDbB3sNpvQZ6WTdMHqP2scFCgvJKLO0GIsVR1MR4r172OUqLKKF+bzzvRlpam4oIyy3SNKGU+yOqPYEwEWTPosEuNjUCjiyXCcfC0FMVagVOUtPQv9bdKjToonxqbvWFQ2GBrYt2IKM5et47iydP+wQGG7FRhmsoCXHBwpexvNZqwAUZ0/wKinfXBuOJDvI+yFdtn3rwIPwnLzrekcaz6dxrJ1v6C0nXlzAPY94A8Br3sgiP9Y/Ho1Zw/vZ9u2tYzr0xxfz1q8PnMLiRmOmd29Jfx/7DM56CYtlB9WrmVXYKS97isHu+/QRgGvO3TUPS32lEDG+jew1WFqPtiWgRMWcVyZfuuSUfiqsC51T+tBJnEW8JJJoMp1sOiSCNr8PQEBAWzbHUxs6p3V9crVJhEXAcq/0ECZwOuy6SiX02dwNesLrmq+LHxdtpwjNzdXvIQPhAaEBspcA2UCrys5CVwzH7zldeWS6m8/cuT47KT4WfzX8kIDQgPFNVA28LoiHFvcseJ3oQmhgfLVgICXAK/IjoUGZKkBAS8hXFkKV2Q15ZvVyMG/Al4CXgJeQgOy1ICAlxCuLIUrh8xA2Fi+2WGZwOua/ktuxDfh5oUpXNdncOVy+RotRCH8KzQgNFAm8LpqCeW6+jVuxnlC3If8flE4VgwuoQGhgfLVQJnAyxakS7H8kdQYlFW5ritfo4UohH+FBoQGyg5eV7K4rnoYlBJ/aIVjxeASGhAaKF8NlCG8NFxXNRfwEhsAYgNAaOCuaKB84KXJuSvGi5mtfGc24V/h34qsgTKEl4nrqd1tmdeNtFNczRWBr8iBF7YJfcpdA2UIrytcNf/KH0nduBnfnz+ygrl6SQhE7gIR9gsNV1QNlCm8rmRHcSOhPTeVLbih/pmrOSLwFTXwwi6hTblroAzhlc3v6he4qazEDXUgV3NzxGFVUbgVtU+hgXLTQBnCy2G3UZNdbgbLfbYQ9ouMR2igbDRQPvAS57wEvEXGITRQzhoQ8CpnB4tZtmxmWeFH4cfiGihDeKVzPdlfHFIVMBQZh9DAXdFA2cHLfIw/LviBsqV4tlGI966It/hMLH7/b2VnZQKva4YfuBFfl5vK6txM/IVrYvCKwSs0IDRQzhooE3hdNe/kunok19N/5Vr2f4v+YrYX8RYa+Hc0UCbwEsH7d4In/C78/l/WgIBXOae2/2Vxib4LuJanBgS8BLxEbUZoQJYaEPASwpWlcMtzRhdtyyNjFPAS8BLwEhqQpQYEvIRwZSlckR3JIzsqzzgJeAl4CXgJDchSAwJeQriyFG55zuiibXlkdQJeAl4CXkIDstSAgJcQriyFK7IjeWRH5RknAS8BLwEvoQFZakDASwhXlsItzxldtC2PrE7AS8BLwEtoQJYaEPASwpWlcEV2JI/sqDzjJOAl4CXgJTQgSw0IeAnhylK45Tmji7blkdUJeAl4CXgJDchSAwJeQriyFK7IjuSRHZVnnP4fZvlg3ysmqFAAAAAASUVORK5CYII=" alt="图片描述"><strong>1.2)平台功能的实现</strong> 字体资源的管理: 字体资源存放在字体插件中,当引入时根据plugin id的prefix识别其为字体插件,并将对应目录下的字体资源拷贝入interface目录(和embed插件的driver目录下文件的拷贝方式类似),再在index.html中写入对应的css进行@font-face声明. 利用css声明影响范围: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXEAAABSCAYAAACiyOSIAAAaqUlEQVR4Ae2dd3xUVdqAbzqk0qQzgoiAoILSREBEiggoK7AW8FMUERU7Aoo0AemogLvKsqtCEFelSRFFEAnNmCCRkknvfTIlU66ykOf7zaRNIiUDEjLJ+0d+oczcc877Puc57z333hlFVVXkR2IgDAgDwoD7MQCgSOLcL3GSM8mZMCAM2BkQictZiJyFCQPCgBszIBJ34+RJJSaVmDAgDIjEReJShQkDwoAbMyASd+PkSRUmVZgwIAxclsQtBiMnonP4Ld3k2gpuM6MWJPG74SB/GNNce6/IVuIlDAgDwsCfGLgsiZvikpg84wCv7Mj60wEvXBlYUU3h/C/5MQq17SBhswvvldX2wnGV2EhshIHazIBLEjelJ/Lf3YkkxMYz/51DfHg0j/SYRL77MYUkwyVAsubzR+ZUCqObU5j4Dmd0CSJxqSqEAWFAGLhCBlySuHb3YYZMPMCDUw4yZMJPDHvjCH975QCjZkfwbaz+4smwZPNH8qMQPZCzeSdRbZeQ/hUOrDavzDJ2YUsYqD0MuCRxVbVhteQTviOSMRP3c/vr4UTmXULeJTJ2SPwR0I7kbH7cxYVf8h75LXESBoQBYeCiDLgkcZvNSurJOKbMPMgH23/j3elhjP7wNKkGy0UbcVQFIvFLx0hglRgJA8KAiwy4JnGLhV/3RTEvNJrT2SayjkUxaX4kPyYaLx14SyZnkkZKJe5iguS0uPacFkuuJdeXw4BLEldtNgoMBjKzDJjse9qWfGLi8zFXYn/7d0MYZ2ObQ+x4zhgyLy19kZ3ESBgQBoSBSzLgmsQvN6D67zgX24HC2HGczYlAtVov2bHLWZHkPVLJCAPCQG1joGokbjjMuZi2EN2Oc2nf8rtFQKttoMl4hXlh4OowUDUSt1fw5ljOxneEmEf5nz5FKvHLPauR9wk7woAw4MRA1UncksUfyaPlwqZT8KUyuTqVicRV4lqbGKhCidsf9pH7xGsTXDJWkakwcPUZEIlLZSynpsKAMODGDFS9xO2P3eefFGjcGBqprq5+dSUxlhhXloGqk7hVxx8Zr1EYfQPnUtfzhylXRC4iFwaEAWHgChmoOomrVn437uNs4r0OkZOwVZJ3hcmr7Eotr5OqThiouQxUocRVVJuZ343HOZPzH87knRKJi8SFAWFAGLhCBqpW4lfYWakmam41IbmV3AoDl8eASxI/ceIE2dnZsnLKYiQMCAPCQDVhwCWJR0VFicSrSeKkarm8qkXiJnGraQyIxEXKUlEJA8KAGzMgEnfj5NW0ikLGI1WyMOA6AyJxkbhUYcKAMODGDIjE3Th5UrW4XrVIzCRmNY2B6iVxq5GEQ18wZcydNA1RUK4bx/c5lfjqt2smYgu6lJ9Z9cpDtG8SiBLQjZlfH6fAWoUTxZrNkU/f4tYbejH+0+NYimOR/dMKbtYEoygPsjWlCvvjai6sJiI3TKezotB1wjJSdZX4vlZX2/iLX2/WpbJ99RQGd2xKHUWh6ZTNUsn+xTGuaaK9muOpVhLXn1zPiNYe+Ne7nh7972P48MUc1Zmu+gQpyEngREQ4kaczMbsAozXrMFPva46Xjx839xrIsOEv8Mm+WMxVKXFjPF9MGUWjgEA0L2wjt7j/IvGrtXDpOfr+QzTz9qdFxx4Mvn84Iz7af9UZVdUC0mNO8MuxSJJyzVXQ3tWKnxz3rxZ6tZL48X/2RlH8ue2e+RxKM2CtxHd3/hUBOf3FYwzo049xS/eic0HieXsXEOzvQ3DjfoRGZletvEv7aSL5l+0sXb6Cr45llU5ukfjVksVx3rleQWlxG899coi8gqr6qsHT/GP4AO4ZNY6NkXmlef4r+JdjXC1Wqua41Urih5drUJR69BmxgbhSSV39QIQtCEHxb8TgBXtcknjGrjcJ9vemUYsJ7M+8+v10ZbKJxK9WPg4zXVFQ2vdhxvdxVSjTMF6xb93cPpj1ESJxV+ZCTX9ttZB44oEljLpHQ9P6XiiKJ351G9FCo0Hz/EpyjMWnjgV6og98yaxnHqBtm9bccGN7HnhmFl8eiMZodpqw2adZ8vrf0Wg0LNybQ572O2Y/dT9dOnTgzpGTCY3MKZ14cXtmcl9vDU3reaB4eFKnXhNa2dt9dW1Zu+dZTAyxPzJlXF9aNg7Bw0PB0yuQpi01aIa8yLbf0rCqKvmZJ/nyg1k8NrQn7dtq0HS9m1eWbeJkrlNfVZV9HzyMRtOLF5fuIvbkXuY8eQ+33diefo/PYOcvKY7tHePJbcweP4gumo7cOeIlth5PLx2Dqqbzw8xJ3GHv9/LDpf9eUeKWlHBefPReR1ze3FkWgyLAdeyerkHT+U6mbIjAUJDMnvUfsnDJB/wYU4ntrNTDfDz/BR7oezs3aTTc1vch3lzzI1kVv0vVZiHjtz28+/wDdLm56HXvbj5O2LoL74nnxhzh4xnjuburBk3b9vR84GmWbgwj3+S8d67nwKpxdGmvodNLmzgZtYs3/z6A9mPmEZ6hL46JmYyTP/DBa4/Su11b2rTtx1OzPuTnhMpec0lky1Oj6KxpSohd4t5+hDRp4YjnnG+cZK5L5MDG5Ywf0RuNpg0duwxm0py1HE3IwuJ0ZqmL2sS4+7uh0TzB9kQ9UTtXMuG+HrTX3M6wF94nIruEk0S+GH0f7TRNCVYUvHzr0KhZq1K+VWsBScd289GKZWzcr6XAYitloKbLS8ZXxEi1kHjCvnkM6RZCYB0PFMUDL29/gkJCCHlyKdkGMxZ9OtsXP0ybAC986wQQHBxCSHAQ/n4+eNa/hanrwtGXwJsZxYwn+6MoCpMWL2d4i6LXBwXWxdvTA6XRcNafLloYYr6dQp/O9nYVR7ve9mPb2530D0e7F4JEr93DC3+7jeAAP0c7Hh6+BNr71Ptpvj6e6pD4vyd5UycgsOh4ISEE29v3CaHXuBVEZFqxFS8Ou96x97UFw0Y/w4hbOhAcHExQQB28PRVaDZjIV58vpKefP0HBIQQF1MXbywOl43h+yi2ZrKnsmDyapnaxzCrbm60ocdWSzJeTh9DER0F54iuynYRiy9rNeEWhYeuubIg0kBu1i+XzZzBt2jRWbAxHf56FrCw24czx8sU/MIgQe+xCggny98NDURj49hZSSvKiWsk+uIp7myp4evsREBhMSHAwISGB9OrflzYVLmzarDqivllM33aN8PKtS5D9tcHBBPr74eUZTLfnPyOroCQGOvYsGEwjf4U6D77F08ObFuVj4FSOpOmwWQs4tWcVd7cNwrducY6Dg6jr40eHYa/yY3QuNqd4lI2tRKT23wl8+fAQNCGB+Nlj7emFX0DRmKdvikW12ciJDWPOyC7U9/ShbkCQI/fBgQH4eXsR0uEhPotMK817XsR6Bt/eFEUZxNsLXqSz/fX28dX1dTDVZOhCIvLs40tg/dA+NC5u18PLG3977EJCmP1dNhZDLgc+X8T0adN4c/lmkkuKnovmzHlc8ufz59t94lItJF4SxAttp5zcMpWu/n40u2UUi74+QrbBijknkT1rptH3hnp4tBjG+ujiU0wnifu2GciiLcfJMpjJ/G0nE/pcj5eHQqe392B0gvxqbKccDJ3HpsNx5BefJeTHfcf4Tgo+N/Vn8benSy+gFklcIbD5Xbz9aRgmk4m4sHU81qsBihJIvVbtmPDvQ2ToC0g/tplnB7THR1EY8K+S6q+SEldVUvcupVsr+x0rw9maUlLJWkn86lmHODrdv4Z4e3/NGRzd+SWffLaRX5ILLlHZadnw6nvsP5VZfE3ASPL+5XRXFJp1GsSGyOJKOC+SKd0UfAOb88CLH3E0LheLUc+p7/7Bw3c0drRfeneKzUpaxFb+r/t11G1yG8998A0J2SYsphyifljDuLuvx8cziL+tisLgyGOZxL0aahj9+gZO5ZRd/DMm7uOZbkHUv3EwC7+OQG+2YjGls3HWMK7za8rf5m4h01DZve3zb6eY85MIfb0/Dfwa0G30dL75NRGT2UJWzBFWTh5J8yAfgvq+zYn8IjmUSVzhpv5T2RqRjMmo4+TOhXSu64Nvg+a8ui3RURAUzY8LbKfYzGTEHmVz6Hp2RyRitpYsbO4joZL5L78vL2duIPFsPn64EUpIe55avoesgrKBWnJP8/HEIdRT6jBg1bEi2ThJvN/iQ6WyVFUD+969E39fhWZ9PiLmKktctVjQZ6cQ9fNhdm8JZe0/l/FAVwUlsBuvfXykdO+9SOKB9HvmPU5lFonHqksmdPpI6tv3QIfOI6mkr+ZUtr01iia+CsrkHeQ7/r3yElezw5k1uLVDmBM+jym6HdGSzIax7VGUAJ7/OqH0FkWXJpRVRZcWQ8TRfWz/byhr3n+BuxSFOjfczqzvEh15yf1hNo0VL67v8iTbY0q2OFRsZgP7Vj3tOJMokbjNYuTAx5Noofhz54SVJOvKhKyqOsLXPst1gd4EdJlNpN7OQ5nE6zYdw5aEkgWqiJXY0Mep79mAYa98QoyuRNZWkn9Zx4h2CvUemEVUpuESi1UJd+eXeE7sTp5orRBw64P850AcZqfKPu/EFsb2aI23cj0Lw3SOdsokrmHOD07bW5YYVnQPRAm8jvveDytepOxtX0DiJWzI70rmrySPNee3G0g8nKkNFPzb92Hx93FOlYn988lzCPtwIjcGKfhO21WURCeJv74to1xiI9f2JdBPoalmBVFO0J+/Ej/BmhEjGFHuZw4HnC5gXvjCpomD6+YyZuDddO9yK+1at+PW3t3QNLRv23Rh8pID5BS3X7Kd8shbX5FsKAbLlMnuRRO4QVHo+cYGpzHkc/CfT9IqWEEZvY50xzFckLhqJGrNIw6Jd34klARVxazdytB2zVBaT2BfzmWAbUxm5/KnGdy/N7d36cgNN91Mz+7taWzfcri+C5O/0Tr6f3xNPxRPP7qMXovWea/cZub09iX0d9pOsZry+WrmABSlHc8s+R6d8zUPVcUYvpZWjQPxDxrLt2n2PpdJPGjYWhKdcmtfjL5/uwGKhz+am3szpDSfwxlyTw9a2J9H6P0yB1N1jgVl/6dvlM/5Q2N4Z2+CUw7OL/G0Qyvpqyh0GvkyB+MrLAimU6wa2pNARWHi16mOY5VJfBBfJDjHPYsN44JLL7TnlY5FJO5SYVEaN+fY1sw/u4HEi+BteOsA1hzKdJpM9oTk88u6F+hgl+PUHUX/5yTx6TvKbrmzA+CaxIvate+tl/3cz5dJZSBcSOLG8NX0DAmi+c2Dmfvpbn49oSU+KYkVj19I4q14bMYmUozFx7ZLfHGRxO+a/oXTmPUcXvMUGrt4Hvr0MiSuYknexGhFoXnHcexKsHDii6do29iTXosiKXAZ/AJ+/eRpGgR407L7OFZvPcjxU3EkJn3LlAoSD199K4p3Xbq/sZ20cu2Yif7ufe4tJ3EdX0y/y7Hgvbo6DH3F++5/24imSTD+QY+yM9UeszKJB4/bQEa546vsmKqg+NShZftb6NW7159/HlvELxn5WE0l7Trl3C+QEeujnHJwfomn7l9GD/ui++g0Ikq3qkpYieOTEX0cFyYnfFVR4uWZUlWRuMi6hJvK/XYDiUfy1i0eKG168saWExQ4nabazClseeNRmiuedF2w78okXrchg+Z/X7rNURmQzi9xKz/NCkEJbMnId/eUVtyqTccHD197iauqke/f8KNu0xuZ+uVe1j4ygIbe/fjX6coBUy4u1hMsu6WtY5F7aVNSqehs+T/yXAWJR/zzDhTFl869l3HcWLZva7OYCP/P63R0kritQM+WeSPxVJrz2JzN5JjKXq+qVpJ2zaV5fT8CGk0hTGfv98UlvndmCzx8NIyfv5vMK94zPr/EMyL+xVAvBc2QSXx/Kq/chVJr2kHe6H8LfooPM3cXfbdsWSXuosS7DmLdL/L9tOU4rLBo17b/cwOJq+yadwfBXg3o8/BC9muzHBdvrAUGEg9/zbP3tqdOvTtZfbRor1G93ErcO5heT/6LWGPJnumlpXZ+iefy9cSGKP7NuG/GZpLsx7MYSP55Nffat0HOu51SdZW4HXDTkaV0rNeYviNfpG/vNjQc/X756tVqJDMpjmhtLFn6i8Qj9xDTb7veIfGJnxxDb1GxGLM5/p8XHfv5ztsp+UdW0sLHg4Zt+rBk60lyjRZslgKytEeYNaqD4xgle+L22+ZOfrOEvg38aNzrcbb9HI/BbMVmNZObcpSVz95FoE8gnWfvLb5z5uISz/jhHW7yr0PnoVPYFpmCyXHHjA37ApKTnEqWTl9+m+6iUji/xPUZkcwe3hjf+p2Z+ME24nOMWG02CnQZhK2bSdfWgQS2fJ6fim8xvVyJB9zYiwXbT5c9WGazYshNIzY6msSsqntArraJsjqP1y0knhe9m9cG30Rwo1b0fXgS8xYuYdHctxg76FaaNGrJsDc3kFJy3/BlSPz0v/tTR/Gicet+vDhjIUt2/IzRfBF5FU/y80tcJSZ0FA0VH1rcNLDoePPfYvy4MfTqVD0krqrxLBjUjHr1W1OvflsmrwsvraIdkk/9hc9WzGXamzMJ3Z94kW2WNLY818ch4GY9HmHq/CUsmPEyTzx6P90qVOKqOYZ1Y7vRwMuf67sN4+W357NkwRxeGjOC/t1upaFTJa6qNoyZp1g7bTgtQoJoe/dY3pr3LovfncdLYweiaRjCjXe/zO74kjtnLi5xs+EEq57sRsOARnQd9gSz5i9iyZIlLFowixcencZnP5wsd7fSxSfs+SVuM+uJ3LSIQTdeR1Crrox9eQYLlyxi7usTuLt9C0Ja3s7L68NLL7S7LvHTLOhcB6VuY+548DnmLlrCj7FGVIuek/s+Y/a02XwWFle1n9tz0cXu0kXQxeMs769sfNxC4vaKKSl8K0tffYzenVri6aHg7duM2weOYdryDRxPzSt7RP8yJG5JPsSssf3QNKiLUicYzXNryK3E/bYXkria+SurXhlDl1Yh+NYJpkO/Mczf/CsrJ1QXiascWD2WlvY7SG4Zz/YT5S8AF2REEvreO0x7cxYbw4oeOLoQUNmndjB3wiDaNPLHN6AJPYc/z7oDX/N2RYmrKob4MJZPHsVtLRvipwTS4raBvDwvlK9Wv36eD8CykJtwlA1LX2No7440cDzo4s8Nt97N468uZcexor3lon5dXOKqzUL26Z9YOeX/6NOpJT5eHnh4eqK5uTujJ7zH3t8yXbgr5/wSt/fDnJ/Bwc0f8tKYgXRs4Yvi4UVgy5u49++TeO/zn0g1lN1l47rELfy6ZRbDu2scF+f9G2mYuzsXqzGXQ/9dzLR3/sGRuMyyeSCCLVeYXIjfmvDv1Urixpw4tNpYklJ0pRVLaZBtFkz6XNKSE9BqtWhjEkjNyMFQYCl9gMLxWvspenqy4zUVtwJMeUnExGiJi8upUF3aMOSmkxgXizYmlsRMneNUuLTtC0wIiz7LcbzYuHSMzndcqCoF+hxSEuKIiYklOT3HcQqfl65Fq00kw36qXXxMfba9r3GkZeWXPdFns2DISSdeqyUpK98JRivGvHTiYrVoU3XF4rGgz0glzh6TrLKnD63GHBLiYtBqUx3bHBXHciL0Fdoqfgx5bS0JeRXOOmxm9Hk5ZGVlYyh9oOZClZGVAl0mifGxxMTGk5alw2w1km3vT3wiGfoycdlsNkz52UVx0caSkJLhePLSpMsiQaslMT0HS7k9axsWk57MtOSi8dlzk5JOrr6g3J6zfZ/ckJ1MbIyWmLSSuFTor81KgT6P9OQEYux9s7eXnEqOzlihzQrv+1PujWTZ35+Q5Hj+oGJc7VtE+TkZJCfYY68lNiGJjJx8zKUPPRUd334RNTnRznsK+eXYsTpu17RzmJxtKOXE3o7VbCArNdExztj4RHIMVky6dLasnM68jzcTn11Qfi78qe+XGpv8f8V8usPfq5XE3SFgbt1Hmw2bzYrZkM6yv9fHs1EP5m7+9RJPZMrErs45z888ykdvz+LjzQfIdnqGojr3Wfr2184pkXhtqVYseuIjDrJ9SyiLx/egnk8gfcbO5VhKyb7yXwuWTNSqiWd+0gHWrwnlh4h4TLWFZRmn09m5anc4SmUnnHzbfdVMzMrmw6XX5Ufz/qi+jg9vCm5yM/c/NZ1tEUUf1uXScWQClZtAEjs3nhM1hGWReA1J5CVlYs4j6rtv+HTNGj7fvI9TaRWeKqwtcZBxyiJUwxhwSeIGgwGLpfznUlxSHjUsYDJeqbyEAWGgOjHgksSrU8elLzKRhAFhQBhwcU9cAiaTRhgQBoSB6sWAVOKy3SN7pMKAMODGDIjE3Th5UhFVr4pI8iH5uBYMiMRF4lKFCQPCgBszIBJ34+Rdi1Vf2pRqUxioXgy4JPGz8cEUaodyNm0Xf5hNqE6f7S2JrV6JlXxIPoSB2sGASxI/kzWHs/G3UBjdi7PZESJxqeLlNFwYEAauMQMuSVy1mfk97z0Ko/0pTNmKWu7T12rHqifVjeRZGBAGqhMDrklctfK74XMKtQqFyf8ViV/jFbg6gSR9EbEJA9eGgcuQ+BcicZG3nEILA8JANWHgCiT+OWqFD7qXlfjarMQSd4m7MFB7GXBR4jZ+N+7kXEwwhXFz+cMkn4Qnk6f2Th7JveS+OjDgosRVVEsaZzLe4FzMXZxLXsYZoySyOiRS+iAcCgO1kwHXJW7VcSZzDoXalhRqJ/O//NoZOJkwkndhQBioDgy4KHH7dsoPnIutT2HsNM4UZMm94tXk4kZ1gEn6IFITBqqeARclbr/FsOTulA1yYVMELncoCAPCwDVm4AokLveJS9VR9VWHxFxiLgyUZ0Akfo1XUQGyPJASD4mHMOAaA5ch8XXysI+IX06hhQFhoJow4JrEbSb+yHyLwujGnEv5Vh67ryZJlMrFtcpF4iXxqkkMuCTxs4ndKYwOoDD2af6nT5GVWCQuDAgDwsA1ZsAliZ9Jf5Czqcs4o0tEtcpqXpNWcxmL8CwMuCcDLklckuyeSZa8Sd6EgZrLgEj8Gp8KyeSquZNLciu5rQoGROIicdnTFAaEATdmQCTuxsmrilVe2pBqUhio3gyIxEXiUoUJA8KAGzMgEnfj5EmFVL0rJMmP5KcqGBCJi8SlChMGhAE3ZkAk7sbJq4pVXtqQalIYqN4M2CX+/+dAFRV2nuE/AAAAAElFTkSuQmCC" alt="图片描述"><strong>2) 特`定域字体大小全局变更功能的实现:</strong><strong>2.1)在body标签上添加相关class的api接口实现:</strong><img src="'+l+'" alt="图片描述"><strong>2.2)标注需要生效的h5元素:</strong> 利用scss中的@mixin进行选择器的衍生: 输入输出举例说明(aaa为想要影响的h5元素的选择器):aaa =&gt; @mixin = body.fieldFontSize-12px aaa{font-size:12px;} <img src="'+i+'" alt="图片描述"> @mixin的使用举例: <img src="'+a+'" alt="图片描述"> 功能为让Table widget中的元素响应全局font-size的变更. 编译出的css: <img src="'+v+'" alt="图片描述"></p><h3 id="_4、习题" tabindex="-1"><a class="header-anchor" href="#_4、习题"><span>4、习题</span></a></h3><p>利用@font-face引入的外部文件的后缀名是什么:</p>',8)]))}]]),z=JSON.parse('{"path":"/AB%E4%BA%A7%E5%93%81%E7%9F%A5%E8%AF%86%E5%BA%93/%E5%B9%B3%E5%8F%B0/AB4/UI%E7%95%8C%E9%9D%A2/ABC%E4%B8%AD%E7%9A%84%E5%AD%97%E4%BD%93%E5%A4%84%E7%90%86.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"1. 问题描述","slug":"_1-问题描述","link":"#_1-问题描述","children":[]},{"level":3,"title":"2.  问题分析","slug":"_2-问题分析","link":"#_2-问题分析","children":[]},{"level":3,"title":"3.  问题解决","slug":"_3-问题解决","link":"#_3-问题解决","children":[]},{"level":3,"title":"4、习题","slug":"_4、习题","link":"#_4、习题","children":[]}],"git":{"updatedTime":1727145923000,"contributors":[{"name":"wangaoqi","email":"wangaoqi@agree.com.cn","commits":1}]},"filePathRelative":"AB产品知识库/平台/AB4/UI界面/ABC中的字体处理.md"}')}}]);