import React from "react";

// One-file React page for your Newcastle & Hunter Valley trip.
// Design goals (已按你的要求实现):
// 1) 无站内锚点跳转；2) 不嵌入地图；3) 仅提供在新标签页打开的外链 (target="_blank" rel="noopener noreferrer").
// Tailwind 优雅排版，卡片式布局，信息一目了然。

const SectionTitle: React.FC<{ title: string; subtitle?: string }>=({ title, subtitle })=> (
  <div className="flex flex-col gap-1 mb-4">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
    {subtitle && <p className="text-sm md:text-base text-neutral-600">{subtitle}</p>}
  </div>
);

const ExtLink: React.FC<{ href: string; children: React.ReactNode }>=({ href, children })=> (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 shadow-sm hover:shadow transition text-sm"
  >
    <span className="truncate max-w-[18ch] md:max-w-none">{children}</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z"/><path d="M5 5h6v2H7v10h10v-4h2v6H5z"/></svg>
  </a>
);

const Card: React.FC<{ title: string; note?: string; right?: React.ReactNode; children?: React.ReactNode }>=({ title, note, right, children })=> (
  <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-4 flex flex-col gap-2">
    <div className="flex items-start justify-between gap-3">
      <div>
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
        {note && <p className="text-neutral-600 text-sm mt-1">{note}</p>}
      </div>
      {right}
    </div>
    {children && <div className="text-sm text-neutral-700 leading-relaxed">{children}</div>}
  </div>
);

