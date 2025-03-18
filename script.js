const runes = [
    {
        name: "Gebo",
        meaning: [
            `The energies of Gebo speak of balance and harmony. You are being invited to focus on your relationships, whether personal or professional. The gifts you give and receive hold significant meaning at this moment. This is a time of partnership, where mutual respect and understanding will pave the way for future success. Take care to give freely but also accept with an open heart. A gift, either material or spiritual, is coming your way—be open to the blessings that are arriving. In all things, find balance between giving and receiving.`
        ]
    },
    {
        name: "Wunjo",
        meaning: [
           `The energy of Wunjo brings a wave of joy and celebration into your life. This is a time to embrace the positive connections and harmonious moments around you. The joy you seek is already within your reach, and by focusing on gratitude, you will find deeper fulfillment. Look for opportunities to share happiness with others, as your light will illuminate paths for both you and those you care about. Trust that good things are coming your way, and take time to celebrate the blessings you already have. Harmony and peace are yours to embrace.

`
        ]
    },
    {
        name: "Hagalaz",
        meaning: [
            `Hagalaz brings a message of transformation through upheaval. While this may seem like a time of turmoil, know that it is the precursor to growth and renewal. Forces beyond your control may stir things up, but trust that these challenges are clearing the way for something better. The storm may feel harsh, but it is necessary to break down the old and make room for new opportunities. Embrace change, for it is leading you toward a more authentic path. Stay resilient and patient; after the storm, calm and clarity will follow.`
        ]
    },
    {
        name: "Nauthiz",
        meaning: [
            `The energy of Nauthiz speaks to the necessity of perseverance in the face of hardship. You may be feeling a sense of restriction or difficulty in your current circumstances, but this is a time to dig deep and summon your inner strength. While things may not flow easily right now, know that your endurance will pay off in the long run. Challenges are tests, not barriers, and through patience and resilience, you will find the wisdom and growth that come from overcoming adversity. Trust that every challenge is preparing you for greater things ahead. Stay grounded, stay focused, and the path forward will reveal itself in due time.`
        ]
    },
    {
        name: "Isa",
        meaning: [
            `Isa brings a message of pause and reflection. You may find yourself at a standstill or facing a period of stagnation, but this is not a time of failure. Rather, it is a moment to find stillness within. Just as ice forms slowly and steadily, so too are important developments taking place beneath the surface. Use this time for introspection, to clear your mind and gain clarity. Resistance is futile against the icy forces around you, so embrace the quiet and trust that it will lead to new insights and growth. After this pause, movement will come when the time is right.`
        ]
    },
    {
        name: "Jera",
        meaning: [
           `The energies of Jera signal a time of reaping what you have sown. This rune brings a message of fruitful cycles—your efforts, patience, and hard work are coming to fruition. Whether in your personal or professional life, this is a period of reward and accomplishment. The seeds you’ve planted in the past are now bearing fruit, and the energy of growth and success surrounds you. Trust the natural flow of time, for the rewards you receive are deserved. Enjoy the harvest and know that this success is part of a larger, ongoing cycle—what you give will continue to come back to you in new forms.`
        ]
    },
    {
        name: "Eihwaz",
        meaning: [
            `Eihwaz brings a message of resilience and transformation. You are in a period of deep change, where old ways are being tested and transformed. Like the yew tree, which stands strong through the harshest seasons, you too are being called to embody strength and endurance. The path ahead may feel challenging, but this rune promises protection and guidance through the transformation. Trust in your ability to navigate the difficult transitions ahead—whether they are emotional, spiritual, or material. Eihwaz assures you that you are shielded as you face these trials and that the changes unfolding will lead to a stronger, more aligned version of yourself.`
        ]
    },
    {
        name: "Perthro",
        meaning: [
            `Perthro brings a message of the unknown and the unseen. This is a time to embrace mystery, as hidden forces are at play in your life. There may be elements of fate or chance influencing your path, and while you may not have full clarity, trust that everything is unfolding as it should. Perthro speaks to the need for patience, as the answers you seek will reveal themselves in due time. There is also a call to trust your intuition, as it will guide you through the unknown. This is a time to embrace the magic of life’s mysteries and to allow the dice of fate to roll as they will. What is hidden will soon come to light.`
        ]
    },
    {
        name: "Algiz",
        meaning: [
           `Algiz brings a powerful message of protection and spiritual strength. The energies of this rune surround you with a shield of defense, guarding you from harm and guiding you toward safety. Trust in your inner power, as it is becoming more aligned with your higher self. Now is the time to strengthen your boundaries, whether they are physical, emotional, or spiritual. You are being called to embrace your own protection, not only from external forces but also from within, as you deepen your connection to the divine. This is a time of awakening—trust your instincts and know that you are being supported by unseen forces.`
        ]
    }, {
        name: "Sowilo",
        meaning: [
            `Sowilo brings a radiant message of success, vitality, and clarity. Like the sun rising after a dark night, you are entering a period of illumination and achievement. The light of Sowilo shines on your path, guiding you toward your goals with powerful energy. Now is the time to embrace your personal strength and confidence, for success is within your reach. Trust in the positive forces surrounding you, as this rune promises growth, victory, and the fulfillment of your desires. Embrace this time of optimism and harness the energy of the sun to fuel your endeavors. The warmth and brightness of Sowilo will carry you through any obstacles.

`
        ]
    },
    {
        name: "Tiwaz",
        meaning: [
            `Tiwaz brings the energy of justice and honor into your life. This is a time when integrity and leadership are key. You may find yourself in a position where making a difficult decision is necessary, but trust that doing what is right will lead to greater balance. Tiwaz encourages you to take a stand with confidence and act in alignment with your highest principles. Though the path may require sacrifice or courage, know that your actions will bring lasting success and the respect of those around you. The cosmic forces are with you, supporting your choices.`
        ]
    },
    {
        name: "Ehwaz",
        meaning: [
           `Ehwaz brings a time of forward movement and progress. You are being called to focus on your partnerships, whether in personal or professional realms, as collaboration and mutual trust will fuel your growth. This rune signals the need for harmonious progress—your efforts are aligned, and through teamwork and communication, success will unfold. Ehwaz also brings the energy of momentum, so expect things to move quickly once you embrace the changes ahead. Trust in the journey, for it is leading you to new and fruitful horizons.`
        ]
    },
    {
        name: "Mannaz",
        meaning: [
            `Mannaz speaks of connection to the self and to others. This rune invites you to explore your identity in relation to the collective, reminding you that you are part of something greater than yourself. The balance between individuality and cooperation will bring the greatest rewards now. Pay attention to the people around you—there may be important lessons in how you interact and the support you offer to others. Through reflection and open communication, you will find the strength to align your personal goals with the needs of those around you, creating harmony and unity.`
        ]
    },
    {
        name: "Laguz",
        meaning: [
            `Laguz brings the energy of intuition, flow, and emotional depth. Now is a time to trust your inner wisdom and allow things to unfold naturally. Just as water flows around obstacles, this rune advises you to go with the current and allow life’s rhythm to guide you. This may be a period of emotional growth or discovery, where hidden truths come to light. Laguz encourages you to be in tune with your feelings and to trust your instincts. The flow of life is carrying you toward something important, and by remaining open and adaptable, you will find clarity.

`
        ]
    },
    {
        name: "Ingwaz",
        meaning: [
            `Ingwaz signals a time of inner growth and new beginnings. This is a moment when you are called to focus on creating fertile ground for your ideas and intentions. Like the seed that is quietly preparing to sprout, your efforts are aligning to bring new opportunities into your life. Patience is key, as the foundations you are laying now will bring great rewards later. Ingwaz asks you to trust in the process of growth, knowing that what you nurture now will bloom in time. Embrace this cycle of renewal and welcome the fresh energy that is coming your way.

`
        ]
    },
    {
        name: "Dagaz",
        meaning: [
            `Dagaz brings the energy of transformation and awakening. Like the dawn that follows the night, you are entering a phase of clarity and revelation. This is a time when the darkness of uncertainty gives way to new light and possibilities. Embrace the changes that are unfolding, as they are bringing you closer to your true path. Dagaz invites you to leave behind what no longer serves you and step forward into a brighter future. The energy of this rune is one of hope, renewal, and profound inner transformation. Trust that the awakening you are experiencing will lead to greater freedom and understanding.

`
        ]
    },
    {
        name: "Berkano",
        meaning: [
            `The Berkano rune brings a message of renewal, growth, and nurturing energy. This is a time to embrace new beginnings and allow yourself to be reborn into a more authentic version of yourself. The energies surrounding you are gentle and protective, helping you grow and develop in harmony with nature. It is also a time for emotional healing, particularly within your personal relationships. The energy of Berkano supports you as you give and receive love, fostering a stronger sense of community and connection. Trust in the natural cycles of life, knowing that your personal growth will unfold at its own pace.`
        ]
    },
    {
        name: "Othala",
        meaning: [
            `Othala brings the energy of heritage, family, and ancestral wisdom. This is a time to connect with your roots, whether through exploring your family history or through deepening your sense of place in the world. The rune speaks to the idea of inheritance, both material and spiritual, and encourages you to protect and preserve the things that matter most to you. It is also a reminder to value the knowledge passed down through generations, for it holds keys to your own growth. If you are feeling disconnected, Othala calls you to find stability through your heritage, bringing a sense of security and belonging.`
        ]
    }
    // Add more runes here
];



document.getElementById("drawRune").addEventListener("click", function() {
    // Select a random rune from the array
    const rune = runes[Math.floor(Math.random() * runes.length)];
    const fortune = rune.meaning;

    // Update the rune display with the selected rune's details
    document.getElementById("runeDisplay").innerHTML = `
        <h2>${rune.name}</h2>
        <img class="rune-img" src="./images/${rune.name.toLowerCase()}.jpg" alt="${rune.name} Rune" width="100">
        <p>${fortune}</p>
    `;

    // Scroll smoothly to the rune display section
    document.getElementById("runeDisplay").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
