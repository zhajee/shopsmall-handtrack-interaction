function loadSavedRunkeepersShops() {
	return new Promise(function(resolve, reject) {
	var RUNKEEPER_SHOPS = [
		{
			"text": "handcrafted, reusable gel press-on nails that are custom-fit to you", 
			"created_at": "Facted Beauty",
			"website": "https://www.facetedbeauty.com/"
		}, 
		{
			"text": "handmade ceramics", 
			"created_at": "Cwong Ceramics",
			"website": "https://cwongceramics.com/"
		},
		{
			"text": "flowers", 
			"created_at": "My Flower Shop",
			"website": "https://myflowershopsf.com/"
		}, 
		{
			"text": "Bts inspired Jewelry and clothing", 
			"created_at": "Private Paradise Co.",
			"website": "https://privateparadiseco.com/"
		}, 
		{
			"text": "anime art prints ", 
			"created_at": "EMW ART",
			"website": "https://www.emwfineart.com/"
		}, 
		{
			"text": "art prints", 
			"created_at": "Quisteen",
			"website": "https://www.instagram.com/quisteen1/"
		},
		{
			"text": "Handmade jewelry ", 
			"created_at": "Simple Stones",
			"website": "https://shopsimplestones.com/"
		}, 
		{
			"text": "Art prints", 
			"created_at": "Pascal Productions",
			"website": "https://www.pascualproductions.com/shop-all?category=Open+Edition+Prints"
		}, 
		{
			"text": "Art prints, tattoo prints", 
			"created_at": "Artmanee",
			"website": "https://www.artmanee.com/shop/"
		}, 
		{
			"text": "anime apparel", 
			"created_at": "Trinhnity Co",
			"website": "https://trinhnityco.com/"
		},
		{
			"text": "jewelry", 
			"created_at": "RMR Jewelry",
			"website": "https://rmrjewelry.com/"
		},
		{
			"text": "pet stickers & keychains", 
			"created_at": "Cloris Creates",
			"website": "https://www.etsy.com/shop/cloriscreates/"
		},
		{
			"text": "anime car apparel (stickers & license plate frames)", 
			"created_at": "Chotto Minute",
			"website": "https://chottominute.com/"
		},
		{
			"text": "stationary, trinkets", 
			"created_at": "DeliVUry",
			"website": "https://delivury.co/?utm_medium=organic&amp;utm_source=influencer_jessica&amp;utm_campaign=jessicanewdrop&amp;utm_content=delivuryigbio"
		},
		{
			"text": "bullet journals, washi tapes", 
			"created_at": "Shop Amanda Rach Lee",
			"website": "https://shopamandarachlee.com/collections/all"
		},
		{
			"text": "jewelry", 
			"created_at": "Spirit Adornments",
			"website": "https://spiritadornments.com/"
		},
		{
			"text": "press on nails", 
			"created_at": "Jangmi Nails",
			"website": "https://jangminails.carrd.co/"
		},
		{
			"text": "press on nails", 
			"created_at": "Monster Manicure",
			"website": "https://www.instagram.com/monstermanicures/"
		},
		{
			"text": "anime outerwear", 
			"created_at": "Steady Hands",
			"website": "www.steady-hands.com/"
		},
		{
			"text": "shoe souls, roller skates, hoodies", 
			"created_at": "Feel Your Soul",
			"website": "https://feelyoursoul.com/pages/shop-all"
		},
		{
			"text": "enamel pins, stickers, purses", 
			"created_at": "blushsprout",
			"website": "https://blushsprout.com/"
		},
		{
			"text": "planners, stickers, washi tape, keychains", 
			"created_at": "SumLilThings",
			"website": "https://sumlilthings.com/"
		},
		{
			"text": "pet stickers and keychains", 
			"created_at": "Cloris Creates",
			"website": "https://www.etsy.com/shop/ClorisCreates?coupon=GOTCHABELLA"
		},
		{
			"text": "stickers, planners, folders", 
			"created_at": "paperkumaco",
			"website": "https://www.etsy.com/shop/paperkumaco"
		},
		{
			"text": "anime enamel pins, anime stickers", 
			"created_at": "goozeepins",
			"website": "https://goozeepins.com/"
		},
		{
			"text": "washi tape, planner stickers", 
			"created_at": "StickyRiceCo",
			"website": "https://stickyriceco.com/"
		},
		{
			"text": "stickers, notebooks, folders, washi tape", 
			"created_at": "Paper Sutekka Stationery",
			"website": "https://papersutekka.com/"
		},
		{
			"text": "handmade jewelry ", 
			"created_at": "Crystalized Ice Co",
			"website": "https://www.instagram.com/crystallizediceco/"
		},
		{
			"text": "plushies, stationary", 
			"created_at": "loomi by ciaraturnerart",
			"website": "https://ciaraturnerart.com/"
		},
		{
			"text": "stickers, washi tape", 
			"created_at": "itspaperco",
			"website": "https://itspaperco.com/"
		},
		{
			"text": "enamel pins, stickers", 
			"created_at": "birduyen",
			"website": "https://birduyen.com/"
		},
		{
			"text": "hats, clothing, stickers, keychains, phone cases, plushies", 
			"created_at": "liliuhms",
			"website": "https://shop.liliuhms.com/"
		},
		{
			"text": "handmade earrings", 
			"created_at": "Adnil Studios",
			"website": "https://www.instagram.com/adnil.studios/"
		},
		{
			"text": "Lingerie Sets, Loungewear, Bodysuits, Accessories", 
			"created_at": "My Gemstone",
			"website": "https://www.mygemstone.us/ "
		},
		{
			"text": "stickers, washi tape", 
			"created_at": "itspaperco",
			"website": "https://itspaperco.com/"
		},
		{
			"text": "stickers, washi tape", 
			"created_at": "itspaperco",
			"website": "https://itspaperco.com/"
		},
		{
			"text": "Jewelry", 
			"created_at": "Ippo earrings",
			"website": "https://www.etsy.com/shop/ippoearrings"
		},
		{
			"text": "Thermal phone cases", 
			"created_at": "Phoozy",
			"website": "https://phoozy.com/"
		},
		{
			"text": "Fitness board", 
			"created_at": "Simply Fit Board",
			"website": "https://www.instagram.com/simplyfitboard/"
		},
		{
			"text": "Self-cleaning water bottle", 
			"created_at": "LARQ",
			"website": "https://www.livelarq.com/"
		},
		{
			"text": "Tattoo After-Care", 
			"created_at": "Mad Rabbit",
			"website": "https://www.madrabbit.com/"
		},
		{
			"text": "Motorcycle helmet brake light", 
			"created_at": "Brake Free",
			"website": "https://www.brakefreetech.com/"
		},
		{
			"text": "Skating shoes, products, and apparel", 
			"created_at": "Premier Skate Shop",
			"website": "https://thepremierstore.com/"
		},
		{
			"text": "Exercise wheel for back pain", 
			"created_at": "Chirp",
			"website": "https://gochirp.com/"
		}
	];
	resolve(RUNKEEPER_SHOPS);
});
}