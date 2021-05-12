scene.onHitWall(SpriteKind.Food, function (sprite, location) {
    sprite.destroy(effects.bubbles, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.bubbles, 100)
})
let cibo: Sprite = null
game.splash("THE SHARKI", "")
pause(500)
game.splash("FEED THE SHARK")
effects.bubbles.startScreenEffect(500)
tiles.setTilemap(tilemap`level2`)
let squalo = sprites.create(img`
    .............fffff..............
    ............fdd66f..............
    ...........fdd66f...............
    ..........f88668f............fff
    ....ffffff888888ff.........ff66f
    ..ff66666666666668fff.....f666f.
    ff6666666668686666888ff..ff666f.
    f6866666ff6686866688888fff666f..
    f6661111ff1686866688888886668f..
    .f611111111666666888888888688f..
    ..f888338811666688888888fff668f.
    ...f81318111666888886d6f...f66f.
    ....f3381118666fdddddff.....f66f
    .....ff1111f6d66fddff........fff
    .......ffffff6d66ff.............
    .............fffff..............
    `, SpriteKind.Player)
controller.moveSprite(squalo, 150, 0)
squalo.setStayInScreen(true)
squalo.setPosition(80, 104)
info.setScore(0)
info.setLife(4)
game.onUpdateInterval(500, function () {
    cibo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . 4 5 4 4 . . . . . . 
        . . . . . 2 5 4 f 2 4 2 . . . . 
        . . . . 2 5 5 5 f f 4 2 2 . . . 
        . . . . 5 5 f 4 5 5 4 4 2 . . . 
        . . . . 2 5 f f 5 4 f 2 4 . . . 
        . . . . . 2 4 4 2 5 5 4 . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    cibo.setPosition(randint(0, 190), 0)
    cibo.setVelocity(0, 50)
})
