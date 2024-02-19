const categoryMap = {
  /*
    The category map is a list of hierarchical Bol product categories and their 
    corresponding Shopify category ids.
    SOURCE: https://help.shopify.com/txt/product_taxonomy/en.txt
  */
  "Damesmode > Beenmode > Leggings > Corrigerende leggings": {
    id: 173,
    name: "Kleding en accessoires > Kleding > Lange broeken"
  },
  "Damesmode > Beenmode > Panty's": {
    id: 206,
    name: "Kleding en accessoires > Kleding > Ondergoed en sokken > Panty's"
  },
  "Damesmode > Kleding > Jassen > Bodywarmers": {
    id: 167,
    name: "Kleding en accessoires > Kleding > Buitenkleding > Jassen en jacks"
  },
  "Damesmode > Kleding > Jassen > Winterjassen": {
    id: 167,
    name: "Kleding en accessoires > Kleding > Buitenkleding > Jassen en jacks"
  },
  "Damesmode > Beenmode > Panty's > Corrigerende Panty's": {
    id: 206,
    name: "Kleding en accessoires > Kleding > Ondergoed en sokken > Panty's"
  },
  "Damesmode > Kleding > Blouses & Tunieken > Blouses": {
    id: 174,
    name: "Kleding en accessoires > Kleding > Overhemden, shirts en bovenstukjes"
  },
  "Damesmode > Kleding > Blazers": {
    id: 183,
    name: "Kleding en accessoires > Kleding > Pakken"
  },
  "Damesmode > Kleding > Jurken > Midi-jurken": {
    id: 160,
    name: "Kleding en accessoires > Kleding > Jurken"
  },
  "Damesmode > Kleding > Broeken > Flared broeken": {
    id: 173,
    name: "Kleding en accessoires > Kleding > Lange broeken"
  },
  "Damesmode > Kleding > Broeken > Pantalons": {
    id: 173,
    name: "Kleding en accessoires > Kleding > Lange broeken"
  },
  "Herenmode > Kleding > Jassen > Poncho's": {
    id: 167,
    name: "Kleding en accessoires > Kleding > Buitenkleding > Jassen en jacks"
  },
  "Damesmode > Kleding > Jassen > Faux fur jassen": {
    id: 167,
    name: "Kleding en accessoires > Kleding > Buitenkleding > Jassen en jacks"
  },
  "Damesmode > Kleding > Jurken > Maxi-jurken": {
    id: 160,
    name: "Kleding en accessoires > Kleding > Jurken"
  },
  "Damesmode > Kleding > Jurken > Zomerjurken": {
    id: 160,
    name: "Kleding en accessoires > Kleding > Jurken"
  },
  "Damesmode > Kleding > Broeken > Cargo broeken": {
    id: 173,
    name: "Kleding en accessoires > Kleding > Lange broeken"
  },
  "Damesmode > Accessoires > Sjaals": {
    id: 298,
    name: "Kleding en accessoires > Kledingaccessoires > Sjaals en omslagdoeken"
  },
  "Damesmode > Kleding > Truien & Vesten > Vesten > Lange vesten": {
    id: 171,
    name: "Kleding en accessoires > Kleding > Buitenkleding > Vesten"
  },
  "Klussen > Badkamer & Sanitair > Baden > Badmontageonderdelen > Badafvoeren": {
    id: 3039,
    name: "Huis en tuin > Badkameraccessoires"
  },
  "Wonen > Woonaccessoires > Klokken > Wandklokken": {
    id: 3100,
    name: "Huis en tuin > Decoratie > Klokken > Wandklokken"
  },
  "Damesmode > Sieraden & Horloges > Horloges > Polshorloges": {
    id: 345,
    name: "Kleding en accessoires > Sieraden > Horloges"
  },
  "Elektronica > Camera's & Accessoires > Camera-accessoires > Statieven & Accessoires > Statieven": {
    id: 1217,
    name: "Camera's en optiek > Optische en camera-accessoires > Statieven en monopods"
  },
  "Klussen > Keuken > Spoelbakaccessoires > Korfpluggen": {
    id: 3529,
    name: "Huis en tuin > Keuken en eetkamer > Accessoires voor keukenmachines"
  },
  "Klussen > Badkamer & Sanitair > Wastafels & Fonteinen > Wastafel montageonderdelen > Afvoerpluggen": {
    id: 3039,
    name: "Huis en tuin > Badkameraccessoires"
  },
  "Computer > Computercomponenten > Single-board computers": {
    id: 1474,
    name: "Elektronica > Accessoires voor elektronica > Computeronderdelen"
  },
  "Kamperen & Outdoor > Outdoor > Survivalsets": {
    id: 4810,
    name: "Sportartikelen > Buitenrecreatie > Kamperen en wandelen"
  },
  "Klussen > Handgereedschap > Industriële Magneten": {
    id: 398,
    name: "Kunst en entertainment > Hobby's en creatieve vaardigheden > Handwerk en hobby's > Handwerk- en hobbymaterialen > Hechtmiddelen en magneten voor hobbygebruik"
  },
  "Kamperen & Outdoor > Bootuitrusting > Boottoebehoren": {
    id: 4720,
    name: "Sportartikelen > Buitenrecreatie > Boten en watersport"
  },
  "Elektronica > Telefonie & Accessoires > Telefoonaccessoires > Telefoonhouders": {
    id: 1394,
    name: "Elektronica > Communicatie > Telefonie > Accessoires voor mobiele telefoons > Carkits voor mobiele telefoons"
  },
  "Kantoor & School > Kantoorartikelen > Presenteren > Whiteboards & Accessoires > Whiteboardmagneten": {
    id: 4307,
    name: "Kantoorartikelen > Presentatiebenodigdheden"
  },
  "Huishouden > Opbergers > Keukenorganizers > Keukenophangers > Ophangmagneten": {
    id: 3716,
    name: "Huis en tuin > Keuken en eetkamer > Keukengereedschap > Keukenopbergsystemen"
  },
  "Klussen > Badkamer & Sanitair > Douches > Douchemontageonderdelen > Douchekophouders": {
    id: 3039,
    name: "Huis en tuin > Badkameraccessoires"
  },
  "Herenmode > Sieraden & Horloges > Horloges > Polshorloges": {
    id: 345,
    name: "Kleding en accessoires > Sieraden > Horloges"
  },
  "Wonen > Woonaccessoires > Klokken > Staande klokken": {
    id: 3099,
    name: "Huis en tuin > Decoratie > Klokken > Grootvaders klokken"
  },
  "Elektronica > Camera's & Accessoires > Camera-accessoires > Statieven & Accessoires > Statiefaccessoires > Statiefadapters": {
    id: 1214,
    name: "Camera's en optiek > Optische en camera-accessoires > Accessoires voor statieven en monopods > Statiefbeugels en -bevestiging"
  },
  "Elektronica > Audio & Hifi > Audio voor thuis > Home entertainment accessoires > Speakeraccessoires > Draadloze ontvangers & Streamers": {
    id: 1288,
    name: "Elektronica > Audio > Audioaccessoires > Luidsprekeraccessoires"
  },
  "Klussen > Handgereedschap > Tegelgereedschap > Wiggen": {
    id: 2516,
    name: "Bouwmaterialen > Gereedschap"
  },
  "Huishouden > Opbergers > Keukenorganizers > Keukenophangers > Ophanghaken": {
    id: 3716,
    name: "Huis en tuin > Keuken en eetkamer > Keukengereedschap > Keukenopbergsystemen"
  },
  "Klussen > Keuken > Spoelbakaccessoires > Plugstoppen": {
    id: 3529,
    name: "Huis en tuin > Keuken en eetkamer > Accessoires voor keukenmachines"
  },
  "Sport > Alle sporten > Wielrennen > Fietsaccessoires > Racefiets verlichting": {
    id: 4860,
    name: "Sportartikelen > Buitenrecreatie > Fietsen (sport) > Fietsaccessoires"
  },
  "Tuin > Potterie > Bloempotten": {
    id: 3860,
    name: "Huis en tuin > Tuin en gazon > Tuinieren > Potten"
  },
  "Koken & Tafelen > Bakspullen > Deegrollers": {
    id: 3756,
    name: "Huis en tuin > Keuken en eetkamer > Keukengereedschap > Deegrollers"
  },
  "Gezondheid > Hulpmiddelen > Algemeen dagelijkse levensverrichtingen > Loepen": {
    id: 4271,
    name: "Kantoorartikelen > Kantoorbenodigdheden > Vergrootglazen"
  },
  "Elektronica > Telefonie & Accessoires > Telefoonaccessoires > Opladers > Draadloze opladers": {
    id: 1582,
    name: "Elektronica > Accessoires voor elektronica > Voeding > Stroomadapters en opladers"
  },
  "Klussen > Badkamer & Sanitair > Badkamer accessoires > Houders en dispensers > Fohnhouders": {
    id: 3044,
    name: "Huis en tuin > Badkameraccessoires > Badkameraccessoiresets"
  },
  "Klussen > Elektra > Kabelbinders, houders- en accessoires > Kabelklemmen > Kabelclips": {
    id: 1450,
    name: "Elektronica > Accessoires voor elektronica > Kabels wegwerken > Draad- en kabelbinders"
  },
  "Elektronica > Telefonie & Accessoires > Telefoonaccessoires > Telefoonhouders > Autohouders": {
    id: 1386,
    name: "Elektronica > Communicatie > Telefonie > Accessoires voor mobiele telefoons"
  },
  "Elektronica > Telefonie & Accessoires > Telefoonaccessoires > Telefoonhouders > Fietshouders": {
    id: 1386,
    name: "Elektronica > Communicatie > Telefonie > Accessoires voor mobiele telefoons"
  },
  "Wonen > Woonaccessoires > Kussentjes > Kussenhoesjes": {
    id: 4008,
    name: "Huis en tuin > Linnengoed > Beddengoed > Kussenhoezen"
  },
  "Klussen > Keuken > Keukenkraanonderdelen > Afdichtingsringen": {
    id: 3529,
    name: "Huis en tuin > Keuken en eetkamer > Accessoires voor keukenmachines"
  },
  "Speelgoed > Hobby & Creatief > Tekenen & Kleuren > Tekensjablonen": {
    id: 367,
    name: "Kunst en entertainment > Hobby's en creatieve vaardigheden > Handwerk en hobby's > Handwerk- en hobbymaterialen"
  },
  "Koken & Tafelen > Keukengerei > Vergieten & Zeven > Vergieten": {
    id: 3683,
    name: "Huis en tuin > Keuken en eetkamer > Keukengereedschap > Vergieten en zeven"
  },
  "Elektronica > Telefonie & Accessoires > Telefoonaccessoires > Telefoonlenzen": {
    id: 1387,
    name: "Elektronica > Communicatie > Telefonie > Accessoires voor mobiele telefoons > Camera-accessoires voor mobiele telefoons"
  },
  "Klussen > Handgereedschap > Meetgereedschap > Linialen": {
    id: 2610,
    name: "Bouwmaterialen > Gereedschap > Meethulpmiddelen en sensoren > Linialen"
  },
  "Huishouden > Strijken > Naaimachineaccessoires": {
    id: 450,
    name: "Kunst en entertainment > Hobby's en creatieve vaardigheden > Handwerk en hobby's > Accessoires voor kunst- en hobbygereedschap"
  },
  "Beauty > Make-up > Make-upaccessoires > Make-upspiegel": {
    id: 2813,
    name: "Gezondheid en persoonlijke verzorging > Persoonlijke verzorging > Cosmetica > Cosmetische hulpmiddelen > Make-upproducten > Make-upspiegels"
  },
  "Persoonlijke verzorging > Tand- & Mondverzorging > Handtandenborstels": {
    id: 2990,
    name: "Gezondheid en persoonlijke verzorging > Persoonlijke verzorging > Mondverzorging > Tandenborstels"
  },
  "Huishouden > Vaatwassen > Afdruipmatten": {
    id: 3693,
    name: "Huis en tuin > Keuken en eetkamer > Keukengereedschap > Bordenrekken en afdruiprekken"
  },
  "Koken & Tafelen > Tafelaccessoires > Olie- & Azijnstellen": {
    id: 3684,
    name: "Huis en tuin > Keuken en eetkamer > Keukengereedschap > Specerijdispensers"
  },
  "Beauty > Make-up > Nagels > Nepnagels": {
    id: 2872,
    name: "Gezondheid en persoonlijke verzorging > Persoonlijke verzorging > Cosmetica > Nagelverzorging > Valse nagels"
  },
  "Wonen > Woonaccessoires > Decoratieve accessoires > Beelden & Figuren": {
    id: 3078,
    name: "Huis en tuin > Decoratie > Kunst > Beelden, sculpturen en standbeelden"
  },
  "Elektronica > Camera's & Accessoires > Camera-accessoires > Lenzen & Accessoires > Lensaccessoires > Camerafilters": {
    id: 1171,
    name: "Camera's en optiek > Optische en camera-accessoires > Accessoires voor cameralenzen > Lens- en filteradapters"
  },
  "Klussen > Badkamer & Sanitair > Badkamer accessoires > Douche accessoires > Doucherekjes": {
    id: 3039,
    name: "Huis en tuin > Badkameraccessoires"
  },
  "Klussen > Centrale verwarming > Radiatoren > Radiator onderdelen": {
    id: 2322,
    name: "Bouwmaterialen > Ventilatie"
  },
  "Persoonlijke verzorging > Gezichtsreiniging > Gezichtsmaskers & -strips": {
    id: 2834,
    name: "Gezondheid en persoonlijke verzorging > Persoonlijke verzorging > Cosmetica > Cosmetische hulpmiddelen > Hulpmiddelen voor huidverzorging > Gezichtsauna's"
  },
  "Klussen > Handgereedschap > Sleutelgereedschap > Steek- & ringsleutels > Steeksleutels": {
    id: 2691,
    name: "Bouwmaterialen > Gereedschap > Moersleutels"
  },
  "Klussen > Badkamer & Sanitair > Badkamer accessoires > Houders en dispensers > Handdoekhouders": {
    id: 3060,
    name: "Huis en tuin > Badkameraccessoires > Handdoekrekken en -houders"
  },
  "Klussen > Badkamer & Sanitair > Badkamer accessoires > Houders en dispensers > Zeephouders": {
    id: 3055,
    name: "Huis en tuin > Badkameraccessoires > Zeepbakjes"
  },
  "Klussen > Badkamer & Sanitair > Badkamer accessoires > Houders en dispensers > Tandenborstelhouders": {
    id: 3059,
    name: "Huis en tuin > Badkameraccessoires > Tandenborstelhouders"
  },
  "Koken & Tafelen > Tafelaccessoires > Onderzetters": {
    id: 3777,
    name: "Huis en tuin > Keuken en eetkamer > Servies en bestek"
  },
  "Klussen > Badkamer & Sanitair > Badkamer accessoires > Toilet accessoires > Toiletborstels": {
    id: 3057,
    name: "Huis en tuin > Badkameraccessoires > Toiletborstels en -houders"
  },
  "Speelgoed > Hobby & Creatief > Hobbygereedschap > Hobby sjablonen": {
    id: 356,
    name: "Kunst en entertainment > Hobby's en creatieve vaardigheden > Handwerk en hobby's"
  },
  "Speelgoed > Knutselen voor kinderen > Mode & Sieraden > Sieraden maken > Kralen & Bedels": {
    id: 356,
    name: "Kunst en entertainment > Hobby's en creatieve vaardigheden > Handwerk en hobby's"
  },
  "Wonen > Meubels > Bedden > Hoogslapers": {
    id: 2063,
    name: "Meubelen > Bedden en accessoires > Bedden en ledikanten"
  },
  "Boeken > Kunst & Fotografie": {
    id: 4137,
    name: "Media > Boeken > Gedrukte boeken"
  },
  "Sport > Fitness > Fitnessapparaten > Loopbanden": {
    id: 4628,
    name: "Sportartikelen > Sporten en fitness > Cardio > Cardioapparaten > Loopbanden"
  },
  "Wonen > Meubels > Banken > Slaapbanken": {
    id: 2096,
    name: "Meubelen > Stoelen > Armstoelen, relaxstoelen en slaapbanken"
  },
  "Erotiek > Seksspeeltjes > Vibrerende eieren": {
    id: 4104,
    name: "Volwassenen > Erotisch > Seksspeeltjes"
  },
  "Wonen > Meubels > Stoelen > Fauteuils": {
    id: 2096,
    name: "Meubelen > Stoelen > Armstoelen, relaxstoelen en slaapbanken"
  },
  "Wonen > Meubels > Kasten > Kledingkasten": {
    id: 2072,
    name: "Meubelen > Kasten en opbergmeubelen > Grote kledingkasten"
  },
  "Wonen > Meubels > Bedden > Eenpersoonsbedden": {
    id: 2063,
    name: "Meubelen > Bedden en accessoires > Bedden en ledikanten"
  },
  "Wonen > Meubels > Bedden > Stapelbedden": {
    id: 2063,
    name: "Meubelen > Bedden en accessoires > Bedden en ledikanten"
  },
  "Huishouden > Drogen > Wasdrogers": {
    id: 3293,
    name: "Huis en tuin > Huishoudelijke apparaten > Wasmachines > Wasdrogers"
  },
  "Elektronica > Keukenapparaten > Koelen & Vriezen > Koelkasten > Mini koelkasten": {
    id: 3649,
    name: "Huis en tuin > Keuken en eetkamer > Keukenmachines > Koelkasten"
  },
  "Wonen > Meubels > Stoelen > Barkrukken": {
    id: 2107,
    name: "Meubelen > Stoelen > Barkrukken"
  },
  "Sport > Fitness > Fitnessapparaten > Hometrainers": {
    id: 4623,
    name: "Sportartikelen > Sporten en fitness > Cardio > Cardioapparaten > Hometrainers"
  },
  "Boeken > Geneeskunde & Verpleging > Geneeskunde algemeen > Persoonlijke & Volksgezondheid": {
    id: 4137,
    name: "Media > Boeken > Gedrukte boeken"
  },
  "Persoonlijke verzorging > Haar > Haarverf & benodigdheden > Semi-Permanente haarkleuring": {
    id: 2934,
    name: "Gezondheid en persoonlijke verzorging > Persoonlijke verzorging > Haarverzorging > Haarkleurmiddelen"
  },
  "Wonen > Meubels > Stoelen > Eetkamerstoelen": {
    id: 2104,
    name: "Meubelen > Stoelen > Keuken- en eetkamerstoelen"
  },
  "Sport > Fitness > Fitnessapparaten > Roeitrainers": {
    id: 4624,
    name: "Sportartikelen > Sporten en fitness > Cardio > Cardioapparaten > Roei-apparaten"
  },
  "Gezondheid > EHBO > EHBO-instrumenten": {
    id: 2724,
    name: "Gezondheid en persoonlijke verzorging > Gezondheidszorg > EHBO"
  },
  "Wonen > Meubels > Kasten > Ladekasten": {
    id: 2081,
    name: "Meubelen > Kasten en opbergmeubelen > Opbergkasten en -kluisjes"
  },
  "Wonen > Meubels > Kasten > TV meubels": {
    id: 2108,
    name: "Meubelen > Entertainment- en mediasystemen"
  },
  "Speelgoed > Buitenspeelgoed > Speeltoestellen > Speeltorens & Accessoires > Speeltorens": {
    id: 5202,
    name: "Speelgoed en spellen > Apparaten voor buiten spelen > Speelhuizen"
  },
  "Wonen > Meubels > Tafels > Salontafels": {
    id: 2160,
    name: "Meubelen > Tafels > Accenttafels > Salontafels"
  },
  "Wonen > Meubels > Bedden > Tweepersoonsbedden": {
    id: 2063,
    name: "Meubelen > Bedden en accessoires > Bedden en ledikanten"
  },
  "Sport > Fitness > Fitnessapparaten > Indoorfietsen": {
    id: 4623,
    name: "Sportartikelen > Sporten en fitness > Cardio > Cardioapparaten > Hometrainers"
  },
  "Huishouden > Schoonmaken > Schoonmaaktextiel > Huishoudhandschoenen": {
    id: 3315,
    name: "Huis en tuin > Huishoudelijke benodigdheden > Schoonmaakmiddelen voor het huishouden > Schoonmaakhandschoenen"
  },
  "Wonen > Meubels > Kasten > Dressoirs": {
    id: 2075,
    name: "Meubelen > Kasten en opbergmeubelen > Dressoirs"
  },
  "Erotiek > Seksspeeltjes > Sekspoppen": {
    id: 4104,
    name: "Volwassenen > Erotisch > Seksspeeltjes"
  },
  "Wonen > Meubels > Banken > 3-zitsbanken": {
    id: 2067,
    name: "Meubelen > Banken"
  },
  "Erotiek > Seksspeeltjes > Vibrators": {
    id: 4104,
    name: "Volwassenen > Erotisch > Seksspeeltjes"
  },
  "Speelgoed > Buitenspeelgoed > Fietsen & Rijden > Accuvoertuigen": {
    id: 5285,
    name: "Speelgoed en spellen > Speelgoed > Speelgoedvoertuigen"
  },
  "Speelgoed > Rollenspellen > Speelgoedkeukens & Accessoires > Speelkeukentjes": {
    id: 5305,
    name: "Speelgoed en spellen > Speelgoed > Spelen > Speelgoedkeuken en -voedsel > Speelgoed - keukens"
  },
  "Fietsen & Accessoires > Fietsen > Vouwfietsen": {
    id: 4936,
    name: "Sportartikelen > Buitenrecreatie > Fietsen (sport) > Fietsen"
  },
  "Wonen > Meubels > Stoelen > Bureaustoelen": {
    id: 2119,
    name: "Meubelen > Kantoormeubelen > Kantoorstoelen"
  },
  "Reisbagage & Reisaccessoires > Koffers > Koffersets": {
    id: 4093,
    name: "Bagage en tassen > Koffers"
  },
  "Erotiek > Seksspeeltjes > Dildo's": {
    id: 4104,
    name: "Volwassenen > Erotisch > Seksspeeltjes"
  },
  "Wonen > Meubels > Tafels > Bureaus": {
    id: 2118,
    name: "Meubelen > Kantoormeubelen > Bureaus"
  },
  "Wonen > Meubels > Kasten > Nachtkastjes": {
    id: 2167,
    name: "Meubelen > Tafels > Nachtkastjes"
  },
  "Wonen > Meubels > Stoelen > Zitzakken > Complete zitzakken": {
    id: 2097,
    name: "Meubelen > Stoelen > Zitzakken"
  },
  "Persoonlijke verzorging > Lichaamsverzorging > Bad- & Douchemiddelen > Bodyscrub": {
    id: 2793,
    name: "Gezondheid en persoonlijke verzorging > Persoonlijke verzorging > Cosmetica > Bad en lichaam"
  },
  "Elektronica > Keukenapparaten > Koelen & Vriezen > Koelkasten > Kastmodel koelkasten": {
    id: 3649,
    name: "Huis en tuin > Keuken en eetkamer > Keukenmachines > Koelkasten"
  },
  "Wonen > Meubels > Bedden > Opklapbedden": {
    id: 2063,
    name: "Meubelen > Bedden en accessoires > Bedden en ledikanten"
  },
  "Kamperen & Outdoor > Kamperen > Bolderkarren": {
    id: 2537,
    name: "Bouwmaterialen > Gereedschap > Rijdende plateaus en handkarren"
  },
  "Speelgoed > Poppen > Poppenhuizen & Inrichting > Poppenhuizen": {
    id: 5254,
    name: "Speelgoed en spellen > Speelgoed > Poppen, speelsets en speelgoedfiguurtjes > Poppenhuizen"
  },
  "Klussen > Badkamer & Sanitair > Wellness > Sauna's > Saunacabines": {
    id: 4060,
    name: "Huis en tuin > Zwembaden en spa's > Sauna's"
  },
  "Wonen > Meubels > Banken > Hockers": {
    id: 2067,
    name: "Meubelen > Banken"
  },
  "Wonen > Meubels > Matrassen > Tweepersoonsmatrassen": {
    id: 2066,
    name: "Meubelen > Bedden en accessoires > Matrassen"
  },
  "Erotiek > Seksspeeltjes > Masturbators": {
    id: 4104,
    name: "Volwassenen > Erotisch > Seksspeeltjes"
  },
  "Wonen > Meubels > Stoelen > Schommelstoelen": {
    id: 2105,
    name: "Meubelen > Stoelen > Schommelstoelen"
  },
  "Wonen > Meubels > Kasten > Wandkasten": {
    id: 2071,
    name: "Meubelen > Kasten en opbergmeubelen"
  },
  "Gezondheid > Hulpmiddelen > Keuken hulpmiddelen > Pillendoosjes": {
    id: 2771,
    name: "Gezondheid en persoonlijke verzorging > Gezondheidszorg > Pillendozen"
  },
  "Persoonlijke verzorging > Lichaamsverzorging > Bad- & Douchemiddelen > Doucheolies": {
    id: 2883,
    name: "Gezondheid en persoonlijke verzorging > Persoonlijke verzorging > Cosmetica > Huidverzorging > Lichaamsoliën"
  },
  "Tuin > Tuingereedschap > Tuinruimers > Tuinkarren": {
    id: 3836,
    name: "Huis en tuin > Tuin en gazon > Tuinieren > Tuingereedschap"
  },
  "Wonen > Meubels > Tafels > Bijzettafels": {
    id: 2161,
    name: "Meubelen > Tafels > Accenttafels > Bijzettafels"
  },
  "Persoonlijke verzorging > Haar > Haarverzorging > Shampoo": {
    id: 2956,
    name: "Gezondheid en persoonlijke verzorging > Persoonlijke verzorging > Haarverzorging > Shampoo en conditioner > Shampoo"
  },
  "Persoonlijke verzorging > Haar > Haarverzorging > Haarolie": {
    id: 2932,
    name: "Gezondheid en persoonlijke verzorging > Persoonlijke verzorging > Haarverzorging"
  },
  "Sport > Fitness > Fitnessapparaten > Trilplaten": {
    id: 4649,
    name: "Sportartikelen > Sporten en fitness > Trillende fitnessapparaten"
  },
  "Kamperen & Outdoor > Bootuitrusting > Bootelektra & Verlichting > Omvormers": {
    id: 1406,
    name: "Elektronica > Componenten > Omvormers"
  },
  "Wonen > Meubels > Kasten > Schoenenkasten": {
    id: 2071,
    name: "Meubelen > Kasten en opbergmeubelen"
  },
  "Wonen > Meubels > Tafels > Eettafels": {
    id: 2165,
    name: "Meubelen > Tafels > Keuken- en eetkamertafels"
  },
  "Persoonlijke verzorging > Gezichtsreiniging > Reinigingsmelk": {
    id: 2886,
    name: "Gezondheid en persoonlijke verzorging > Persoonlijke verzorging > Cosmetica > Huidverzorging > Gezichtsreinigers"
  },
  "Wonen > Meubels > Kasten > Boekenkasten": {
    id: 2147,
    name: "Meubelen > Planken > Boekenkasten"
  },
  "Wonen > Meubels > Tafels > Eethoeken": {
    id: 2165,
    name: "Meubelen > Tafels > Keuken- en eetkamertafels"
  },
  "Klussen > Duurzame energie > Zonnepanelen": {
    id: 2442,
    name: "Bouwmaterialen > Energie- en elektriciteitsbenodigdheden > Zonnepanelen"
  },
  "Persoonlijke verzorging > Lichaamsverzorging > Bad- & Douchemiddelen > Douchegels": {
    id: 2793,
    name: "Gezondheid en persoonlijke verzorging > Persoonlijke verzorging > Cosmetica > Bad en lichaam"
  },
  "Klussen > Badkamer & Sanitair > Badkamermeubels > Badmeubels": {
    id: 2110,
    name: "Meubelen > Meubelsets > Badkamermeubelsets"
  },
  "Persoonlijke verzorging > Haar > Haarstyling > Haarspray": {
    id: 2942,
    name: "Gezondheid en persoonlijke verzorging > Persoonlijke verzorging > Haarverzorging > Haargel, -lak en -mousse"
  },
  "Persoonlijke verzorging > Haar > Haarverzorging > Haarmaskers": {
    id: 2932,
    name: "Gezondheid en persoonlijke verzorging > Persoonlijke verzorging > Haarverzorging"
  },
  "Fietsen & Accessoires > Fietsen > Mountainbikes > Hardtail mountainbikes": {
    id: 4936,
    name: "Sportartikelen > Buitenrecreatie > Fietsen (sport) > Fietsen"
  },
  "Dieren > Katten > Kattenbakken & kattenbakaccessoires > Kattenbakken": {
    id: 25,
    name: "Dieren > Benodigdheden voor huisdieren > Benodigdheden voor katten > Kattenbakken"
  }
};

export default categoryMap;