const memories = [
    {
        text: "De dag van aankomst in Helsinki! Ik weet nog hoe nerveus ik was, maar gelukkig waren wij er samen!",
        img: "images/Helsinki1.jpg"
    },
    {
        text: "Onderweg naar Helsinki met een mooie zonsopgang. Mijn god, wat moesten we vroeg op",
        img: "images/Brussel1.jpg"
    },
    {
        text: "Een hele mooie dag in Barcelona, met een foto bij de Sagrada Familia. Het duurde even voor we de juiste foto hadden! Weet je nog dat je onbewust had afgedingt voor een shotglaasje?",
        img: "images/SagradaFamilia.jpg"
    },
    {
        text: "Toen je meedeed aan de turn-competitie, en goud won! Ik was (en ben) zo ongelooflijk trots! ",
        img: "images/MirtheCompetitie.jpg"
    },
    {
        text: "Het moment waarop je daadwerkelijk de medaille kreeg voor de turn-competitie. Het was nog even de vraag of alles goed geregeld werd, omdat er gezeik was met je scores. Ik weet nog hoe gespannen je de weken ervoor was. Maar je hebt het toch gewoon gedaan!",
        img: "images/MirtheGoud.jpg"
    },
    {
        text: "De bizar kleine lift in de airbnb in Helsinki. Dat was nog een gedoe met de koffers!",
        img: "images/HelsinkiLift.jpg"
    },
    {
        text: "Een willekeurige foto op de piste, waarbij je mij weer eens probeerde te prikken met je ski-stok ;)",
        img: "images/MirthePrik.jpg"
    },
    {
        text: "Ik vond het zo leuk om samen met jou op ski-vakantie te gaan, en ik was zo trots om te zien hoe goed het je afging (ookal is deze foto van de tweede vakantie)! Zelfs de pittige rode gingen goed!",
        img: "images/TerrasPiste.jpg"
    },
    {
        text: "Nieuwjaar 2024. Nieuwjaar blijft een speciaal moment, vooral om het samen met jou te vieren. Ik hoop dat we er nog veel meer samen kunnen vieren!",
        img: "images/Nieuwjaar2024.jpg"
    },
    {
        text: "We hebben in Praag echt lekker ontbeten in dat tentje wat jij had gevonden, wat later heel populair bleek te zijn",
        img: "images/OntbijtPraag.jpg"
    },
    {
        text: "Uiteraard kon een foto op de karelbrug in praag ook niet ontbreken. Dit zal vast onderweg terug zijn naar de klok, die we dan weer mistte",
        img: "images/PraagBrug.jpg"
    },
    {
        text: "Met de groep carnaval 2023, volgensmij op de plek waar Tim zijn telefoon kwijt raakte onder de vloer. Carnaval met jou blijft 1 van mijn favoriete herinneringen",
        img: "images/Carnaval2023.jpg"
    },
    {
        text: "Een van mijn (tot nu toe) favoriete fotos in Helsinki. Ik voel me oprecht goed als ik je hand vast hou. En dit was voor mij echt een bijzonder moment.",
        img: "images/HandHelsinki.jpg"
    },
    {
        text: "Oh, dit blijft een van mijn favoriete momenten met jou. Samen in die cocktail-bar. We hadden echt geluk dat er mensen niet kwamen opdagen, waardoor we niet 2 maanden van te voren hoefde te reserveren. En wow, wat waren de cocktails goed!",
        img: "images/Cocktailbar.jpg"
    },
    {
        text: "De foto bij een kathedraal in Praag. Ik dacht even dat het de Depressieve kerk was, maar dit was toch een andere, al ziet deze er ook niet heel gezellig uit.",
        img: "images/NietDepressieveKerk.jpg"
    },
    {
        text: "Een willekeurige foto van jou met Bobbie, die ik gewoon heel lief vond",
        img: "images/RandomBobbie.jpg"
    },
    {
        text: "Met de hele groep van Klimrijk naar de \"kermis\", dat was echt heel leuk! Weet je ook nog dat er meerdere keren met je geflirt werd? En terecht.",
        img: "images/ZeelstKermis.jpg"
    },
    {
        text: "De random strandbal die we onderweg terug van de kermis hadden gevonden. Hij blijft heel mooi. Oh, en geen zorgen, hij leeft nog, hij moest alleen weg uit de keuken, dus ik heb hem leeggeperst.",
        img: "images/MirtheStrandbal.jpg"
    },
    {
        text: "Met mijn familie in de dierentuin. Misschien niet 1 van jouw favoriete herrineringen, en ook niet die van mij... *AHUM verstandskies* maar ik vond het toch een leuke foto",
        img: "images/Dierentuin2024.jpg"
    },
    {
        text: "Onze laatste avond in Pineda de Mar. Eerst bij dat italiaanse Restaurant, waar de ober zo een nieuwe tafel voor ons tevoorschijn toverde, en daarna samen aan het strand het vuurwerk bekijken... Wauw, wat een avond was dat",
        img: "images/SantJuan.jpg"
    },
    {
        text: "Ik weet niet meer of we hem in parijs hadden gezien, maar in ieder geval wel in Barcelona, de Arc de Triomph, ofzoiets",
        img: "images/FakeArcDeTriomph.jpg"
    },
    {
        text: "Avond 2 in Pineda de Mar, waar ik het restaurant had uitgezocht, helaas toch behoorlijk overpriced, maar het was wel lekker. Wat had je trouwens een prachtige jurk aan!",
        img: "images/PinedaDag1.jpg"
    },
    {
        text: "De sportdag in Tilburg met Saltare, wat we toen echt bizar goed deden. Ik blijf onze outfits ook echt mooi vinden",
        img: "images/SportdagTilburg.jpg"
    },
    {
        text: "Een hele mooie muur in Praag, dus daar moesten we even een fotootje bij maken",
        img: "images/MooieMuur.jpg"
    },
    {
        text: "blub",
        img: "images/vis.jpg"
    },
    {
        text: "Dit jaar was het weer een hele leuke Carnaval! Behalve dan het gezeik met Tom en Juulke, maar ach, wij hadden wel een hele leuke carnaval",
        img: "images/Carnaval2024.jpg"
    },
    {
        text: "De spontane afterparty na de laatste avond van Carnaval, met random vrienden van Tom",
        img: "images/Afterparty.jpg"
    },
    {
        text: "Een van de kunstwerken van Glow 2023, waar jij toevallig precies in paste. Hiervoor hadden we bij la Cubanita gegeten, want het was cocktailnight!",
        img: "images/Glow2023.jpg"
    },
    {
        text: "De eerste dag van Disney. Dit vond ik misschien wel het leukste weekend ooit met jou. Het was zo bijzonder om samen met jou daar door het park te lopen!",
        img: "images/DisneyDag1.jpg"
    },
    {
        text: "Samen in de autootjes in Disneyland. En ik moet heel eerlijk zeggen, jij was er beter in",
        img: "images/DisneyAutos.jpg"
    },
    {
        text: "Op de foto met Minnie Mouse, gelukkig stond hier niet zon lange rij",
        img: "images/MinnieMouse.jpg"
    },
    {
        text: "Op de foto met Goofy, ging iets minder soepel dan verwacht, maar ik vind de foto zooo leuk!",
        img: "images/Goofy.jpg"
    },
    {
        text: "Een foto bovenop de eiffeltoren op onze anniversary. Ik ben zo blij dat we toen toch naar boven zijn gegaan. Het was een flinke klim, maar wel heel leuk!",
        img: "images/Eiffeltoren.jpg"
    },
    {
        text: "In de peter pan attractie, waar we speciaal vroeg voor zijn opgestaan. Ik weet nog hoe cool we ons voelden toen we langs iedereen heen het park in konden door magic hour",
        img: "images/PeterPan.jpg"
    },
    {
        text: "De cars attractie in Disneyland, waar ik stiekem heel graag in wilde, maar het valt niet te ontkennen dat hij best cool was.",
        img: "images/DisneyCars.jpg"
    },
    {
        text: "Misschien voor jou wel de belangrijkste reden om naar Disneyland te gaan, de Avengers Campus. En wow, de droneshow savonds was echt geweldig",
        img: "images/AvengersCampus.jpg"
        
    },
    {
        text: "Ik vond dit gewoon een hele leuke foto van jou in Disney",
        img: "images/MirtheToystory.jpg"
    },
    
    {
        text: "Dit is wel mijn mooiste ervaring met jou, en oh my god, wat een ervaring was dit. Ik ben nog steeds heel dankbaar voor dit cadeau",
        img: "images/Duiken.jpg"
    },
    {
        text: "Een foto op dat dakterras op Kreta, met heerlijke Wijn en een heel mooi uitzicht. Was dit waar het eten minder was, of was dat ergens anders?",
        img: "images/Dakterras.jpg"
    },
    {
        text: "Een hele leuke foto van jou in dat plaatsje waar we toen op de dagtrip gestopt zijn, in dat hele schattige steegje met echt heel goed eten.",
        img: "images/Dagtrip.jpg"
    },
    {
        text: "Samen schildpadden spotten op een waterfiets, ze waren echt superschattig! Oh, en de minieenden ofzoiets, die waren er ook",
        img: "images/Schildpaddentrip.jpg"
    },
    {
        text: "Samen naar Harry Styles. Helaas heb ik geen foto van ons met zijn 2en daar, maar dit was het publiek in ieder geval ;) Hij wist er wel echt een show van te maken!",
        img: "images/HarryStyles.jpg"
    },
    {
        text: "Bij batavialand. Jij was wel echt beter in het weven met dat ding",
        img: "images/Weeftouw.jpg"
    },
    {
        text: "Samen naar Dean Lewis, waar ik je een t-shirt als vervroegd verjaardagscadeautje kon geven. Maar wat was het een gave show! En toen was je op de fiets jarig",
        img: "images/DeanLewis.jpg"
    },
    {
        text: "Nog een leuke foto die ik tegen kwam van Carnaval 2023! Met uiteraard de vishoed die je voor mij gekocht hebt",
        img: "images/Carnaval2023-2.jpg"
    },
    {
        text: "In het bizar kleine appartementje waar we in zaten op onze eerste skivakantie samen. Maar ik vond het ZO leuk dat je mee ging! En volgensmij is iedereen nogsteeds verbaasd over hoe snel je het onder de knie had!",
        img: "images/Skivakantie2023.jpg"
    },
    {
        text: "Samen in de cabinelift nadat we helemaal naar beneden in het dal hadden geskied. ",
        img: "images/Skilift2023.jpg"
    },
    {
        text: "Die virtual reality experience was ook wel heel bijzonder. Ook mooi hoe jouw character in het spel altijd gebukt ging en die van Jochem op zijn tenen stond",
        img: "images/EpicVR.jpg"
    },
    {
        text: "Samen naar toverland, waarna we de vuurwerkshow bekeken naast de motortjes. Was dit ook met halloween?",
        img: "images/Toverland1.jpg"
    },
    {
        text: "Een hele random BeReal gemaakt in de badkamer. Geen idee waar en wanneer, maar ik vond hem wel leuk",
        img: "images/RandomBeReal.jpg"
    },
    {
        text: "Samen in Dublin, op de klif tijdens de wandeling. Het uitzicht was echt mooi! Weet je ook nog dat we die kat toen op de terugweg tegenkwamen?",
        img: "images/DublinKlif.jpg"
    },
    {
        text: "Ik vond dit zo'n lieve foto, dus ik moest hem hier wel tussen zetten!",
        img: "images/Bobbie2.jpg"
    },
    {
        text: "Nog een leuke foto van pinkpop!",
        img: "images/Pinkpop2.jpg"
    },
    {
        text: "Een foto bij een random klok in Dublin. Ik weet eigenlijk niet echt meer waar",
        img: "images/RandomDublin.jpg"
    },
    {
        text: "Het resultaat van de fotoshoot die we in Dublin Castle hadden gehad, want ik was niet heel goed in fotos maken. Maar ik vind deze best goed gelukt",
        img: "images/DublinCastle.jpg"
    },
    {
        text: "Nog een hele leuke foto van Pinkpop!",
        img: "images/PinkpopGroep.jpg"
    },
    {
        text: "Deze jurk blijft je echt heel goed staan. En je zier er hier sowieso echt prachtig uit!",
        img: "images/Gala1.jpg"
    },
    {
        text: "Bobbie snapte de camera niet helemaal denk ik",
        img: "images/Videocall.jpg"
    },
    {
        text: "Samen bij het vliegtuig voor onze eerste trip, die naar Dublin",
        img: "images/eersteVlucht.jpg"
    },
    {
        text: "In de Disney Store in Dublin, Ik heb de foto van de hulk er maar niet in gedaan",
        img: "images/Marvelstore.jpg"
    },
    {
        text: "Deze foto is gemaakt op de dag dat we er beiden achter kwamen dat we geslaagd waren!",
        img: "images/Zwoeleblik.jpg"
    },
    {
        text: "De pinguin in het holletje, dit was op onze half-jaar jubileum date naar de dierentuin",
        img: "images/Pinguin.jpg"
    },
    {
        text: "Onze aller eerste carnaval samen. Volgensmij had ik je vastgemaakt met handboeien aan de vuilnisbak ",
        img: "images/EersteCarnaval.jpg"
    },
    {
        text: "Samen in de Joris en de Draak tijdens corona",
        img: "images/Efteling1.jpg"
    },
    {
        text: "Mijn valentijnscadeautje toen ik in de leerlingenraad zat.",
        img: "images/ValentijnCadeau.jpg"
    },
    {
        text: "Onze eerste oud en nieuw samen, met de fles Ice die ik voor kerst had gekregen. Toen dronk ik nog niet veel anders",
        img: "images/EersteOudEnNieuw.jpg"
    },
    {
        text: "Toen we de avondklok konden omzeilen door met Inca te gaan lopen, en het daardoor heerlijk rustig was op straat.",
        img: "images/Hovenring.jpg"
    },
    {
        text: "Mijn oma die ook perse een foto van ons wilde maken met kerst, maar het is een beetje een close-up geworden",
        img: "images/OmaCloseup.jpg"
    },
    {
        text: "De toetjes die we samen hebben gemaakt voor de kerst bij jouw familie. Ik weet nog dat ik sad was omdat ik ze niet 'af' kon zien.",
        img: "images/OnzeToetjes.jpg"
    },
    {
        text: "Een foto samen tijdens onze eerste kerst bij jou. Volgensmij rond het moment dat we de cadeautjes deden",
        img: "images/Kerst.jpg"
    },
    {
        text: "Helaas is het niet meer mijn profielfoto op whatsapp, maar het blijft een legendarische edit",
        img: "images/TijmenBRRRR.jpg"
    },
    {
        text: "Toen we wafels gingen bakken, en we als experiment daarna een pannenkoek-mickeymouse-wafel maakten",
        img: "images/MickeyMouseWafel.jpg"
    },
    {
        text: "Toen we in toverland nog vlak voor sluitingstijd in de rij gingen staan voor de troy, en vervolgens keihard zijn natgeregend",
        img: "images/NaToverland.jpg"
    },
    {
        text: "Nog zo'n hele schattige foto van bobbie",
        img: "images/BobbieDeken.jpg"
    },
    {
        text: "De kerstkoekjes die we gebakken hebben. Ze zien er heel... interessant? uit",
        img: "images/KerstKoekjes.jpg"
    },
    {
        text: "Het Ed Sheeran koekje was gesneuveld, dus nu is het Dead Sheeran",
        img: "images/DeadSheeran.jpg"
    },
    {
        text: "Toen we samen in slaap vielen op de videocall op whatsapp",
        img: "images/SleepCall2.jpg"
    },
    {
        text: "Ham",
        img: "images/Ham.jpg"
    },
    {
        text: "Toen we samen brownies gingen bakken",
        img: "images/BrowniesBakken.jpg"
    },
    {
        text: "Toen we samen gingen schaatsen. Jij was er wel een behoorlijk stuk beter in, maar het was wel heel leuk!",
        img: "images/Schaatsen.jpg"
    },
    {
        text: "Omg, deze foto blijft echt geweldig in de achtbaan in toverland",
        img: "images/Toverland.jpg"
    },
    {
        text: "Toen we erachter kwamen dat je tand oplicht in blacklight",
        img: "images/Gloeitand.jpg"
    },
    {
        text: "Op de foto met de clowns in toverland",
        img: "images/ToverlandHalloween.jpg"
    },
    {
        text: "Toen we blackstories via videobellen probeerde te spelen, alleen mijn antwoorden waren flut volgensmij",
        img: "images/BlackStories.jpg"
    },
    {
        text: "Nog meer carnaval, maar deze keer weer een HAM",
        img: "images/NogMeerCarnaval.jpg"
    },
    {
        text: "De vouwfiets waarmee ik toen aan het kloten was onderweg naar jou. En volgensmij werd ik uitgelachen door iemand die jij kende",
        img: "images/Vouwfiets.jpg"
    },
    {
        text: "Dit was direct na onze eerste date, toen jouw moeder mij afzette op het station, omdat we mcdonalds bij jou thuis hadden gegeten, en ik anders niet meer thuis kwam",
        img: "images/NaEersteDate.jpg"
    },
    {
        text: "Nog een foto van onze eerste date, we zijn wel echt veranderd sindsdien",
        img: "images/EersteDate.jpg"
    },
    {
        text: "Onze outfits voor jouw K3 Feestje",
        img: "images/k3Feest.jpg"
    },
    {
        text: "Toen ik perse op de foto wilde met de mega teddybeer in praag",
        img: "images/TeddyPraag.jpg"
    },
    {
        text: "Samen in de AirBnB in dublin!",
        img: "images/AirbnbDublin.jpg"
    },
    {
        text: "Toen jullie mij af hadden gezet op het station toen we naar de kermis gingen. We zijn die week like 3 keer naar de kermis geweest.",
        img: "images/EersteWeek.jpg"
    },
    {
        text: "Samen bij Coldplay, Wauw dat was ook echt een geweldig concert!",
        img: "images/Coldplay.jpg"
    },
    {
        text: "Toen we aan het kloten waren met die foto AI bewerker, en fotos verstoptten in kunst",
        img: "images/DreamAI.jpg"
    },
    {
        text: "De groepsfoto van de eerste Oud en Nieuw samen. Ik heb toen echt niks gewonnen bij het cadeauspel, maar volgensmij kreeg ik van jou een troostprijsje toen",
        img: "images/OudEnNieuw.jpg"
    },
    {
        text: "Mijn story na onze eerste date samen... En nu 3 jaar verder, ongelooflijk. Oh en negeer het tweede stuk.",
        img: "images/EersteDateStory.jpg"
    },
    {
        text: "Toen we bij jou thuis zaten om McDonalds op te eten. Volgensmij was dit een reactie op Steven die vroeg hoe mijn date ging",
        img: "images/EersteDateThuis.jpg"
    },
    {
        text: "Deze foto was ook in de bioscoop in onze eerste date. Wat was het heerlijk dat we de bioscoop voor onszelf hadden. Nogsteeds geen idee waar de film over ging",
        img: "images/EersteDateBioscoop.jpg"
    },
    {
        text: "Onze aller eerste foto met zijn 2en, aan het begin van onze date",
        img: "images/AllerEersteFotoSamen.jpg"
    },
    {
        text: "De avond dat we officieel werden, en ik te bang was om je te vragen, dus jij het maar deed. Wat ben ik blij dat ik jou heb... You are amazing! I love you <3",
        img: "images/Officieel.jpg"
    }

];
let currentMemoryIndex = 0;  // Start at the first memory

