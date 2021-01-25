class MainScene extends Phaser.Scene
{
    preload()
    {
        this.resourceLoader = new ResourceLoader(this);
        this.resourceLoader.loadResources();
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

        this.objecCreator = new ObjectCreator(this, map);
        this.objecCreator.createObjects();

    }
    
    spriteHit (sprite1, sprite2) {
        
        sprite1.destroy();
        
    }
    
    update (time, delta)
    {
        this.player.update(time,delta);
        // Comprobamos si la y del jugador es mayor  a 420 (final del mapa)
        if(this.player.y > 420) {
            /* Hay dos opciones añadir una pantalla de muerte o de reinicio o directamente reiniciar
             en este caso reiniciaremos directamente al llamar al metodo restartLevel hacemos una llamadqa
             al metodo create que vuelve a poner todos los elementos de forma inicial
             */

            this.restartLevel()
        }
        if(this.player.x <= 0) {
            /*
            En este caso añadimos un "muro" estableciendo la posicion del jugador a 0 siempre que esta sea
            0 o menor que 0 evitando asi que se mueva
            */
            this.player.x = 0
        }
    }

    restartLevel () {
        this.create()
    }
}