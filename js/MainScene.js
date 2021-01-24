class MainScene extends Phaser.Scene
{
    preload()
    {
        this.resourceLoader = new ResourceLoader();
        this.resourceLoader.loadResources(this);
    }

    create()
    {
        var bg_1 = this.add.tileSprite(0, 0, windows.width*2, windows.height*2, 'bg-1');
        bg_1.fixedToCamera = true;
        //necesitamos un player
        this.player = new Player(this,50,100);
        var map = this.make.tilemap({ key: 'map' });
        var tiles = map.addTilesetImage('Plataformas', 'tiles');
        
        var layer2 = map.createLayer('Fondo', tiles, 0, 0);
        var layer = map.createLayer('Suelo', tiles, 0, 0);
        //enable collisions for every tile
        layer.setCollisionByExclusion(-1,true);
        this.physics.add.collider(this.player,layer);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0,0,map.widthInPixels,map.heightInPixels);

        this.objecCreator = new ObjectCreator();
        this.objecCreator.createObjects(this, map);
    }

    spriteHit (sprite1, sprite2) {

        sprite1.destroy();
 
    }

    update (time, delta)
    {
        this.player.update(time,delta);
    }
}