/* ARKEM - main.js */
'use strict';

const translations = {
  en: {
    'meta.title': 'ARKEM - Modular Castle-Building Strategy RPG',
    'meta.description': 'ARKEM is a single-player medieval strategy RPG about modular castle building, settlement management, third-person exploration, and defending your domain.',
    'meta.ogTitle': 'ARKEM - Modular Castle-Building Strategy RPG',
    'meta.ogDescription': 'Build a modular castle, grow a village, explore in third person, and defend your people in a single-player medieval strategy RPG.',
    'meta.twitterTitle': 'ARKEM - Medieval Strategy RPG',
    'meta.twitterDescription': 'Build a castle piece by piece, manage a growing settlement, explore the world directly, and defend what you have created.',

    'common.skip': 'Skip to main content',
    'nav.aria': 'Main navigation',
    'nav.homeLabel': 'ARKEM - Home',
    'nav.toggle': 'Toggle navigation',
    'nav.story': 'Story',
    'nav.features': 'Gameplay',
    'nav.gallery': 'Gallery',
    'nav.support': 'Support',
    'nav.contact': 'Contact',
    'nav.wishlist': 'Wishlist on Steam',
    'language.label': 'Language selection',

    'hero.aria': 'Hero - ARKEM introduction',
    'hero.bgAlt': 'A medieval castle at dusk',
    'hero.eyebrow': 'Medieval Strategy RPG',
    'hero.title': 'Build Your<br>Legacy',
    'hero.subtitle': 'Build a modular castle, grow a village around it, explore the world in third person, and defend everything you have created.',
    'cta.wishlist': 'Wishlist on Steam',
    'cta.discover': 'Discover the World',

    'story.label': 'Chronicle',
    'story.title': 'Rule From Stone, Ride Beyond It',
    'story.p1': 'Arkem is a single-player medieval strategy RPG that combines modular castle building, settlement management, third-person exploration, and direct combat. You begin with little more than land, ambition, and a reason to fight. From that foundation, you raise a stronghold, gather people around it, and turn a fragile settlement into a seat of power.',
    'story.p2': 'Your castle is not a fixed structure. Walls, towers, gates, courtyards, keeps, and defensive lines are placed piece by piece, allowing you to shape both the appearance and the function of your fortress. Every choice matters: a stronger gate may delay raiders, a better granary may keep your people alive through hardship, and a well-planned courtyard may become the heart of your growing domain.',
    'story.p3': 'Beyond the walls, Arkem becomes a hands-on RPG. Leave the planning view, take control of your lord directly, travel on foot or horseback, visit villages and towns, meet NPCs, accept quests, gather resources, and face danger yourself. Your decisions as a ruler and your actions as a character are part of the same world.',
    'story.p4': 'But growth brings attention. Raiders, enemies, and rival powers may threaten what you have built. Train and equip your followers, organize your defenses, command troops from above, or join the battle personally. A castle is not only a home - it is your final line of defense.',
    'story.p5': 'Set in an alternative medieval world inspired by the years 950-1300 AD, Arkem draws from real historical themes such as Viking incursions, feudal power, frontier settlement, and crusading warfare. Each map offers different landscapes, resources, dangers, and opportunities. Where you settle, how you build, and what kind of ruler you become is up to you.',
    'story.imageAlt': 'A vast medieval landscape with misty mountains and castle battlements at dawn',

    'features.label': 'Gameplay Pillars',
    'features.title': 'Build, Govern, Explore, Defend',
    'features.lead': 'Arkem is built around connected systems: the fortress you design, the people who depend on it, and the dangerous world beyond the gate.',
    'features.castle.title': 'Modular Castle Building',
    'features.castle.desc': 'Place walls, towers, gates, courtyards, keeps, and defensive structures piece by piece to shape a fortress that fits your terrain and strategy.',
    'features.settlement.title': 'Settlement Growth',
    'features.settlement.desc': 'Grow a small camp into a working village with food, workshops, storage, housing, and people who can become the backbone of your domain.',
    'features.exploration.title': 'Third-Person RPG Exploration',
    'features.exploration.desc': 'Step out of the planning view and control your lord directly as you travel on foot or horseback, meet NPCs, gather resources, and take on quests.',
    'features.warfare.title': 'Defense and Warfare',
    'features.warfare.desc': 'Prepare for raids by training followers, equipping your people, organizing defenses, commanding from above, or entering the battle yourself.',
    'features.history.title': 'Historically Inspired World',
    'features.history.desc': 'Explore an alternative medieval setting shaped by themes from 950-1300 AD: Viking pressure, feudal politics, frontier life, and crusading warfare.',
    'features.regions.title': 'Multiple Regions and Maps',
    'features.regions.desc': 'Different regions bring distinct landscapes, resources, dangers, and settlement opportunities that change how you build and survive.',

    'development.label': 'Development Status',
    'development.title': 'In Active Development',
    'development.lead': 'Arkem is an indie project in progress. The systems below are being developed, tested, or planned, and the final game may change as production continues.',
    'development.listAria': 'Development status list',
    'development.item.castle': 'Modular castle building',
    'development.item.settlement': 'Settlement management',
    'development.item.exploration': 'Third-person exploration',
    'development.item.npcs': 'NPCs and quests',
    'development.item.raids': 'Raids and castle defense',
    'development.item.demo': 'Steam page / demo',
    'development.state.inDevelopment': 'in development',
    'development.state.prototype': 'prototype / planned',
    'development.state.planned': 'planned',
    'development.state.soon': 'coming soon',

    'gallery.label': 'Visuals',
    'gallery.title': 'The World of Arkem',
    'gallery.lead': 'Work-in-progress visuals and concept-like previews. Final gameplay screenshots may differ.',
    'gallery.item1.aria': 'Open visual preview: Castle at dusk',
    'gallery.item1.alt': 'A castle gatehouse at dusk with torchlight along the ramparts',
    'gallery.item1.caption': 'Castle approach',
    'gallery.item2.aria': 'Open visual preview: Region planning',
    'gallery.item2.alt': 'A medieval landscape suggesting future regional planning',
    'gallery.item2.caption': 'Region planning',
    'gallery.item3.aria': 'Open visual preview: Raiders beyond the coast',
    'gallery.item3.alt': 'A dark coastal landscape used as a raid concept preview',
    'gallery.item3.caption': 'Raid threat',
    'gallery.item4.aria': 'Open visual preview: Exploration mood',
    'gallery.item4.alt': 'A forested medieval vista representing third-person exploration',
    'gallery.item4.caption': 'Exploration mood',
    'gallery.item5.aria': 'Open visual preview: Stronghold interior',
    'gallery.item5.alt': 'A warm medieval interior mood preview for a future stronghold',
    'gallery.item5.caption': 'Stronghold interior',

    'support.label': 'Follow Development',
    'support.title': 'Help Arkem Find Its Audience',
    'support.lead': 'The most useful support right now is visibility, feedback, and a community that cares about grounded medieval strategy RPGs.',
    'support.steam.title': 'Wishlist on Steam',
    'support.steam.desc': 'Wishlisting helps more players discover Arkem when the Steam page and demo are ready.',
    'support.steam.cta': 'Wishlist on Steam',
    'support.discord.title': 'Join Discord',
    'support.discord.desc': 'Follow progress, discuss ideas, and share feedback with the small team building the game.',
    'support.discord.cta': 'Join Discord',
    'support.updates.title': 'Follow Updates',
    'support.updates.desc': 'Watch the project develop through dev notes, feature previews, and honest production updates.',
    'support.updates.cta': 'Get Updates',
    'support.optional': 'Optional support for development costs',
    'support.paypal.title': 'PayPal',
    'support.paypal.desc': 'A one-time donation can help cover practical development expenses.',
    'support.paypal.cta': 'Donate via PayPal',
    'support.patreon.title': 'Patreon',
    'support.patreon.desc': 'Monthly support is optional and aimed at people who want to stay close to development.',
    'support.patreon.cta': 'Become a Patron',
    'support.kofi.title': 'Ko-fi',
    'support.kofi.desc': 'Small tips are welcome, but following and sharing the project matters most.',
    'support.kofi.cta': 'Buy a Ko-fi',

    'faq.label': 'FAQ',
    'faq.title': 'Questions From the Gatehouse',
    'faq.lead': 'Short answers about the current direction of Arkem.',
    'faq.q1': 'Is Arkem single-player?',
    'faq.a1': 'Yes. Arkem is currently designed as a single-player medieval strategy RPG.',
    'faq.q2': 'Will there be multiplayer?',
    'faq.a2': 'Multiplayer is not the current focus. The priority is a strong single-player foundation.',
    'faq.q3': 'Can I build freely?',
    'faq.a3': 'The goal is modular castle construction with meaningful placement choices, terrain limits, and defensive planning.',
    'faq.q4': 'Is the game historically accurate?',
    'faq.a4': 'Arkem is historically inspired, not a strict simulation. It draws from medieval themes while using an alternative world.',
    'faq.q5': 'Will there be a demo?',
    'faq.a5': 'A demo is planned, but the timing depends on development progress.',
    'faq.q6': 'What platforms are planned?',
    'faq.a6': 'PC is the main target. Other platforms have not been confirmed.',
    'faq.q7': 'Is Arkem open world?',
    'faq.a7': 'The project is aiming for explorable regions and maps rather than promising a vast seamless open world.',
    'faq.q8': 'How can I follow development?',
    'faq.a8': 'Wishlist the game, join Discord, and follow development updates as the project moves toward a Steam page and demo.',

    'contact.label': 'Get in Touch',
    'contact.title': 'Contact Us',
    'contact.lead': 'Questions, suggestions, or development feedback are welcome. Every useful message helps shape the next version of Arkem.',
    'contact.email': 'info@arkem-game.com',
    'contact.discord': 'Discord community',
    'contact.steam': 'Steam page',
    'form.aria': 'Contact form',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.namePlaceholder': 'Your name',
    'form.emailPlaceholder': 'your@email.com',
    'form.messagePlaceholder': 'Write your message here...',
    'form.noticeBefore': 'Fields marked * are required.',
    'form.privacyLink': 'Privacy Policy',
    'form.noticeAfter': 'applies.',
    'form.submit': 'Prepare Email',
    'form.mailSubjectPrefix': 'ARKEM - Message from',
    'form.mailtoPrepared': 'Your email client should now open with a prepared message.',

    'footer.description': 'A single-player medieval strategy RPG about building a fortress, growing a settlement, exploring the world, and defending your people.',
    'footer.navigate': 'Navigate',
    'footer.legal': 'Legal',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.returns': 'Returns & Withdrawal',
    'footer.imprint': 'Imprint',
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with craft and care by a small indie team',
    'lightbox.aria': 'Image viewer',
    'lightbox.close': 'Close image viewer',

    'legal.backHome': 'Back to Home',
    'legal.translationNotice': 'Full translations of this legal page are in preparation. The English version currently applies.',
    'legal.updated': 'Last updated: June 2026',
    'legal.privacy.title': 'Privacy Policy',
    'legal.privacy.metaTitle': 'Privacy Policy - ARKEM',
    'legal.privacy.metaDescription': 'ARKEM privacy policy - how we handle your personal data.',
    'legal.terms.title': 'Terms & Conditions',
    'legal.terms.metaTitle': 'Terms & Conditions - ARKEM',
    'legal.terms.metaDescription': 'ARKEM terms and conditions for use of the website and digital products.',
    'legal.returns.title': 'Returns & Withdrawal',
    'legal.returns.metaTitle': 'Returns & Withdrawal - ARKEM',
    'legal.returns.metaDescription': 'ARKEM returns and withdrawal information for digital products.',
    'legal.imprint.title': 'Imprint',
    'legal.imprint.metaTitle': 'Imprint - ARKEM',
    'legal.imprint.metaDescription': 'Legal provider information for ARKEM.'
  },

  pl: {
    'meta.title': 'ARKEM - strategiczne RPG z modułową budową zamku',
    'meta.description': 'ARKEM to jednoosobowe średniowieczne RPG strategiczne o modułowej budowie zamku, zarządzaniu osadą, eksploracji z trzeciej osoby i obronie własnych ziem.',
    'meta.ogTitle': 'ARKEM - strategiczne RPG z modułową budową zamku',
    'meta.ogDescription': 'Zbuduj modułowy zamek, rozwiń wokół niego osadę, eksploruj świat z trzeciej osoby i broń swoich ludzi w jednoosobowym średniowiecznym RPG strategicznym.',
    'meta.twitterTitle': 'ARKEM - średniowieczne RPG strategiczne',
    'meta.twitterDescription': 'Wznoś zamek element po elemencie, zarządzaj rosnącą osadą, ruszaj w świat osobiście i broń wszystkiego, co stworzyłeś.',

    'common.skip': 'Przejdź do treści głównej',
    'nav.aria': 'Nawigacja główna',
    'nav.homeLabel': 'ARKEM - strona główna',
    'nav.toggle': 'Przełącz nawigację',
    'nav.story': 'Historia',
    'nav.features': 'Rozgrywka',
    'nav.gallery': 'Galeria',
    'nav.support': 'Wsparcie',
    'nav.contact': 'Kontakt',
    'nav.wishlist': 'Dodaj na Steam',
    'language.label': 'Wybór języka',

    'hero.aria': 'Hero - wprowadzenie do ARKEM',
    'hero.bgAlt': 'Średniowieczny zamek o zmierzchu',
    'hero.eyebrow': 'Średniowieczne RPG strategiczne',
    'hero.title': 'Zbuduj swoje<br>dziedzictwo',
    'hero.subtitle': 'Wznieś modułowy zamek, rozwiń wokół niego osadę, eksploruj świat z perspektywy trzeciej osoby i broń wszystkiego, co stworzyłeś.',
    'cta.wishlist': 'Dodaj na Steam',
    'cta.discover': 'Poznaj świat',

    'story.label': 'Kronika',
    'story.title': 'Rządź z kamienia, wyruszaj poza mury',
    'story.p1': 'Arkem to jednoosobowe średniowieczne RPG strategiczne, które łączy modułową budowę zamku, zarządzanie osadą, eksplorację z perspektywy trzeciej osoby i bezpośrednią walkę. Zaczynasz z niewielkim skrawkiem ziemi, ambicją i powodem, by walczyć. Na tej podstawie wznosisz warownię, gromadzisz wokół niej ludzi i zmieniasz kruchą osadę w centrum własnej władzy.',
    'story.p2': 'Twój zamek nie jest gotową bryłą. Mury, wieże, bramy, dziedzińce, donżony i linie obronne stawiasz element po elemencie, decydując zarówno o wyglądzie, jak i funkcji twierdzy. Każdy wybór ma znaczenie: mocniejsza brama może opóźnić najeźdźców, lepszy spichlerz pomoże przetrwać trudny czas, a dobrze zaplanowany dziedziniec stanie się sercem domeny.',
    'story.p3': 'Poza murami Arkem przechodzi w RPG sterowane bezpośrednio. Opuść widok planowania, przejmij kontrolę nad swoim władcą, podróżuj pieszo lub konno, odwiedzaj wsie i miasta, spotykaj NPC, przyjmuj zadania, zdobywaj zasoby i sam mierz się z zagrożeniami. Decyzje władcy i działania postaci należą do tego samego świata.',
    'story.p4': 'Rozwój przyciąga uwagę. Najeźdźcy, wrogowie i rywalizujące siły mogą zagrozić temu, co zbudowałeś. Szkol i wyposażaj swoich ludzi, organizuj obronę, dowódź oddziałami z góry albo osobiście wejdź do walki. Zamek to nie tylko dom - to ostatnia linia obrony.',
    'story.p5': 'Akcja toczy się w alternatywnym średniowiecznym świecie inspirowanym latami 950-1300. Arkem czerpie z historycznych motywów: najazdów wikińskich, feudalnej władzy, osadnictwa na pograniczu i wojen krzyżowych. Każda mapa oferuje inne krajobrazy, zasoby, zagrożenia i szanse. To, gdzie osiądziesz, jak zbudujesz swoją siedzibę i jakim staniesz się władcą, zależy od ciebie.',
    'story.imageAlt': 'Rozległy średniowieczny krajobraz z mglistymi górami i murami zamku o świcie',

    'features.label': 'Filary rozgrywki',
    'features.title': 'Buduj, zarządzaj, eksploruj, broń',
    'features.lead': 'Arkem opiera się na połączonych systemach: twierdzy, którą projektujesz, ludziach zależnych od twoich decyzji i niebezpiecznym świecie za bramą.',
    'features.castle.title': 'Modułowa budowa zamku',
    'features.castle.desc': 'Stawiaj mury, wieże, bramy, dziedzińce, donżony i obiekty obronne element po elemencie, by dopasować twierdzę do terenu i strategii.',
    'features.settlement.title': 'Rozwój osady',
    'features.settlement.desc': 'Zmień mały obóz w działającą wieś z żywnością, warsztatami, magazynami, domami i ludźmi, którzy staną się podstawą twojej domeny.',
    'features.exploration.title': 'Eksploracja RPG z trzeciej osoby',
    'features.exploration.desc': 'Wyjdź z widoku planowania i steruj swoim władcą bezpośrednio, podróżując pieszo lub konno, spotykając NPC, zbierając zasoby i wykonując zadania.',
    'features.warfare.title': 'Obrona i wojna',
    'features.warfare.desc': 'Przygotuj się na najazdy: szkol poddanych, wyposażaj ludzi, organizuj obronę, dowódź z góry albo sam dołącz do bitwy.',
    'features.history.title': 'Świat inspirowany historią',
    'features.history.desc': 'Odwiedź alternatywne średniowiecze zbudowane wokół motywów z lat 950-1300: presji wikingów, feudalnej polityki, życia na pograniczu i wypraw krzyżowych.',
    'features.regions.title': 'Wiele regionów i map',
    'features.regions.desc': 'Różne regiony oznaczają odmienne krajobrazy, zasoby, zagrożenia i okazje do osadnictwa, które wpływają na budowę i przetrwanie.',

    'development.label': 'Status prac',
    'development.title': 'Projekt w aktywnym rozwoju',
    'development.lead': 'Arkem to niezależny projekt w trakcie produkcji. Poniższe systemy są rozwijane, testowane albo planowane, a finalna gra może zmieniać się wraz z postępem prac.',
    'development.listAria': 'Lista statusu prac',
    'development.item.castle': 'Modułowa budowa zamku',
    'development.item.settlement': 'Zarządzanie osadą',
    'development.item.exploration': 'Eksploracja z trzeciej osoby',
    'development.item.npcs': 'NPC i zadania',
    'development.item.raids': 'Najazdy i obrona zamku',
    'development.item.demo': 'Strona Steam / demo',
    'development.state.inDevelopment': 'w produkcji',
    'development.state.prototype': 'prototyp / planowane',
    'development.state.planned': 'planowane',
    'development.state.soon': 'wkrótce',

    'gallery.label': 'Materiały wizualne',
    'gallery.title': 'Świat Arkem',
    'gallery.lead': 'Materiały robocze i podglądy o charakterze koncepcyjnym. Finalne zrzuty z rozgrywki mogą się różnić.',
    'gallery.item1.aria': 'Otwórz podgląd: podejście do zamku',
    'gallery.item1.alt': 'Brama zamku o zmierzchu z pochodniami wzdłuż murów',
    'gallery.item1.caption': 'Podejście do zamku',
    'gallery.item2.aria': 'Otwórz podgląd: planowanie regionu',
    'gallery.item2.alt': 'Średniowieczny krajobraz sugerujący przyszłe planowanie regionu',
    'gallery.item2.caption': 'Planowanie regionu',
    'gallery.item3.aria': 'Otwórz podgląd: zagrożenie najazdem',
    'gallery.item3.alt': 'Mroczny krajobraz wybrzeża użyty jako koncepcyjny podgląd najazdu',
    'gallery.item3.caption': 'Zagrożenie najazdem',
    'gallery.item4.aria': 'Otwórz podgląd: klimat eksploracji',
    'gallery.item4.alt': 'Leśny średniowieczny widok reprezentujący eksplorację z trzeciej osoby',
    'gallery.item4.caption': 'Klimat eksploracji',
    'gallery.item5.aria': 'Otwórz podgląd: wnętrze warowni',
    'gallery.item5.alt': 'Ciepły, średniowieczny nastrój wnętrza jako podgląd przyszłej warowni',
    'gallery.item5.caption': 'Wnętrze warowni',

    'support.label': 'Śledź rozwój',
    'support.title': 'Pomóż Arkem dotrzeć do graczy',
    'support.lead': 'Najcenniejszym wsparciem są teraz widoczność, opinie i społeczność zainteresowana przyziemnym średniowiecznym RPG strategicznym.',
    'support.steam.title': 'Dodaj na Steam',
    'support.steam.desc': 'Lista życzeń pomoże większej liczbie graczy odkryć Arkem, gdy strona Steam i demo będą gotowe.',
    'support.steam.cta': 'Dodaj na Steam',
    'support.discord.title': 'Dołącz do Discorda',
    'support.discord.desc': 'Śledź postępy, rozmawiaj o pomysłach i dziel się opiniami z małym zespołem tworzącym grę.',
    'support.discord.cta': 'Dołącz do Discorda',
    'support.updates.title': 'Śledź aktualizacje',
    'support.updates.desc': 'Obserwuj rozwój projektu przez notatki deweloperskie, podglądy funkcji i uczciwe aktualizacje z produkcji.',
    'support.updates.cta': 'Chcę aktualizacje',
    'support.optional': 'Opcjonalne wsparcie kosztów produkcji',
    'support.paypal.title': 'PayPal',
    'support.paypal.desc': 'Jednorazowa wpłata może pomóc pokryć praktyczne koszty rozwoju.',
    'support.paypal.cta': 'Wesprzyj przez PayPal',
    'support.patreon.title': 'Patreon',
    'support.patreon.desc': 'Wsparcie miesięczne jest opcjonalne i przeznaczone dla osób, które chcą być blisko produkcji.',
    'support.patreon.cta': 'Zostań patronem',
    'support.kofi.title': 'Ko-fi',
    'support.kofi.desc': 'Drobne napiwki są mile widziane, ale najważniejsze są obserwowanie i udostępnianie projektu.',
    'support.kofi.cta': 'Postaw Ko-fi',

    'faq.label': 'FAQ',
    'faq.title': 'Pytania z bramy',
    'faq.lead': 'Krótkie odpowiedzi o obecnym kierunku projektu Arkem.',
    'faq.q1': 'Czy Arkem jest grą single-player?',
    'faq.a1': 'Tak. Arkem jest obecnie projektowane jako jednoosobowe średniowieczne RPG strategiczne.',
    'faq.q2': 'Czy będzie multiplayer?',
    'faq.a2': 'Multiplayer nie jest teraz głównym celem. Priorytetem jest solidna podstawa dla trybu jednoosobowego.',
    'faq.q3': 'Czy mogę budować swobodnie?',
    'faq.a3': 'Celem jest modułowa budowa zamku z sensownym rozmieszczaniem elementów, ograniczeniami terenu i planowaniem obrony.',
    'faq.q4': 'Czy gra jest historycznie wierna?',
    'faq.a4': 'Arkem jest inspirowane historią, ale nie jest ścisłą symulacją. Korzysta ze średniowiecznych motywów w alternatywnym świecie.',
    'faq.q5': 'Czy będzie demo?',
    'faq.a5': 'Demo jest planowane, ale termin zależy od postępów produkcji.',
    'faq.q6': 'Jakie platformy są planowane?',
    'faq.a6': 'Główną platformą jest PC. Inne platformy nie zostały potwierdzone.',
    'faq.q7': 'Czy Arkem jest grą open world?',
    'faq.a7': 'Projekt celuje w eksplorowalne regiony i mapy, bez obiecywania ogromnego, w pełni płynnego otwartego świata.',
    'faq.q8': 'Jak mogę śledzić rozwój?',
    'faq.a8': 'Dodaj grę do listy życzeń, dołącz do Discorda i śledź aktualizacje, gdy projekt będzie zbliżał się do strony Steam i dema.',

    'contact.label': 'Kontakt',
    'contact.title': 'Napisz do nas',
    'contact.lead': 'Pytania, sugestie i opinie o rozwoju gry są mile widziane. Każda rzeczowa wiadomość pomaga kształtować kolejną wersję Arkem.',
    'contact.email': 'info@arkem-game.com',
    'contact.discord': 'Społeczność Discord',
    'contact.steam': 'Strona Steam',
    'form.aria': 'Formularz kontaktowy',
    'form.name': 'Imię',
    'form.email': 'Email',
    'form.message': 'Wiadomość',
    'form.namePlaceholder': 'Twoje imię',
    'form.emailPlaceholder': 'twoj@email.com',
    'form.messagePlaceholder': 'Napisz wiadomość...',
    'form.noticeBefore': 'Pola oznaczone * są wymagane.',
    'form.privacyLink': 'Polityka prywatności',
    'form.noticeAfter': 'ma zastosowanie.',
    'form.submit': 'Przygotuj email',
    'form.mailSubjectPrefix': 'ARKEM - wiadomość od',
    'form.mailtoPrepared': 'Twój program pocztowy powinien otworzyć się z przygotowaną wiadomością.',

    'footer.description': 'Jednoosobowe średniowieczne RPG strategiczne o budowie twierdzy, rozwoju osady, eksploracji świata i obronie swoich ludzi.',
    'footer.navigate': 'Nawigacja',
    'footer.legal': 'Informacje prawne',
    'footer.terms': 'Regulamin',
    'footer.privacy': 'Polityka prywatności',
    'footer.returns': 'Zwroty i odstąpienie',
    'footer.imprint': 'Imprint',
    'footer.rights': 'Wszelkie prawa zastrzeżone.',
    'footer.made': 'Tworzone z rzemiosłem i troską przez mały zespół indie',
    'lightbox.aria': 'Podgląd obrazu',
    'lightbox.close': 'Zamknij podgląd obrazu',

    'legal.backHome': 'Powrót na stronę główną',
    'legal.translationNotice': 'Pełne tłumaczenia tej strony prawnej są w przygotowaniu. Obecnie obowiązuje wersja angielska.',
    'legal.updated': 'Ostatnia aktualizacja: czerwiec 2026',
    'legal.privacy.title': 'Polityka prywatności',
    'legal.privacy.metaTitle': 'Polityka prywatności - ARKEM',
    'legal.privacy.metaDescription': 'Polityka prywatności ARKEM - jak przetwarzamy dane osobowe.',
    'legal.terms.title': 'Regulamin',
    'legal.terms.metaTitle': 'Regulamin - ARKEM',
    'legal.terms.metaDescription': 'Regulamin ARKEM dotyczący korzystania ze strony i produktów cyfrowych.',
    'legal.returns.title': 'Zwroty i odstąpienie',
    'legal.returns.metaTitle': 'Zwroty i odstąpienie - ARKEM',
    'legal.returns.metaDescription': 'Informacje ARKEM o zwrotach i prawie odstąpienia dla produktów cyfrowych.',
    'legal.imprint.title': 'Imprint',
    'legal.imprint.metaTitle': 'Imprint - ARKEM',
    'legal.imprint.metaDescription': 'Informacje prawne o podmiocie odpowiedzialnym za ARKEM.'
  },

  de: {
    'meta.title': 'ARKEM - Strategie-RPG mit modularem Burgenbau',
    'meta.description': 'ARKEM ist ein mittelalterliches Singleplayer-Strategie-RPG über modularen Burgenbau, Siedlungsverwaltung, Third-Person-Erkundung und die Verteidigung deiner Herrschaft.',
    'meta.ogTitle': 'ARKEM - Strategie-RPG mit modularem Burgenbau',
    'meta.ogDescription': 'Baue eine modulare Burg, entwickle ein Dorf, erkunde die Welt in Third Person und verteidige deine Leute in einem mittelalterlichen Singleplayer-Strategie-RPG.',
    'meta.twitterTitle': 'ARKEM - Mittelalterliches Strategie-RPG',
    'meta.twitterDescription': 'Baue deine Burg Stück für Stück, verwalte eine wachsende Siedlung, erkunde die Welt direkt und verteidige alles, was du erschaffen hast.',

    'common.skip': 'Zum Hauptinhalt springen',
    'nav.aria': 'Hauptnavigation',
    'nav.homeLabel': 'ARKEM - Startseite',
    'nav.toggle': 'Navigation umschalten',
    'nav.story': 'Geschichte',
    'nav.features': 'Gameplay',
    'nav.gallery': 'Galerie',
    'nav.support': 'Support',
    'nav.contact': 'Kontakt',
    'nav.wishlist': 'Auf Steam merken',
    'language.label': 'Sprachauswahl',

    'hero.aria': 'Hero - Einführung zu ARKEM',
    'hero.bgAlt': 'Eine mittelalterliche Burg in der Dämmerung',
    'hero.eyebrow': 'Mittelalterliches Strategie-RPG',
    'hero.title': 'Baue dein<br>Vermächtnis',
    'hero.subtitle': 'Errichte eine modulare Burg, entwickle ein Dorf um sie herum, erkunde die Welt aus der Third-Person-Perspektive und verteidige alles, was du erschaffen hast.',
    'cta.wishlist': 'Auf Steam merken',
    'cta.discover': 'Die Welt entdecken',

    'story.label': 'Chronik',
    'story.title': 'Herrsche aus Stein, reite über die Mauern hinaus',
    'story.p1': 'Arkem ist ein mittelalterliches Singleplayer-Strategie-RPG, das modularen Burgenbau, Siedlungsverwaltung, Third-Person-Erkundung und direkten Kampf verbindet. Du beginnst mit kaum mehr als Land, Ehrgeiz und einem Grund zu kämpfen. Daraus errichtest du eine Festung, sammelst Menschen um dich und machst aus einer zerbrechlichen Siedlung einen Sitz der Macht.',
    'story.p2': 'Deine Burg ist kein vorgefertigtes Gebäude. Mauern, Türme, Tore, Höfe, Bergfriede und Verteidigungslinien werden Stück für Stück gesetzt, damit du Aussehen und Funktion deiner Festung bestimmst. Jede Entscheidung zählt: Ein stärkeres Tor kann Räuber aufhalten, ein besserer Kornspeicher kann deine Leute durch Notzeiten bringen, und ein gut geplanter Hof kann zum Herzen deiner Domäne werden.',
    'story.p3': 'Jenseits der Mauern wird Arkem zu einem handfesten RPG. Verlasse die Planungsansicht, übernimm direkt die Kontrolle über deinen Herrn, reise zu Fuß oder zu Pferd, besuche Dörfer und Städte, triff NPCs, nimm Aufträge an, sammle Ressourcen und stelle dich Gefahren selbst. Deine Entscheidungen als Herrscher und deine Handlungen als Figur gehören zur selben Welt.',
    'story.p4': 'Wachstum zieht Aufmerksamkeit auf sich. Räuber, Feinde und rivalisierende Mächte können bedrohen, was du aufgebaut hast. Bilde deine Gefolgsleute aus, rüste sie aus, organisiere die Verteidigung, kommandiere Truppen von oben oder greife persönlich in die Schlacht ein. Eine Burg ist nicht nur ein Zuhause - sie ist deine letzte Verteidigungslinie.',
    'story.p5': 'Arkem spielt in einer alternativen mittelalterlichen Welt, inspiriert von den Jahren 950-1300. Das Spiel greift historische Themen wie Wikingerüberfälle, feudale Macht, Grenzsiedlungen und Kreuzzugskriege auf. Jede Karte bietet andere Landschaften, Ressourcen, Gefahren und Chancen. Wo du siedelst, wie du baust und was für ein Herrscher du wirst, liegt bei dir.',
    'story.imageAlt': 'Eine weite mittelalterliche Landschaft mit nebligen Bergen und Burgzinnen im Morgengrauen',

    'features.label': 'Gameplay-Säulen',
    'features.title': 'Bauen, verwalten, erkunden, verteidigen',
    'features.lead': 'Arkem basiert auf verbundenen Systemen: der Festung, die du entwirfst, den Menschen, die von ihr abhängen, und der gefährlichen Welt vor dem Tor.',
    'features.castle.title': 'Modularer Burgenbau',
    'features.castle.desc': 'Platziere Mauern, Türme, Tore, Höfe, Bergfriede und Verteidigungsanlagen Stück für Stück, um eine Festung zu formen, die zu Gelände und Strategie passt.',
    'features.settlement.title': 'Wachstum der Siedlung',
    'features.settlement.desc': 'Entwickle ein kleines Lager zu einem funktionierenden Dorf mit Nahrung, Werkstätten, Lagern, Wohnraum und Menschen, die das Rückgrat deiner Domäne bilden.',
    'features.exploration.title': 'Third-Person-RPG-Erkundung',
    'features.exploration.desc': 'Verlasse die Planungsansicht und steuere deinen Herrn direkt, während du zu Fuß oder zu Pferd reist, NPCs triffst, Ressourcen sammelst und Aufträge annimmst.',
    'features.warfare.title': 'Verteidigung und Krieg',
    'features.warfare.desc': 'Bereite dich auf Überfälle vor, indem du Gefolgsleute ausbildest, Menschen ausrüstest, Verteidigungen organisierst, von oben kommandierst oder selbst in den Kampf gehst.',
    'features.history.title': 'Historisch inspirierte Welt',
    'features.history.desc': 'Erkunde ein alternatives Mittelalter, geprägt von Themen aus den Jahren 950-1300: Wikinger, Feudalpolitik, Grenzleben und Kreuzzüge.',
    'features.regions.title': 'Mehrere Regionen und Karten',
    'features.regions.desc': 'Verschiedene Regionen bringen eigene Landschaften, Ressourcen, Gefahren und Siedlungschancen mit, die Bauweise und Überleben verändern.',

    'development.label': 'Entwicklungsstand',
    'development.title': 'In aktiver Entwicklung',
    'development.lead': 'Arkem ist ein Indie-Projekt in Entwicklung. Die folgenden Systeme werden entwickelt, getestet oder geplant, und das finale Spiel kann sich im Verlauf der Produktion verändern.',
    'development.listAria': 'Liste zum Entwicklungsstand',
    'development.item.castle': 'Modularer Burgenbau',
    'development.item.settlement': 'Siedlungsverwaltung',
    'development.item.exploration': 'Third-Person-Erkundung',
    'development.item.npcs': 'NPCs und Quests',
    'development.item.raids': 'Überfälle und Burgverteidigung',
    'development.item.demo': 'Steam-Seite / Demo',
    'development.state.inDevelopment': 'in Entwicklung',
    'development.state.prototype': 'Prototyp / geplant',
    'development.state.planned': 'geplant',
    'development.state.soon': 'demnächst',

    'gallery.label': 'Visuals',
    'gallery.title': 'Die Welt von Arkem',
    'gallery.lead': 'Work-in-Progress-Bilder und konzeptartige Vorschauen. Finale Gameplay-Screenshots können abweichen.',
    'gallery.item1.aria': 'Visuelle Vorschau öffnen: Burg bei Dämmerung',
    'gallery.item1.alt': 'Ein Burgtor bei Dämmerung mit Fackellicht entlang der Wehrgänge',
    'gallery.item1.caption': 'Burgzugang',
    'gallery.item2.aria': 'Visuelle Vorschau öffnen: Regionsplanung',
    'gallery.item2.alt': 'Eine mittelalterliche Landschaft als Vorschau auf künftige Regionsplanung',
    'gallery.item2.caption': 'Regionsplanung',
    'gallery.item3.aria': 'Visuelle Vorschau öffnen: Gefahr durch Räuber',
    'gallery.item3.alt': 'Eine dunkle Küstenlandschaft als konzeptartige Vorschau auf einen Überfall',
    'gallery.item3.caption': 'Überfallgefahr',
    'gallery.item4.aria': 'Visuelle Vorschau öffnen: Erkundungsstimmung',
    'gallery.item4.alt': 'Eine bewaldete mittelalterliche Aussicht als Stimmung für Third-Person-Erkundung',
    'gallery.item4.caption': 'Erkundungsstimmung',
    'gallery.item5.aria': 'Visuelle Vorschau öffnen: Innenraum der Festung',
    'gallery.item5.alt': 'Eine warme mittelalterliche Innenraumstimmung als Vorschau für eine künftige Festung',
    'gallery.item5.caption': 'Festungsinneres',

    'support.label': 'Entwicklung verfolgen',
    'support.title': 'Hilf Arkem, sein Publikum zu finden',
    'support.lead': 'Am wichtigsten sind derzeit Sichtbarkeit, Feedback und eine Community, die sich für bodenständige mittelalterliche Strategie-RPGs interessiert.',
    'support.steam.title': 'Auf Steam merken',
    'support.steam.desc': 'Ein Platz auf deiner Wunschliste hilft, Arkem sichtbarer zu machen, sobald Steam-Seite und Demo bereit sind.',
    'support.steam.cta': 'Auf Steam merken',
    'support.discord.title': 'Discord beitreten',
    'support.discord.desc': 'Verfolge Fortschritte, diskutiere Ideen und teile Feedback mit dem kleinen Team hinter dem Spiel.',
    'support.discord.cta': 'Discord beitreten',
    'support.updates.title': 'Updates verfolgen',
    'support.updates.desc': 'Begleite das Projekt über Dev-Notizen, Feature-Vorschauen und ehrliche Produktionsupdates.',
    'support.updates.cta': 'Updates erhalten',
    'support.optional': 'Optionale Unterstützung für Entwicklungskosten',
    'support.paypal.title': 'PayPal',
    'support.paypal.desc': 'Eine einmalige Spende kann helfen, praktische Entwicklungskosten zu decken.',
    'support.paypal.cta': 'Per PayPal spenden',
    'support.patreon.title': 'Patreon',
    'support.patreon.desc': 'Monatliche Unterstützung ist optional und für Menschen gedacht, die nah an der Entwicklung bleiben möchten.',
    'support.patreon.cta': 'Patron werden',
    'support.kofi.title': 'Ko-fi',
    'support.kofi.desc': 'Kleine Beiträge sind willkommen, aber Folgen und Teilen helfen dem Projekt am meisten.',
    'support.kofi.cta': 'Ko-fi geben',

    'faq.label': 'FAQ',
    'faq.title': 'Fragen aus dem Torhaus',
    'faq.lead': 'Kurze Antworten zur aktuellen Richtung von Arkem.',
    'faq.q1': 'Ist Arkem ein Singleplayer-Spiel?',
    'faq.a1': 'Ja. Arkem ist derzeit als mittelalterliches Singleplayer-Strategie-RPG ausgelegt.',
    'faq.q2': 'Wird es Multiplayer geben?',
    'faq.a2': 'Multiplayer steht aktuell nicht im Fokus. Vorrang hat ein starkes Singleplayer-Fundament.',
    'faq.q3': 'Kann ich frei bauen?',
    'faq.a3': 'Ziel ist modularer Burgenbau mit sinnvollen Platzierungsentscheidungen, Geländebeschränkungen und Verteidigungsplanung.',
    'faq.q4': 'Ist das Spiel historisch akkurat?',
    'faq.a4': 'Arkem ist historisch inspiriert, aber keine strenge Simulation. Es nutzt mittelalterliche Themen in einer alternativen Welt.',
    'faq.q5': 'Wird es eine Demo geben?',
    'faq.a5': 'Eine Demo ist geplant, der Zeitpunkt hängt jedoch vom Entwicklungsfortschritt ab.',
    'faq.q6': 'Welche Plattformen sind geplant?',
    'faq.a6': 'PC ist das Hauptziel. Andere Plattformen sind nicht bestätigt.',
    'faq.q7': 'Ist Arkem Open World?',
    'faq.a7': 'Das Projekt zielt auf erkundbare Regionen und Karten, ohne eine riesige nahtlose Open World zu versprechen.',
    'faq.q8': 'Wie kann ich die Entwicklung verfolgen?',
    'faq.a8': 'Setze das Spiel auf deine Wunschliste, tritt Discord bei und verfolge Updates, während sich das Projekt Steam-Seite und Demo nähert.',

    'contact.label': 'Kontakt',
    'contact.title': 'Schreib uns',
    'contact.lead': 'Fragen, Vorschläge und Feedback zur Entwicklung sind willkommen. Jede hilfreiche Nachricht unterstützt die nächste Version von Arkem.',
    'contact.email': 'info@arkem-game.com',
    'contact.discord': 'Discord-Community',
    'contact.steam': 'Steam-Seite',
    'form.aria': 'Kontaktformular',
    'form.name': 'Name',
    'form.email': 'E-Mail',
    'form.message': 'Nachricht',
    'form.namePlaceholder': 'Dein Name',
    'form.emailPlaceholder': 'dein@email.de',
    'form.messagePlaceholder': 'Schreibe deine Nachricht...',
    'form.noticeBefore': 'Mit * markierte Felder sind erforderlich.',
    'form.privacyLink': 'Datenschutzerklärung',
    'form.noticeAfter': 'gilt.',
    'form.submit': 'E-Mail vorbereiten',
    'form.mailSubjectPrefix': 'ARKEM - Nachricht von',
    'form.mailtoPrepared': 'Dein E-Mail-Programm sollte sich jetzt mit einer vorbereiteten Nachricht öffnen.',

    'footer.description': 'Ein mittelalterliches Singleplayer-Strategie-RPG über Festungsbau, Siedlungswachstum, Welterkundung und die Verteidigung deiner Leute.',
    'footer.navigate': 'Navigation',
    'footer.legal': 'Rechtliches',
    'footer.terms': 'AGB',
    'footer.privacy': 'Datenschutz',
    'footer.returns': 'Rückgabe & Widerruf',
    'footer.imprint': 'Impressum',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.made': 'Mit Handwerk und Sorgfalt von einem kleinen Indie-Team gemacht',
    'lightbox.aria': 'Bildanzeige',
    'lightbox.close': 'Bildanzeige schließen',

    'legal.backHome': 'Zurück zur Startseite',
    'legal.translationNotice': 'Vollständige Übersetzungen dieser Rechtsseite sind in Vorbereitung. Derzeit gilt die englische Fassung.',
    'legal.updated': 'Zuletzt aktualisiert: Juni 2026',
    'legal.privacy.title': 'Datenschutzerklärung',
    'legal.privacy.metaTitle': 'Datenschutzerklärung - ARKEM',
    'legal.privacy.metaDescription': 'ARKEM-Datenschutzerklärung - wie wir personenbezogene Daten verarbeiten.',
    'legal.terms.title': 'Allgemeine Geschäftsbedingungen',
    'legal.terms.metaTitle': 'AGB - ARKEM',
    'legal.terms.metaDescription': 'ARKEM-Geschäftsbedingungen für die Nutzung der Website und digitaler Produkte.',
    'legal.returns.title': 'Rückgabe & Widerruf',
    'legal.returns.metaTitle': 'Rückgabe & Widerruf - ARKEM',
    'legal.returns.metaDescription': 'ARKEM-Informationen zu Rückgabe und Widerruf bei digitalen Produkten.',
    'legal.imprint.title': 'Impressum',
    'legal.imprint.metaTitle': 'Impressum - ARKEM',
    'legal.imprint.metaDescription': 'Rechtliche Anbieterinformationen zu ARKEM.'
  }
};