export default function TripPage(){
  const newcastleAttractions = [
    {
      title: "Merewether Ocean Baths | 海边游泳池",
      note: "可顺带打卡：‘楚门的世界’小门",
      link: null as string | null,
      details: "免费公共海水泳池，风景极佳。",
    },
    {
      title: "Sand Dune Adventures | 沙漠四驱车",
      note: "路线含沙漠/海滩/沉船/二战遗址 | 10:00 仅一场，或 13:00/14:00 不同时长",
      link: "https://sandduneadventures.com.au/",
      details: "约1小时¥119 或 1.5小时AU$150（以官站为准）",
    },
    {
      title: "Oakfield Ranch Camel Rides | 海边骑骆驼",
      note: "$45 | ~20分钟 | 周三休息 | 10:00–15:30",
      link: "https://www.oakfieldranch.com.au/",
      details: "热门海滩骆驼体验，现场视天气而定。",
    },
  ];

  const newcastleEats = [
    {
      title: "Shoal Bay Country Club",
      note: "蟹黄面 | 35–45 Shoal Bay Rd, Shoal Bay NSW 2315",
      link: "https://www.shoalbaycountryclub.com.au/",
    },
    {
      title: "Lee’s Kitchen (Hao Chi) | 好吃中餐",
      note: "326 King St, Newcastle NSW 2300",
      link: "https://leeskitchen.com.au/",
    },
  ];

  const hvAttractions = [
    {
      title: "Starline Alpacas | 羊驼农场",
      note: "$15 | Mon–Thu 10–4, Fri–Sat 9–5, Sun 9–3 | 1100 Milbrodale Rd, Broke",
      link: "https://starlinealpacas.com.au/",
    },
    {
      title: "Hunter Valley Chocolate Company | 巧克力工厂",
      note: "9–5 | 2320 Broke Rd, Pokolbin",
      link: "https://www.hvchocolate.com.au/",
    },
    {
      title: "Hunter Valley Cheese Factory | 芝士工厂",
      note: "9–5:30 | next to Brokenwood | 447 McDonalds Rd, Pokolbin",
      link: "https://huntervalleycheese.com.au/",
    },
    {
      title: "BARE Nature’sKin | 手工香皂店",
      note: "500 Wollombi Rd, Broke",
      link: "https://barenatureskin.com.au/",
    },
    {
      title: "Go Karts Go | 卡丁车",
      note: "13分钟 AU$37.5",
      link: "https://gokartsgo.com.au/hunter-valley/",
    },
    {
      title: "Hunter Valley Wildlife Park | 动物园",
      note: "AU$44 | 9–3",
      link: "https://huntervalleywildlifepark.com.au/",
    },
    {
      title: "Aqua Golf | 水上高尔夫",
      note: "Hunter Valley Gardens 场内",
      link: "https://www.huntervalleygardens.com.au/location/aqua-golf-putt-putt/#pricing",
    },
  ];

  const wineries = [
    {
      title: "Peterson House | 配Gelato的气泡酒",
      note: "2457 Broke Rd, Pokolbin | 8号: 10/12/14点; 9号: 10/11/12/14/15点; 10号: 10/11/12/13/14/15点 | 45分钟 AU$35",
      link: "https://petersonhouse.com.au/",
    },
    { title: "Brokenwood | 7款品鉴$25；配小吃$75", link: "https://www.brokenwood.com.au/", note: "401–427 McDonalds Rd, Pokolbin" },
    { title: "Audrey Wilkinson | 经典$15；好座$20；甜品巧克力$60；老酒$40", link: "https://audreywilkinson.com.au/", note: "750 De Beyers Rd, Pokolbin" },
    { title: "Bimbadgen | 经典$15；年份优选$25", link: "https://www.bimbadgen.com.au/", note: "790 McDonalds Rd, Pokolbin" },
    { title: "McGuigan Wines | 标准$10；高级$20；配巧克力$15", link: "https://www.mcguiganwines.com.au/", note: "Pavilion, C/2144 Broke Rd, Pokolbin" },
    { title: "Tulloch | 小吃$45；芝士$53；手工巧克力$35", link: "https://www.tullochwines.com/", note: "638 De Beyers Rd, Pokolbin" },
    { title: "Mount Pleasant | 橄榄脆饼$25；+奶酪$40", link: "https://www.mountpleasantwines.com.au/", note: "401 Marrowbone Rd, Pokolbin" },
    { title: "Piggs Peake | $32", link: "https://piggspeake.com/", note: "697 Hermitage Rd, Pokolbin" },
    { title: "Pokolbin Cider House | $40 含小吃拼盘", link: "https://www.pokolbinciderhouse.com.au/", note: "2342 Broke Rd, Pokolbin" },
  ];

  const hvEats = [
    { title: "Baumé (Pizza)", link: "https://www.benean.com.au/services/baume-restaurant/", note: "119 McDonalds Rd, Pokolbin" },
    { title: "Café Enzo", link: "https://www.enzohuntervalley.com.au/cafe", note: "1946 Broke Rd, Pokolbin" },
    { title: "The Italian Cottage", link: "https://theitaliancottage.com.au/", note: "109 Wollombi Rd, Cessnock" },
    { title: "EXP.", link: "https://www.exprestaurant.com.au/", note: "2188 Broke Rd, Pokolbin" },
    { title: "Cocoa Nib", link: "https://www.cocoanib.com.au/", note: "989 Hermitage Rd, Pokolbin" },
    { title: "Sabor Dessert Bar", link: "https://www.sabordessertbar.com.au/", note: "2342 Broke Rd, Pokolbin" },
    { title: "Oishii (Japanese & Thai)", link: "https://www.oishii.com.au/", note: "2144 Broke Rd, Pokolbin" },
    { title: "Muse", link: "https://www.musedining.com.au/", note: "2450 Broke Rd, Pokolbin" },
  ];

  const plan = [
    {
      day: "7号 (Day 1)",
      items: [
        "悉尼 → 纽卡斯尔 (约2小时10分)",
        "午饭",
        "海边骑骆驼 (~1小时)",
        "‘楚门的世界’ 打卡 (~1小时)",
        "入住 Airbnb",
      ],
    },
    {
      day: "8号 (Day 2)",
      items: [
        "沙漠四驱车",
        "前往猎人谷 (约1小时)",
        "巧克力工厂",
        "酒庄",
      ],
    },
    {
      day: "9号 (Day 3)",
      items: ["羊驼农场", "手工香皂店", "卡丁车 / 水上高尔夫", "酒庄"],
    },
    {
      day: "10号 (Day 4)",
      items: ["野生动物园", "芝士工厂", "酒庄"],
    },
    {
      day: "11号 (Day 5)",
      items: ["返程"],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        {/* Header */}
        <header className="flex flex-col gap-4 mb-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Newcastle & Hunter Valley 行程页
            <span className="block text-base md:text-lg font-normal text-neutral-600 mt-2">Bilingual Trip Page · 双语行程页</span>
          </h1>
          <p className="text-neutral-700 max-w-3xl">
            所有外部链接均在<strong>新标签</strong>打开；本页<strong>不</strong>含站内跳转或地图嵌入。价格/营业时间可能随季节调整，请以官网为准。
          </p>
        </header>

        {/* Newcastle */}
        <section className="mb-10">
          <SectionTitle title="Newcastle | 纽卡斯尔" subtitle="Attractions · 游玩" />
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {newcastleAttractions.map((a, idx)=> (
              <Card key={idx} title={a.title} note={a.note} right={a.link && <ExtLink href={a.link}>官网 / Website</ExtLink>}>
                {a.details}
              </Card>
            ))}
          </div>

          <div className="mt-6">
            <SectionTitle title="Food & Drink | 餐饮" />
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {newcastleEats.map((e, idx)=> (
                <Card key={idx} title={e.title} note={e.note} right={<ExtLink href={e.link}>官网 / Website</ExtLink>} />
              ))}
            </div>
          </div>
        </section>

        {/* Hunter Valley */}
        <section className="mb-10">
          <SectionTitle title="Hunter Valley | 猎人谷" subtitle="Attractions · 游玩" />
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {hvAttractions.map((a, idx)=> (
              <Card key={idx} title={a.title} note={a.note} right={<ExtLink href={a.link}>官网 / Website</ExtLink>} />
            ))}
          </div>

          <div className="mt-6">
            <SectionTitle title="Wineries & Cider | 酒庄/苹果酒" />
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {wineries.map((w, idx)=> (
                <Card key={idx} title={w.title} note={w.note} right={<ExtLink href={w.link}>预订 / Book</ExtLink>} />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <SectionTitle title="Food & Dessert | 餐饮/甜点" />
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {hvEats.map((e, idx)=> (
                <Card key={idx} title={e.title} note={e.note} right={<ExtLink href={e.link}>官网 / Website</ExtLink>} />
              ))}
            </div>
          </div>
        </section>

        {/* Plan */}
        <section className="mb-12">
          <SectionTitle title="Itinerary | 总体行程 (7–11号)" />
          <div className="grid md:grid-cols-2 gap-4">
            {plan.map((d)=> (
              <div key={d.day} className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-4">
                <h3 className="text-lg font-semibold mb-2">{d.day}</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {d.items.map((it, i)=> <li key={i}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-xs text-neutral-500">
          <p>温馨提示：价格、开放时间与可预订时段可能变动，出行前请点开相应官网确认。</p>
        </footer>
      </div>
    </div>
  );
}
