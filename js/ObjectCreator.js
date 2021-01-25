class ObjectCreator {
    constructor (scene, map) {
        this.scene = scene;
        this.map = map;
    }

    createObjects () {
        this.scene.objetos = this.map.getObjectLayer('objetos')['objects'];
        this.scene.setas = [];
        for(var i = 0; i < this.scene.objetos.length; ++i)
        {
            var obj = this.scene.objetos[i];
            if(obj.gid == 115) // en mi caso la seta
            {
                var seta = new Seta(this.scene,obj.x,obj.y);
                this.scene.setas.push(seta);
                this.scene.physics.add.overlap(seta, this.scene.player, this.scene.spriteHit,null,this.scene);
            }
        }
        this.scene.score = 1;
        this.scene.scoreText = this.scene.add.text(16, 16, 'PUNTOS: '+this.scene.score, { 
            fontSize: '20px', 
            fill: '#000', 
            fontFamily: 'verdana, arial, sans-serif' 
          });
    }
}