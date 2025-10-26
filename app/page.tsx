"use client";
import { useMemo, useState } from "react";
import { Globe2 } from "lucide-react";

export default function Page() {
  const destinations = [
    {
      key: "newcastle",
      display: "Newcastle",
      cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=60",
      activities: [
        { name: "Don't Jump 悬崖", desc: "海边悬崖拍照点 · 注意安全" },
        { name: "Merewether Ocean Baths 海边游泳池", desc: "海滨泳池 · 《楚门的世界》小门取景风格" },
        { name: "Sand Dune Adventure 沙漠四驱车", desc: "穿越沙丘/海滩/沉船/二战遗址 · 1小时 A$119 · 1.5小时 A$150", link: "https://sandduneadventures.com.au/" },
        { name: "Oakfield Ranch 海边骑骆驼", desc: "20分钟 A$45 · 日落 1小时 A$120", link: "https://www.oakfieldranch.com.au/" }
      ],
      dining: [
        { name: "Shoal Bay Country Club", desc: "招牌蟹黄面 · 35-45 Shoal Bay Rd, Shoal Bay NSW", link: "https://www.shoalbaycountryclub.com.au/" },
        { name: "Hao Chi / Lee's Kitchen 中餐", desc: "326 King St, Newcastle NSW", link: "https://leeskitchen.com.au/" }
      ]
    },
    {
      key: "brisbane",
      display: "Brisbane",
      cover: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=60",
      activities: [
        { name: "Lone Pine 考拉园", desc: "抱考拉 · 喂袋鼠", link: "https://lonepinekoalasanctuary.com/" },
        { name: "Currumbin Wildlife Sanctuary", desc: "黄金海岸动物园", link: "https://currumbinsanctuary.com.au/" },
        { name: "华纳兄弟电影世界 Movie World", desc: "主题乐园 · 门票约 A$109", link: "https://movieworld.com.au/" },
        { name: "Tropical Fruit World", desc: "热带水果园 · 门票约 A$68", link: "https://www.tropicalfruitworld.com.au/" },
        { name: "Queensland Museum", desc: "昆州博物馆", link: "https://www.museum.qld.gov.au/kurilpa" },
        { name: "Gallery of Modern Art", desc: "现代美术馆", link: "https://www.qagoma.qld.gov.au/" },
        { name: "Story Bridge", desc: "故事大桥" }
      ],
      dining: []
    },
    {
      key: "hunter",
      display: "Hunter Valley",
      cover: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1600&q=60",
      activities: [
        { name: "Starline Alpacas 羊驼农场", desc: "$15 · 1100 Milbrodale Rd, Broke", link: "https://starlinealpacas.com.au/" },
        { name: "Hunter Valley Chocolate Company", desc: "巧克力工厂 · 2320 Broke Rd, Pokolbin", link: "https://www.hvchocolate.com.au/" },
        { name: "Hunter Valley Cheese Factory", desc: "芝士工厂 · 447 McDonalds Rd, Pokolbin", link: "https://huntervalleycheese.com.au/" },
        { name: "BARE Nature'sKin 手工香皂", desc: "500 Wollombi Rd, Broke", link: "https://barenatureskin.com.au/" },
        { name: "Peterson House", desc: "气泡酒 + Gelato · 2457 Broke Rd, Pokolbin", link: "https://petersonhouse.com.au/" },
        { name: "Brokenwood Wines", desc: "401-427 McDonalds Rd, Pokolbin", link: "https://www.brokenwood.com.au/" },
        { name: "Audrey Wilkinson Winery", desc: "750 De Beyers Rd, Pokolbin", link: "https://audreywilkinson.com.au/" },
        { name: "Bimbadgen", desc: "790 McDonalds Rd, Pokolbin", link: "https://www.bimbadgen.com.au/" },
        { name: "McGuigan Wines", desc: "C/2144 Broke Rd, Pokolbin", link: "https://www.mcguiganwines.com.au/" },
        { name: "Tulloch Wines", desc: "638 De Beyers Rd, Pokolbin", link: "https://www.tullochwines.com/" },
        { name: "Mount Pleasant", desc: "401 Marrowbone Rd, Pokolbin", link: "https://www.mountpleasantwines.com.au/" },
        { name: "Piggs Peake", desc: "697 Hermitage Rd, Pokolbin", link: "https://piggspeake.com/" },
        { name: "Pokolbin Cider House", desc: "2342 Broke Rd, Pokolbin", link: "https://www.pokolbinciderhouse.com.au/" }
      ],
      dining: [
        { name: "Baumé Pizza", desc: "119 McDonalds Rd, Pokolbin", link: "https://www.benean.com.au/services/baume-restaurant/" },
        { name: "Café Enzo", desc: "1946 Broke Rd, Pokolbin", link: "https://www.enzohuntervalley.com.au/cafe" },
        { name: "The Italian Cottage", desc: "109 Wollombi Rd, Cessnock", link: "https://theitaliancottage.com.au/" },
        { name: "EXP.", desc: "2188 Broke Rd, Pokolbin", link: "https://www.exprestaurant.com.au/" },
        { name: "Cocoa Nib", desc: "989 Hermitage Rd, Pokolbin", link: "https://www.cocoanib.com.au/" },
        { name: "Sabor Dessert Bar", desc: "2342 Broke Rd, Pokolbin", link: "https://www.sabordessertbar.com.au/" }
      ]
    }
  ];

  const [active, setActive] = useState("newcastle");
  const current = useMemo(() => destinations.find(d => d.key === active)!, [active]);

  const openExternal = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer"); 
  };

  const mapUrl = (name: string, city: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + " " + city)}`;

  const fallbackCover = "https://images.unsplash.com/photo-1541921671-1553c948f990?auto=format&fit=crop&w=1600&q=60";

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center gap-3">
          <Globe2 className="w-6 h-6" />
          <h1 className="text-xl md:text-2xl font-bold">目的地选择 · Destination Chooser</h1>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-6 grid md:grid-cols-3 gap-4">
        {destinations.map(d => (
          <button
            key={d.key}
            onClick={() => setActive(d.key)}
            className={`p-4 rounded-2xl border hover:shadow transition ${active === d.key ? 'border-black' : ''}`}
          >
            <div className="font-semibold">{d.display}</div>
          </button>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={current.cover} alt={current.display} className="w-full h-56 md:h-80 object-cover" onError={(e) => { const img = e.currentTarget as HTMLImageElement; if (img.src !== fallbackCover) img.src = fallbackCover; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
          <div className="absolute bottom-0 left-0 p-5 md:p-8 text-white">
            <div className="text-2xl md:text-3xl font-bold drop-shadow-sm">{current.display}</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-6 grid md:grid-cols-5 gap-6">
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-lg font-semibold">活动 Activities</h2>
          {current.activities.map((a, i) => (
            <div key={i} className="p-4 bg-white rounded-2xl shadow">
              <div className="font-medium">{a.name}</div>
              <div className="text-sm opacity-80 mt-1">{a.desc}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button className="px-3 py-1 rounded-xl border text-sm hover:bg-blue-50" onClick={() => openExternal(mapUrl(a.name, current.display))}>地图 / Map</button>
                {a.link && <button className="px-3 py-1 rounded-xl border text-sm hover:bg-blue-50" onClick={() => openExternal(a.link!)}>官网 / Website</button>}
              </div>
            </div>
          ))}
        </div>
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold">餐饮 Dining</h2>
          {current.dining.map((a, i) => (
            <div key={i} className="p-4 bg-white rounded-2xl shadow">
              <div className="font-medium">{a.name}</div>
              <div className="text-sm opacity-80 mt-1">{a.desc}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button className="px-3 py-1 rounded-xl border text-sm hover:bg-blue-50" onClick={() => openExternal(mapUrl(a.name, current.display))}>地图 / Map</button>
                {a.link && <button className="px-3 py-1 rounded-xl border text-sm hover:bg-blue-50" onClick={() => openExternal(a.link!)}>官网 / Website</button>}
              </div>
            </div>
          ))}
          {current.dining.length === 0 && <div className="text-sm opacity-70">暂未添加餐厅，可把清单发我我立即补上。</div>}
        </div>
      </section>
    </div>
  );
}
