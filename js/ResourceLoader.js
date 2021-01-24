class ResourceLoader {
    constructor () {
    }

    loadResources (scene) {
        // El cargado de los recursos de imagenes quiza pueda añadirse directamente en
        // el constructor, en este caso lo añado en este metodo
        scene.load.image('tiles','res/Tileset.png');
        scene.load.tilemapTiledJSON('map','res/Map.json');
        scene.load.image('bg-1', 'res/sky.png');
        scene.load.image('sea', 'res/sea.png');
        scene.load.image('player', 'res/idle-1.png');
        //Phaser.Physics.Arcade.Sprite
        // https://gammafp.com/tool/atlas-packer/
        scene.load.atlas('sprites_jugador','res/player_anim/player_anim.png',
        'res/player_anim/player_anim_atlas.json');
        scene.load.spritesheet('tilesSprites','res/Tileset.png',
        { frameWidth: 32, frameHeight: 32 });
    }
}