const LANGUAGE_STORAGE_KEY = 'arkem-language';
const DEFAULT_LANGUAGE = 'en';
const OG_LOCALES = { en: 'en_US', pl: 'pl_PL', de: 'de_DE' };
let currentLanguage = DEFAULT_LANGUAGE;
let lastLightboxTrigger = null;

function getTranslation(key, lang = currentLanguage) {
  return translations[lang]?.[key] ?? translations[DEFAULT_LANGUAGE]?.[key] ?? '';
}

function setLanguage(lang) {
  const nextLanguage = translations[lang] ? lang : DEFAULT_LANGUAGE;
  currentLanguage = nextLanguage;

  document.documentElement.lang = nextLanguage;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getTranslation(element.dataset.i18n, nextLanguage);
    if (value) element.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = getTranslation(element.dataset.i18nHtml, nextLanguage);
    if (value) element.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const value = getTranslation(element.dataset.i18nPlaceholder, nextLanguage);
    if (value) element.setAttribute('placeholder', value);
  });

  document.querySelectorAll('[data-i18n-content]').forEach((element) => {
    const value = getTranslation(element.dataset.i18nContent, nextLanguage);
    if (value) element.setAttribute('content', value);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const value = getTranslation(element.dataset.i18nAriaLabel, nextLanguage);
    if (value) element.setAttribute('aria-label', value);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = getTranslation(element.dataset.i18nAlt, nextLanguage);
    if (value) element.setAttribute('alt', value);
  });

  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    const value = getTranslation(element.dataset.i18nTitle, nextLanguage);
    if (value) element.setAttribute('title', value);
  });

  document.querySelectorAll('.language-btn').forEach((button) => {
    const isActive = button.dataset.lang === nextLanguage;
    button.classList.toggle('active', isActive);
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', OG_LOCALES[nextLanguage] || OG_LOCALES.en);

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  } catch (error) {
    // Private browsing modes may block localStorage. The page still works without persistence.
  }
}

function getSavedLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) || DEFAULT_LANGUAGE;
  } catch (error) {
    return DEFAULT_LANGUAGE;
  }
}

// --- Current year ---
document.querySelectorAll('[data-current-year], #year').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// --- Language switcher ---
document.querySelectorAll('.language-btn').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setLanguage(getSavedLanguage());

// --- Nav scroll state and mobile menu ---
const nav = document.getElementById('nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

function setMobileMenu(open) {
  navToggle?.classList.toggle('open', open);
  navLinks?.classList.toggle('open', open);
  navToggle?.setAttribute('aria-expanded', String(open));
}

window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

navToggle?.addEventListener('click', () => {
  setMobileMenu(!navLinks?.classList.contains('open'));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMobileMenu(false));
});

// --- Active nav link on scroll ---
const sections = document.querySelectorAll('section[id]');
const sectionNavLinks = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  let current = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });

  sectionNavLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// --- Scroll reveal ---
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((element) => revealObserver.observe(element));
} else {
  revealEls.forEach((element) => element.classList.add('visible'));
}

// --- Lightbox ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(item) {
  const img = item.querySelector('img');
  if (!img || !lightbox || !lightboxImg) return;

  lastLightboxTrigger = item;
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox?.classList.contains('open')) return;

  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  lightboxImg?.removeAttribute('src');
  lastLightboxTrigger?.focus();
  lastLightboxTrigger = null;
}

