# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SVG\02_Task.spec.ts >> Flipkart task >> Flipkart Task: TC1 @smoke @regression
- Location: tests\SVG\02_Task.spec.ts:13:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.getAttribute: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.pIpigb').nth(35)

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e7]:
    - generic [ref=e9]:
      - link "Flipkart" [ref=e10] [cursor=pointer]:
        - /url: /
        - img "Flipkart" [ref=e11]
      - link "Explore Plus" [ref=e12] [cursor=pointer]:
        - /url: /plus
        - text: Explore Plus
        - img [ref=e13]
    - generic [ref=e16]:
      - textbox "Search for products, brands and more" [ref=e18]: Mac mini
      - button [active] [ref=e19] [cursor=pointer]:
        - img [ref=e20]
    - link "Login" [ref=e28] [cursor=pointer]:
      - /url: /account/login?ret=/search%3Fq%3DMac%2520mini%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Doff%26as%3Doff
    - link "Become a Seller" [ref=e30] [cursor=pointer]:
      - /url: https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect
      - generic [ref=e31]: Become a Seller
    - generic [ref=e33] [cursor=pointer]:
      - generic [ref=e36]: More
      - img [ref=e37]
    - link "Cart" [ref=e42] [cursor=pointer]:
      - /url: /viewcart?exploreMode=true&preference=FLIPKART
      - img [ref=e43]
      - generic [ref=e45]: Cart
  - generic [ref=e50]:
    - generic [ref=e51] [cursor=pointer]:
      - text: Electronics
      - img [ref=e52]
    - generic [ref=e54] [cursor=pointer]:
      - text: TVs & Appliances
      - img [ref=e55]
    - generic [ref=e57] [cursor=pointer]:
      - text: Men
      - img [ref=e58]
    - generic [ref=e60] [cursor=pointer]:
      - text: Women
      - img [ref=e61]
    - generic [ref=e63] [cursor=pointer]:
      - text: Baby & Kids
      - img [ref=e64]
    - generic [ref=e66] [cursor=pointer]:
      - text: Home & Furniture
      - img [ref=e67]
    - generic [ref=e69] [cursor=pointer]:
      - text: Sports, Books & More
      - img [ref=e70]
    - link "Flights" [ref=e72] [cursor=pointer]:
      - /url: /travel/flights?otracker=nmenu_Flights
    - link "Offer Zone" [ref=e73] [cursor=pointer]:
      - /url: /offers-list/top-deals?screen=dynamic&pk=themeViews%3DDT-OMU-A2%3ADT-OMU~widgetType%3DdealCard~contentType%3Dneo&otracker=nmenu_offer-zone
  - generic [ref=e75]:
    - generic [ref=e79]:
      - generic [ref=e82]: Filters
      - generic [ref=e84]:
        - generic [ref=e85]: CATEGORIES
        - generic [ref=e87]:
          - img [ref=e89] [cursor=pointer]
          - link "Computers" [ref=e91] [cursor=pointer]:
            - /url: /computers/pr?sid=6bo&q=Mac+mini&otracker=categorytree
        - generic [ref=e93]:
          - img [ref=e95] [cursor=pointer]
          - link "Desktop PCs" [ref=e97] [cursor=pointer]:
            - /url: /computers/desktop-pcs/pr?sid=6bo,nl4&q=Mac+mini&otracker=categorytree
      - generic [ref=e98]:
        - generic [ref=e99] [cursor=pointer]:
          - generic [ref=e100]: Brand
          - img [ref=e101]
        - generic [ref=e104]:
          - generic "Apple" [ref=e105] [cursor=pointer]:
            - generic [ref=e109]: Apple
          - generic "Classictopp" [ref=e110] [cursor=pointer]:
            - generic [ref=e114]: Classictopp
          - generic "GUGGU" [ref=e115] [cursor=pointer]:
            - generic [ref=e119]: GUGGU
          - generic "Megenity" [ref=e120] [cursor=pointer]:
            - generic [ref=e124]: Megenity
          - generic "Vbh" [ref=e125] [cursor=pointer]:
            - generic [ref=e129]: Vbh
          - generic "YHB" [ref=e130] [cursor=pointer]:
            - generic [ref=e134]: YHB
          - generic "somupr" [ref=e135] [cursor=pointer]:
            - generic [ref=e139]: somupr
          - generic "Fasheen" [ref=e140] [cursor=pointer]:
            - generic [ref=e144]: Fasheen
          - generic "Mobling" [ref=e145] [cursor=pointer]:
            - generic [ref=e149]: Mobling
          - generic "SELLERIYA" [ref=e150] [cursor=pointer]:
            - generic [ref=e154]: SELLERIYA
          - generic "TELTREK" [ref=e155] [cursor=pointer]:
            - generic [ref=e159]: TELTREK
          - generic "Ybh" [ref=e160] [cursor=pointer]:
            - generic [ref=e164]: Ybh
          - generic "ZINGTEL" [ref=e165] [cursor=pointer]:
            - generic [ref=e169]: ZINGTEL
      - generic [ref=e170]:
        - generic [ref=e172]: Price
        - generic [ref=e189]:
          - generic [ref=e190]: .
          - generic [ref=e191]: .
          - generic [ref=e192]: .
          - generic [ref=e193]: .
          - generic [ref=e194]: .
          - generic [ref=e195]: .
          - generic [ref=e196]: .
          - generic [ref=e197]: .
          - generic [ref=e198]: .
          - generic [ref=e199]: .
          - generic [ref=e200]: .
          - generic [ref=e201]: .
          - generic: .
        - generic [ref=e202]:
          - combobox [ref=e204]:
            - option "Min" [selected]
            - option "₹250"
            - option "₹500"
            - option "₹1000"
            - option "₹2000"
            - option "₹5000"
            - option "₹10000"
            - option "₹20000"
            - option "₹30000"
            - option "₹40000"
            - option "₹50000"
            - option "₹60000"
          - generic [ref=e205]: to
          - combobox [ref=e207]:
            - option "₹250"
            - option "₹500"
            - option "₹1000"
            - option "₹2000"
            - option "₹5000"
            - option "₹10000"
            - option "₹20000"
            - option "₹30000"
            - option "₹40000"
            - option "₹50000"
            - option "₹60000"
            - option "₹60000+" [selected]
      - generic [ref=e209] [cursor=pointer]:
        - generic [ref=e210]: Discount
        - img [ref=e211]
      - generic [ref=e213]:
        - generic [ref=e214] [cursor=pointer]:
          - generic [ref=e215]: Customer Ratings
          - img [ref=e216]
        - generic [ref=e219]:
          - generic "4★ & above" [ref=e220] [cursor=pointer]:
            - generic [ref=e224]: 4★ & above
          - generic "3★ & above" [ref=e225] [cursor=pointer]:
            - generic [ref=e229]: 3★ & above
      - generic [ref=e230]:
        - img [ref=e235] [cursor=pointer]
        - generic [ref=e237] [cursor=pointer]: "?"
      - generic [ref=e238]:
        - generic [ref=e239] [cursor=pointer]:
          - generic [ref=e240]: Offers
          - img [ref=e241]
        - generic [ref=e244]:
          - generic "Special Price" [ref=e245] [cursor=pointer]:
            - generic [ref=e249]: Special Price
          - generic "Buy More, Save More" [ref=e250] [cursor=pointer]:
            - generic [ref=e254]: Buy More, Save More
          - generic "No Cost EMI" [ref=e255] [cursor=pointer]:
            - generic [ref=e259]: No Cost EMI
      - generic [ref=e261] [cursor=pointer]:
        - generic [ref=e262]: New Arrivals
        - img [ref=e263]
      - generic [ref=e266] [cursor=pointer]:
        - generic [ref=e267]: Availability
        - img [ref=e268]
      - generic [ref=e271] [cursor=pointer]:
        - generic [ref=e272]: GST Invoice Available
        - img [ref=e273]
    - generic [ref=e275]:
      - generic [ref=e278]:
        - generic [ref=e279]:
          - generic [ref=e280]:
            - link "Home" [ref=e281] [cursor=pointer]:
              - /url: /
            - img [ref=e282]
          - generic [ref=e284]:
            - link "Computers" [ref=e285] [cursor=pointer]:
              - /url: /computers/pr?sid=6bo&marketplace=FLIPKART
            - img [ref=e286]
          - link "Desktop PCs" [ref=e289] [cursor=pointer]:
            - /url: /computers/desktop-pcs/pr?sid=6bo,nl4&marketplace=FLIPKART
        - generic [ref=e290]: Showing 1 – 8 of 28 results for "Mac mini"
        - generic [ref=e291]:
          - generic [ref=e292]: Sort By
          - generic [ref=e293]: Relevance
          - generic [ref=e294] [cursor=pointer]: Popularity
          - generic [ref=e295] [cursor=pointer]: Price -- Low to High
          - generic [ref=e296] [cursor=pointer]: Price -- High to Low
          - generic [ref=e297] [cursor=pointer]: Newest First
      - generic [ref=e299]:
        - generic [ref=e301]:
          - link "Apple Mac Mini (MGNT3HN/A) M1 Chip (8 GB RAM/integrated 8-core GPU Graphics/512 GB SSD Capacity/Mac OS Big Sur) Microtower Coming Soon" [ref=e302] [cursor=pointer]:
            - /url: /apple-mac-mini-mgnt3hn-a-m1-chip-8-gb-ram-integrated-8-core-gpu-graphics-512-ssd-capacity-mac-os-big-sur-microtower/p/itme7675cf277b41?pid=CPUFXESGGTTGEWZA&lid=LSTCPUFXESGGTTGEWZA1INCSF&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUFXESGGTTGEWZA.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - img "Apple Mac Mini (MGNT3HN/A) M1 Chip (8 GB RAM/integrated 8-core GPU Graphics/512 GB SSD Capacity/Mac OS Big Sur) Microtower" [ref=e306]
            - generic: Coming Soon
            - img [ref=e309]
          - link "Apple Mac Mini (MGNT3HN/A) M1 Chip (8 GB RAM/integrated..." [ref=e311] [cursor=pointer]:
            - /url: /apple-mac-mini-mgnt3hn-a-m1-chip-8-gb-ram-integrated-8-core-gpu-graphics-512-ssd-capacity-mac-os-big-sur-microtower/p/itme7675cf277b41?pid=CPUFXESGGTTGEWZA&lid=LSTCPUFXESGGTTGEWZA1INCSF&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUFXESGGTTGEWZA.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
          - generic [ref=e312]:
            - generic [ref=e314]:
              - text: "4.7"
              - img [ref=e315]
            - text: (97)
          - img [ref=e317]
          - link "₹84,900" [ref=e318] [cursor=pointer]:
            - /url: /apple-mac-mini-mgnt3hn-a-m1-chip-8-gb-ram-integrated-8-core-gpu-graphics-512-ssd-capacity-mac-os-big-sur-microtower/p/itme7675cf277b41?pid=CPUFXESGGTTGEWZA&lid=LSTCPUFXESGGTTGEWZA1INCSF&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUFXESGGTTGEWZA.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - generic [ref=e320]: ₹84,900
        - generic [ref=e322]:
          - link "Apple MQH63HN/A M2 Ultra chip (64 GB RAM/Integrated 60 core GPU Graphics/1 TB SSD Capacity/macOS Ventura) Mini Tower Coming Soon" [ref=e323] [cursor=pointer]:
            - /url: /apple-mqh63hn-a-m2-ultra-chip-64-gb-ram-integrated-60-core-gpu-graphics-1-tb-ssd-capacity-macos-ventura-mini-tower/p/itmdba1c57fe269c?pid=CPUGQA2J8TAKGYK8&lid=LSTCPUGQA2J8TAKGYK8CPJXXN&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_2&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUGQA2J8TAKGYK8.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - img "Apple MQH63HN/A M2 Ultra chip (64 GB RAM/Integrated 60 core GPU Graphics/1 TB SSD Capacity/macOS Ventura) Mini Tower" [ref=e327]
            - generic: Coming Soon
            - img [ref=e330]
          - link "Apple MQH63HN/A M2 Ultra chip (64 GB RAM/Integrated 60 ..." [ref=e332] [cursor=pointer]:
            - /url: /apple-mqh63hn-a-m2-ultra-chip-64-gb-ram-integrated-60-core-gpu-graphics-1-tb-ssd-capacity-macos-ventura-mini-tower/p/itmdba1c57fe269c?pid=CPUGQA2J8TAKGYK8&lid=LSTCPUGQA2J8TAKGYK8CPJXXN&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_2&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUGQA2J8TAKGYK8.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
          - img [ref=e334]
          - link "₹4,19,900" [ref=e335] [cursor=pointer]:
            - /url: /apple-mqh63hn-a-m2-ultra-chip-64-gb-ram-integrated-60-core-gpu-graphics-1-tb-ssd-capacity-macos-ventura-mini-tower/p/itmdba1c57fe269c?pid=CPUGQA2J8TAKGYK8&lid=LSTCPUGQA2J8TAKGYK8CPJXXN&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_2&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUGQA2J8TAKGYK8.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - generic [ref=e337]: ₹4,19,900
        - generic [ref=e339]:
          - link "Apple MCYT4HN/A|MCYT4HN/A M4 Chip (24 GB RAM/10-core GPU Graphics/512 GB SSD Capacity/macOS Sequoia) Mini Tower Trending" [ref=e340] [cursor=pointer]:
            - /url: /apple-mcyt4hn-a-mcyt4hn-a-m4-chip-24-gb-ram-10-core-gpu-graphics-512-ssd-capacity-macos-sequoia-mini-tower/p/itm456a2fe28f49c?pid=CPUHZQWXBYPR3K7Q&lid=LSTCPUHZQWXBYPR3K7QHWETAQ&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&spotlightTagId=default_TrendingId_6bo%2Fnl4&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUHZQWXBYPR3K7Q.SEARCH&ppt=sp&ppn=sp&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - img "Apple MCYT4HN/A|MCYT4HN/A M4 Chip (24 GB RAM/10-core GPU Graphics/512 GB SSD Capacity/macOS Sequoia) Mini Tower" [ref=e344]
            - generic [ref=e345]: Trending
            - img [ref=e348]
          - link "Apple MCYT4HN/A|MCYT4HN/A M4 Chip (24 GB RAM/10-core GP..." [ref=e350] [cursor=pointer]:
            - /url: /apple-mcyt4hn-a-mcyt4hn-a-m4-chip-24-gb-ram-10-core-gpu-graphics-512-ssd-capacity-macos-sequoia-mini-tower/p/itm456a2fe28f49c?pid=CPUHZQWXBYPR3K7Q&lid=LSTCPUHZQWXBYPR3K7QHWETAQ&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&spotlightTagId=default_TrendingId_6bo%2Fnl4&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUHZQWXBYPR3K7Q.SEARCH&ppt=sp&ppn=sp&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
          - link "₹1,42,900" [ref=e351] [cursor=pointer]:
            - /url: /apple-mcyt4hn-a-mcyt4hn-a-m4-chip-24-gb-ram-10-core-gpu-graphics-512-ssd-capacity-macos-sequoia-mini-tower/p/itm456a2fe28f49c?pid=CPUHZQWXBYPR3K7Q&lid=LSTCPUHZQWXBYPR3K7QHWETAQ&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&spotlightTagId=default_TrendingId_6bo%2Fnl4&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUHZQWXBYPR3K7Q.SEARCH&ppt=sp&ppn=sp&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - generic [ref=e353]: ₹1,42,900
          - generic [ref=e356]: Only 2 left
        - generic [ref=e358]:
          - link "Apple Mac Mini (MXNF2HN/A) Core i3 (8 GB RAM/Intel UHD Graphics 630 Graphics/256 GB SSD Capacity/Mac OS Catalina) Mini Tower Coming Soon" [ref=e359] [cursor=pointer]:
            - /url: /apple-mac-mini-mxnf2hn-a-core-i3-8-gb-ram-intel-uhd-graphics-630-graphics-256-ssd-capacity-mac-os-catalina-tower/p/itm42ae808c8b871?pid=CPUFQXEMGZJXDH2D&lid=LSTCPUFQXEMGZJXDH2DXXKZQI&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_4&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUFQXEMGZJXDH2D.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - img "Apple Mac Mini (MXNF2HN/A) Core i3 (8 GB RAM/Intel UHD Graphics 630 Graphics/256 GB SSD Capacity/Mac OS Catalina) Mini Tower" [ref=e363]
            - generic: Coming Soon
            - img [ref=e366]
          - link "Apple Mac Mini (MXNF2HN/A) Core i3 (8 GB RAM/Intel UHD ..." [ref=e368] [cursor=pointer]:
            - /url: /apple-mac-mini-mxnf2hn-a-core-i3-8-gb-ram-intel-uhd-graphics-630-graphics-256-ssd-capacity-mac-os-catalina-tower/p/itm42ae808c8b871?pid=CPUFQXEMGZJXDH2D&lid=LSTCPUFQXEMGZJXDH2DXXKZQI&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_4&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUFQXEMGZJXDH2D.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
          - img [ref=e370]
          - link "₹74,900" [ref=e371] [cursor=pointer]:
            - /url: /apple-mac-mini-mxnf2hn-a-core-i3-8-gb-ram-intel-uhd-graphics-630-graphics-256-ssd-capacity-mac-os-catalina-tower/p/itm42ae808c8b871?pid=CPUFQXEMGZJXDH2D&lid=LSTCPUFQXEMGZJXDH2DXXKZQI&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_4&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUFQXEMGZJXDH2D.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - generic [ref=e373]: ₹74,900
      - generic [ref=e375]:
        - generic [ref=e377]:
          - link "Ybh BGTY PRO (12 MB RAM/BGH67 Graphics/12 GB Hard Disk/64 GB SSD Capacity/Mac OS Big Sur/12 GB Graphics Memory) Mini Tower" [ref=e378] [cursor=pointer]:
            - /url: /ybh-bgty-pro-12-mb-ram-bgh67-graphics-12-gb-hard-disk-64-ssd-capacity-mac-os-big-sur-12-graphics-memory-mini-tower/p/itm67a079f3806cd?pid=CPUHPCZCSZRJSGTE&lid=LSTCPUHPCZCSZRJSGTEXK3DHR&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_5&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUHPCZCSZRJSGTE.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - img "Ybh BGTY PRO (12 MB RAM/BGH67 Graphics/12 GB Hard Disk/64 GB SSD Capacity/Mac OS Big Sur/12 GB Graphics Memory) Mini Tower" [ref=e382]
            - img [ref=e385]
          - link "Ybh BGTY PRO (12 MB RAM/BGH67 Graphics/12 GB Hard Disk/..." [ref=e387] [cursor=pointer]:
            - /url: /ybh-bgty-pro-12-mb-ram-bgh67-graphics-12-gb-hard-disk-64-ssd-capacity-mac-os-big-sur-12-graphics-memory-mini-tower/p/itm67a079f3806cd?pid=CPUHPCZCSZRJSGTE&lid=LSTCPUHPCZCSZRJSGTEXK3DHR&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_5&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUHPCZCSZRJSGTE.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
          - link "₹46,999 ₹55,000 14% off" [ref=e388] [cursor=pointer]:
            - /url: /ybh-bgty-pro-12-mb-ram-bgh67-graphics-12-gb-hard-disk-64-ssd-capacity-mac-os-big-sur-12-graphics-memory-mini-tower/p/itm67a079f3806cd?pid=CPUHPCZCSZRJSGTE&lid=LSTCPUHPCZCSZRJSGTEXK3DHR&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_5&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUHPCZCSZRJSGTE.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - generic [ref=e389]:
              - generic [ref=e390]: ₹46,999
              - generic [ref=e391]: ₹55,000
              - generic [ref=e392]: 14% off
          - generic [ref=e395]: Only 5 left
        - generic [ref=e397]:
          - link "Vbh DFGFHTY PRO (12 MB RAM/DSRE Graphics/12 GB Hard Disk/64 GB SSD Capacity/Mac OS Big Sur/12 GB Graphics Memory) Mini Tower" [ref=e398] [cursor=pointer]:
            - /url: /vbh-dfgfhty-pro-12-mb-ram-dsre-graphics-12-gb-hard-disk-64-ssd-capacity-mac-os-big-sur-12-graphics-memory-mini-tower/p/itm1b60f5bafda1c?pid=CPUHPBUAMZGZ5KNY&lid=LSTCPUHPBUAMZGZ5KNYY7ZSME&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_6&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUHPBUAMZGZ5KNY.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - img "Vbh DFGFHTY PRO (12 MB RAM/DSRE Graphics/12 GB Hard Disk/64 GB SSD Capacity/Mac OS Big Sur/12 GB Graphics Memory) Mini Tower" [ref=e402]
            - img [ref=e405]
          - link "Vbh DFGFHTY PRO (12 MB RAM/DSRE Graphics/12 GB Hard Dis..." [ref=e407] [cursor=pointer]:
            - /url: /vbh-dfgfhty-pro-12-mb-ram-dsre-graphics-12-gb-hard-disk-64-ssd-capacity-mac-os-big-sur-12-graphics-memory-mini-tower/p/itm1b60f5bafda1c?pid=CPUHPBUAMZGZ5KNY&lid=LSTCPUHPBUAMZGZ5KNYY7ZSME&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_6&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUHPBUAMZGZ5KNY.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
          - link "₹46,999 ₹55,000 14% off" [ref=e408] [cursor=pointer]:
            - /url: /vbh-dfgfhty-pro-12-mb-ram-dsre-graphics-12-gb-hard-disk-64-ssd-capacity-mac-os-big-sur-12-graphics-memory-mini-tower/p/itm1b60f5bafda1c?pid=CPUHPBUAMZGZ5KNY&lid=LSTCPUHPBUAMZGZ5KNYY7ZSME&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_6&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUHPBUAMZGZ5KNY.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - generic [ref=e409]:
              - generic [ref=e410]: ₹46,999
              - generic [ref=e411]: ₹55,000
              - generic [ref=e412]: 14% off
          - generic [ref=e415]: Only 5 left
        - generic [ref=e417]:
          - link "Ybh BVGTY PRO (12 MB RAM/BVG65 Graphics/12 GB Hard Disk/64 GB SSD Capacity/Mac OS Big Sur/12 GB Graphics Memory) Mini Tower" [ref=e418] [cursor=pointer]:
            - /url: /ybh-bvgty-pro-12-mb-ram-bvg65-graphics-12-gb-hard-disk-64-ssd-capacity-mac-os-big-sur-12-graphics-memory-mini-tower/p/itm5024eeabc418a?pid=CPUHPCNRCCG9HFJY&lid=LSTCPUHPCNRCCG9HFJY7ZLT4Y&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_7&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUHPCNRCCG9HFJY.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - img "Ybh BVGTY PRO (12 MB RAM/BVG65 Graphics/12 GB Hard Disk/64 GB SSD Capacity/Mac OS Big Sur/12 GB Graphics Memory) Mini Tower" [ref=e422]
            - img [ref=e425]
          - link "Ybh BVGTY PRO (12 MB RAM/BVG65 Graphics/12 GB Hard Disk..." [ref=e427] [cursor=pointer]:
            - /url: /ybh-bvgty-pro-12-mb-ram-bvg65-graphics-12-gb-hard-disk-64-ssd-capacity-mac-os-big-sur-12-graphics-memory-mini-tower/p/itm5024eeabc418a?pid=CPUHPCNRCCG9HFJY&lid=LSTCPUHPCNRCCG9HFJY7ZLT4Y&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_7&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUHPCNRCCG9HFJY.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
          - link "₹46,999 ₹55,000 14% off" [ref=e428] [cursor=pointer]:
            - /url: /ybh-bvgty-pro-12-mb-ram-bvg65-graphics-12-gb-hard-disk-64-ssd-capacity-mac-os-big-sur-12-graphics-memory-mini-tower/p/itm5024eeabc418a?pid=CPUHPCNRCCG9HFJY&lid=LSTCPUHPCNRCCG9HFJY7ZLT4Y&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_7&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUHPCNRCCG9HFJY.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - generic [ref=e429]:
              - generic [ref=e430]: ₹46,999
              - generic [ref=e431]: ₹55,000
              - generic [ref=e432]: 14% off
          - generic [ref=e435]: Only 5 left
        - generic [ref=e437]:
          - link "YHB CBVDF PRO (12 MB RAM/VFGRT45 Graphics/12 GB Hard Disk/64 GB SSD Capacity/Mac OS Big Sur/12 GB Graphics Memory) Mini Tower" [ref=e438] [cursor=pointer]:
            - /url: /yhb-cbvdf-pro-12-mb-ram-vfgrt45-graphics-12-gb-hard-disk-64-ssd-capacity-mac-os-big-sur-12-graphics-memory-mini-tower/p/itm389febc362542?pid=CPUHPCNNNGECKGGZ&lid=LSTCPUHPCNNNGECKGGZJLEYIC&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_8&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUHPCNNNGECKGGZ.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - img "YHB CBVDF PRO (12 MB RAM/VFGRT45 Graphics/12 GB Hard Disk/64 GB SSD Capacity/Mac OS Big Sur/12 GB Graphics Memory) Mini Tower" [ref=e442]
            - img [ref=e445]
          - link "YHB CBVDF PRO (12 MB RAM/VFGRT45 Graphics/12 GB Hard Di..." [ref=e447] [cursor=pointer]:
            - /url: /yhb-cbvdf-pro-12-mb-ram-vfgrt45-graphics-12-gb-hard-disk-64-ssd-capacity-mac-os-big-sur-12-graphics-memory-mini-tower/p/itm389febc362542?pid=CPUHPCNNNGECKGGZ&lid=LSTCPUHPCNNNGECKGGZJLEYIC&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_8&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUHPCNNNGECKGGZ.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
          - link "₹46,999 ₹55,000 14% off" [ref=e448] [cursor=pointer]:
            - /url: /yhb-cbvdf-pro-12-mb-ram-vfgrt45-graphics-12-gb-hard-disk-64-ssd-capacity-mac-os-big-sur-12-graphics-memory-mini-tower/p/itm389febc362542?pid=CPUHPCNNNGECKGGZ&lid=LSTCPUHPCNNNGECKGGZJLEYIC&marketplace=FLIPKART&q=Mac+mini&store=6bo%2Fnl4&srno=s_1_8&otracker=search&otracker1=search&fm=organic&iid=6694f105-015f-4adf-bfe6-1cf9bf2e9bed.CPUHPCNNNGECKGGZ.SEARCH&ppt=browse&ppn=browse&ssid=kwoa9bctz40000001785131540502&qH=bc991c74a6c35147&ov_redirect=true&ov_redirect=true
            - generic [ref=e449]:
              - generic [ref=e450]: ₹46,999
              - generic [ref=e451]: ₹55,000
              - generic [ref=e452]: 14% off
          - generic [ref=e455]: Only 5 left
      - generic [ref=e457]:
        - text: Did you find what you were looking for?
        - generic [ref=e458]:
          - generic [ref=e459] [cursor=pointer]: "Yes"
          - generic [ref=e460] [cursor=pointer]: "No"
  - contentinfo [ref=e461]:
    - generic [ref=e463]:
      - generic [ref=e464]:
        - generic [ref=e465]:
          - generic [ref=e466]: ABOUT
          - link "Contact Us" [ref=e467] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
          - link "About Us" [ref=e468] [cursor=pointer]:
            - /url: https://corporate.flipkart.net/corporate-home
          - link "Careers" [ref=e469] [cursor=pointer]:
            - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
          - link "Flipkart Stories" [ref=e470] [cursor=pointer]:
            - /url: http://stories.flipkart.com/?otracker=footer_navlinks
          - link "Press" [ref=e471] [cursor=pointer]:
            - /url: http://stories.flipkart.com/category/top-stories/news/
          - link "Corporate Information" [ref=e472] [cursor=pointer]:
            - /url: /corporate-information
        - generic [ref=e473]:
          - generic [ref=e474]: GROUP COMPANIES
          - link "Myntra" [ref=e475] [cursor=pointer]:
            - /url: https://www.myntra.com/
          - link "Cleartrip" [ref=e476] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Shopsy" [ref=e477] [cursor=pointer]:
            - /url: https://www.shopsy.in/
        - generic [ref=e478]:
          - generic [ref=e479]: HELP
          - link "Payments" [ref=e480] [cursor=pointer]:
            - /url: /pages/payments
          - link "Shipping" [ref=e481] [cursor=pointer]:
            - /url: /pages/shipping
          - link "Cancellation & Returns" [ref=e482] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
          - link "FAQ" [ref=e483] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
        - generic [ref=e484]:
          - generic [ref=e485]: CONSUMER POLICY
          - link "Cancellation & Returns" [ref=e486] [cursor=pointer]:
            - /url: /pages/returnpolicy?otracker=footer_navlinks
          - link "Terms Of Use" [ref=e487] [cursor=pointer]:
            - /url: /pages/terms?otracker=footer_navlinks
          - link "Security" [ref=e488] [cursor=pointer]:
            - /url: /pages/paymentsecurity?otracker=footer_navlinks
          - link "Privacy" [ref=e489] [cursor=pointer]:
            - /url: /pages/privacypolicy?otracker=footer_navlinks
          - link "Sitemap" [ref=e490] [cursor=pointer]:
            - /url: /sitemap?otracker=footer_navlinks
          - link "Grievance Redressal" [ref=e491] [cursor=pointer]:
            - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
          - link "EPR Compliance" [ref=e492] [cursor=pointer]:
            - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
          - link "FSSAI Food Safety Connect App" [ref=e493] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=e495]:
          - generic [ref=e496]: "Mail Us:"
          - generic [ref=e499]:
            - paragraph [ref=e500]: Flipkart Internet Private Limited,
            - paragraph [ref=e501]: Buildings Alyssa, Begonia &
            - paragraph [ref=e502]: Clove Embassy Tech Village,
            - paragraph [ref=e503]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=e504]: Bengaluru, 560103,
            - paragraph [ref=e505]: Karnataka, India
          - generic [ref=e506]: Social
          - generic [ref=e507]:
            - link [ref=e509] [cursor=pointer]:
              - /url: https://www.facebook.com/flipkart
              - img [ref=e510]
            - link [ref=e512] [cursor=pointer]:
              - /url: https://www.twitter.com/flipkart
              - img [ref=e513]
            - link [ref=e515] [cursor=pointer]:
              - /url: https://www.youtube.com/flipkart
              - img [ref=e516]
            - link [ref=e518] [cursor=pointer]:
              - /url: https://www.instagram.com/flipkart
              - img [ref=e519]
        - generic [ref=e521]:
          - generic [ref=e522]: "Registered Office Address:"
          - generic [ref=e525]:
            - paragraph [ref=e526]: Flipkart Internet Private Limited,
            - paragraph [ref=e527]: Buildings Alyssa, Begonia &
            - paragraph [ref=e528]: Clove Embassy Tech Village,
            - paragraph [ref=e529]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=e530]: Bengaluru, 560103,
            - paragraph [ref=e531]: Karnataka, India
            - paragraph [ref=e532]: "CIN : U51109KA2012PTC066107"
            - paragraph [ref=e533]:
              - text: "Telephone:"
              - link "044-45614700" [ref=e534] [cursor=pointer]:
                - /url: tel:044-45614700
              - text: /
              - link "044-67415800" [ref=e535] [cursor=pointer]:
                - /url: tel:044-67415800
      - generic [ref=e537]:
        - generic [ref=e538]:
          - img [ref=e539]
          - link "Become a Seller" [ref=e540] [cursor=pointer]:
            - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
        - generic [ref=e541]:
          - img [ref=e542]
          - text: Advertise
        - generic [ref=e543]:
          - img [ref=e544]
          - link "Gift Cards" [ref=e545] [cursor=pointer]:
            - /url: /the-gift-card-store?otracker=footer_navlinks
        - generic [ref=e546]:
          - img [ref=e547]
          - link "Help Center" [ref=e548] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
        - generic [ref=e549]: © 2007-2026 Flipkart.com
        - img [ref=e550]
