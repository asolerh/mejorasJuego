class ObjectCreator {
    constructor () {
    }

    createObjects (scene, map) {
        scene.objetos = map.getObjectLayer('objetos')['objects'];
        scene.setas = [];
        for(var i = 0; i < scene.objetos.length; ++i)
        {
            var obj = scene.objetos[i];
            if(obj.gid == 115) // en mi caso la seta
            {
                var seta = new Seta(scene,obj.x,obj.y);
                scene.setas.push(seta);
                scene.physics.add.overlap(seta, scene.player, scene.spriteHit,null,scene);
            }
        }
        scene.score = 1;
        scene.scoreText = scene.add.text(16, 16, 'PUNTOS: '+scene.score, { 
            fontSize: '20px', 
            fill: '#000', 
            fontFamily: 'verdana, arial, sans-serif' 
          });
    }
}