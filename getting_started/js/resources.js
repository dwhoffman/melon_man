game.resources = [
// **Title Screen:
     {name: "title_screen", type: "image", src: "data/img/gui/title_screen.png" },
// **Graphics:
//   Our level tileset
     {name: "area01_level_tiles", type: "image", src: "data/img/map/area01_level_tiles.png" },
//   The main player spritesheet
     {name: "gripe_run_right", type: "image", src: "data/img/sprite/gripe_run_right.png" },
//   The parallax background
     {name: "area01_bkg0", type: "image", src: "data/img/area01_bkg0.png" },
     { name: "area01_bkg1", type: "image", src: "data/img/area01_bkg1.png" },
//   The spinning coin spritesheet
     {name: "spinning_coin_gold", type: "image", src: "data/img/sprite/spinning_coin_gold.png" },
//   Our enemy entity
     {name: "wheelie_right", type: "image", src: "data/img/sprite/wheelie_right.png" },
//   Game font
     {name: "32x32_font", type: "image", src: "data/img/font/32x32_font.png" },
// **Maps:
//   Our level map
     {name: "area01", type: "tmx", src: "data/map/area01.tmx" },
     {name: "area02", type: "tmx", src: "data/map/area02.tmx" },
// **Background Music
     {name: "dst-inertexponent", type: "audio", src: "data/bgm/", channel: 1 },
// **Sound Effects
     {name: "cling", type: "audio", src: "data/sfx/", channel: 2 },
     { name: "stomp", type: "audio", src: "data/sfx/", channel: 1 },
     { name: "jump", type: "audio", src: "data/sfx/", channel: 1 }
];