```

# Test source

```ts
  1  | import {test, expect,type Locator} from '@playwright/test'
  2  | 
  3  | const URL = "https://www.flipkart.com/search"
  4  | 
  5  | test.describe('Flipkart task',()=>{
  6  | 
  7  |     test.beforeEach(async({page})=>{
  8  |         console.log('Before Each test Block')
  9  |         await page.goto(URL)
  10 |     })
  11 | 
  12 |     
  13 | test('Flipkart Task: TC1 @smoke @regression',async({page})=>{
  14 | console.log('TC1')
  15 | await page.locator('[name="q"]').fill('Mac mini')
  16 | await page.locator('svg').first().click()
  17 | 
  18 | 
  19 | 
  20 | //await page.locator('.pIpigb:nth-child(1)').waitFor({state:'visible'})
  21 | const SearchTitle: Locator[] = await page.locator('.pIpigb').all()
  22 | const SearchProductPrice: string[] = await page.locator('.fb4uj3 div div:nth-child(1)').allInnerTexts()
  23 | console.log("Total Search Titles: ",SearchTitle.length)
  24 | console.log("Total Search Product Price: ",SearchProductPrice.length)
  25 | let i:number = 1
  26 | for(const title of SearchTitle){
> 27 | console.log(`Title ${i}: ${await title.getAttribute('title')}`)
     |                                        ^ Error: locator.getAttribute: Test timeout of 30000ms exceeded.
  28 | console.log(`Price ${i}: ${SearchProductPrice[i - 1]}`)
  29 | 
  30 | i++
  31 | }
  32 | 
  33 | //finding the Cheapest Price
  34 | 
  35 | 
  36 | 
  37 | 
  38 | 
  39 | 
  40 | 
  41 | 
  42 | })
  43 | 
  44 | 
  45 | 
  46 | 
  47 | })   
```