// Function to display a random memory
function showMemory() {
    const randomIndex = Math.floor(Math.random() * memories.length);  // Get random index
    currentMemoryIndex = randomIndex;  // Update current index
    displayMemory(currentMemoryIndex);  // Display the memory
}

// Function to display a memory based on user input
function selectMemory() {
    const memoryInput = document.getElementById("memory-number").value;  // Get the input value
    const memoryIndex = parseInt(memoryInput) - 1;  // Convert to zero-based index

    // Validate the input number is within range
    if (memoryIndex >= 0 && memoryIndex < memories.length) {
        currentMemoryIndex = memoryIndex;  // Update current index
        displayMemory(currentMemoryIndex);  // Display the memory
    } else {
        alert("Voer een geldig nummer in tussen 1 en " + memories.length);  // Invalid input
    }
}

// Function to display the next memory
function nextMemory() {
    if (currentMemoryIndex < memories.length - 1) {  // Check if not at the last memory
        currentMemoryIndex++;  // Move to the next memory
        displayMemory(currentMemoryIndex);  // Display the next memory
    }
}

// Function to display the previous memory
function previousMemory() {
    if (currentMemoryIndex > 0) {  // Check if not at the first memory
        currentMemoryIndex--;  // Move to the previous memory
        displayMemory(currentMemoryIndex);  // Display the previous memory
    }
}

// Function to display a memory and update the buttons
function displayMemory(memoryIndex) {
    const memory = memories[memoryIndex];  // Get the memory
    const memoryText = document.getElementById("memory-text");
    const memoryImage = document.getElementById("memory-image");
    const totalMemoriesDisp = document.getElementById("total-memories");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    memoryText.textContent = memory.text;  // Set the memory text
    memoryImage.src = memory.img;          // Set the memory image
    memoryImage.style.display = "block";   // Ensure the image is visible

    // Display the current memory index / total memories
    totalMemoriesDisp.textContent = `${memoryIndex + 1} / ${memories.length}`;

    // Enable/Disable buttons based on current index
    prevBtn.disabled = (memoryIndex === 0);  // Disable "Previous" if at the first memory
    nextBtn.disabled = (memoryIndex === memories.length - 1);  // Disable "Next" if at the last memory
}

// Initialize the page by displaying the first memory and setting up the buttons
window.onload = function() {
    displayMemory(currentMemoryIndex);
};
function openFullScreen() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgModal");
    const memoryImage = document.getElementById("memory-image");

    modal.style.display = "block";
    modalImg.src = memoryImage.src;  // Set the modal image source to the current memory image
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