document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => openLightbox(item));
  item.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      openLightbox(item);
    }
  });
});

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});

// --- Contact form (static / mailto fallback) ---
const form = document.getElementById('contact-form');
const successMsg = document.querySelector('.form-success');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const name = form.querySelector('[name="name"]').value.trim();
  const email = form.querySelector('[name="email"]').value.trim();
  const message = form.querySelector('[name="message"]').value.trim();

  const subject = encodeURIComponent(`${getTranslation('form.mailSubjectPrefix')} ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:info@arkem-game.com?subject=${subject}&body=${body}`;

  form.reset();
  if (successMsg) {
    successMsg.textContent = getTranslation('form.mailtoPrepared');
    successMsg.style.display = 'block';
    window.setTimeout(() => {
      successMsg.style.display = 'none';
    }, 5000);
  }
});

// --- Particle candles on hero (optional ambient) ---
const reduceMotionQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');

function spawnEmber() {
  const hero = document.getElementById('hero');
  if (!hero || window.innerWidth < 700 || reduceMotionQuery?.matches) return;

  const ember = document.createElement('span');
  ember.style.cssText = `
    position:absolute;
    width:2px; height:2px;
    border-radius:50%;
    background:rgba(212,160,23,0.7);
    pointer-events:none;
    left:${Math.random() * 100}%;
    bottom:10%;
    --ember-y:${200 + Math.random() * 200}px;
    --ember-x:${(Math.random() - 0.5) * 80}px;
    animation: emberFloat ${3 + Math.random() * 4}s ease-in forwards;
    z-index:3;
  `;
  hero.appendChild(ember);
  window.setTimeout(() => ember.remove(), 7000);
}

const emberCSS = document.createElement('style');
emberCSS.textContent = `
  @keyframes emberFloat {
    0%   { transform: translateY(0) scale(1); opacity: 0.7; }
    50%  { opacity: 0.9; }
    100% { transform: translateY(calc(-1 * var(--ember-y))) translateX(var(--ember-x)) scale(0); opacity: 0; }
  }
`;
document.head.appendChild(emberCSS);

if (!reduceMotionQuery?.matches) {
  window.setInterval(spawnEmber, 800);
}
