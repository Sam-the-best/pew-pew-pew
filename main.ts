controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    milk_left = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 1 1 1 
        . . . . . . . . . . . 1 1 1 1 1 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . . . . . 1 1 1 1 1 1 1 1 1 1 1 
        . . . . . . . . 1 1 1 1 1 1 1 1 
        . . . . . . . . . . . . . 1 1 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -1000, 0)
    music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    milk_right = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 1 1 . . . . . . . . . . . . . 
        1 1 1 1 1 . . . . . . . . . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        1 1 1 1 1 1 1 1 1 1 1 . . . . . 
        1 1 1 1 1 1 1 1 . . . . . . . . 
        1 1 1 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 1000, 0)
    music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        c d e e d d d d e e d d f . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e b d c . f f 
        . f d d d d e e e f f c . f e f 
        . f f f f f f e e e e f . f e f 
        . f f f f e e e e e e e f f e f 
        f d d f d d f e f e e e e f f . 
        f d b f d b f e f e e e e f . . 
        f f f f f f f f f f f f e f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f f . . . . 
        . c d d d d d d e e d d f . . . 
        . c d f d d f d e e b d c . . . 
        c d d f d d f d e e b d c . f f 
        c d e e d d d d e e f c . f e f 
        c d d d d c d e e e f . . f e f 
        . f c c c d e e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . f f e f e e f e e e e f . . 
        . f e f f e e f f f e e e f . . 
        f d d b d d c f f f f f f b f . 
        f d d c d d d f . . f c d d f . 
        . f f f f f f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f f f . . . . 
        . . f d d d e e e e d d f . . . 
        . c d d d d d e e e b d c . . . 
        . c d d d d d d e e b d c . . . 
        c d d f d d f d e e f c . f f . 
        c d d f d d f d e e f . . f e f 
        c d e e d d d d e e f . . f e f 
        . f d d d c d e e f f . . f e f 
        . . f f f d e e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . . . f f e e e e e b f f . . 
        . . . f e f f e e c d d f f . . 
        . . f d d b d d c f f f . . . . 
        . . f d d c d d d f f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f e e d f d d f d c . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . f f e e e d d d d f . . 
        . . . f d d e e d d d d d d c . 
        . . . c d b e e d f d d f d c . 
        f f . c d b e e d f d d f d d c 
        f e f . c f e e d d d d e e d c 
        f e f . . f e e e d c d d d d c 
        f e f . . f f e e e d c c c f . 
        f e f . f e e e e f f f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f e e e e f e e f e f f . . 
        . . f e e e f f f e e f f e f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f e e e e e f . . . 
        . . . f d d e e e e d d d f . . 
        . . . c d b e e e d d d d d c . 
        . . . c d b e e d d d d d d c . 
        . f f . c f e e d f d d f d d c 
        f e f . . f e e d f d d f d d c 
        f e f . . f e e d d d d e e d c 
        f e f . . f f e e d c d d d f . 
        f e f . f e e e e e d f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f f b e e e e e f f . . . . 
        . . f f d d c e e f f e f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `],
    100,
    true
    )
})
info.onLifeZero(function () {
    music.play(music.createSong(assets.song`Good Song`), music.PlaybackMode.UntilDone)
    music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 9999, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.fire, 5000)
    for (let index = 0; index < Spawn_Count; index++) {
        snake = sprites.create(img`
            . . . . c c c c c c c . . . . . 
            . . . c 6 7 7 7 7 7 6 c . . . . 
            . . c 6 7 c 6 6 6 6 c 7 c . . . 
            . . c 7 7 6 f 6 6 f 6 7 6 c . . 
            . . c 7 7 7 7 7 7 7 7 7 7 c . . 
            . . f 7 7 7 6 1 f f 1 8 7 f . . 
            . . f 7 7 7 f 1 f f 1 f 6 f . . 
            . . f 6 7 7 f 2 2 2 2 f f . . . 
            . . c f 6 7 7 2 2 2 2 f c c . . 
            . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
            c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
            c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
            . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . c 6 6 6 6 1 1 1 1 1 6 f . 
            . . . . c c c c c c c c f f . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        snake,
        [img`
            . . . . c c c c c c c . . . . . 
            . . . c 6 7 7 7 7 7 6 c . . . . 
            . . c 6 7 c 6 6 6 6 c 7 c . . . 
            . . c 7 7 6 f 6 6 f 6 7 6 c . . 
            . . c 7 7 7 7 7 7 7 7 7 7 c . . 
            . . f 7 7 7 6 1 f f 1 8 7 f . . 
            . . f 7 7 7 f 1 f f 1 f 6 f . . 
            . . f 6 7 7 f 2 2 2 2 f f . . . 
            . . c f 6 7 7 2 2 2 2 f c c . . 
            . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
            c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
            c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
            . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . c 6 6 6 6 1 1 1 1 1 6 f . 
            . . . . c c c c c c c c f f . . 
            `,img`
            . . . c c c c c c c . . . . . . 
            . . c 7 f f 6 6 f f c . . . . . 
            . c 6 7 6 6 6 6 6 6 7 c . . . . 
            . c 7 7 7 7 7 7 7 7 7 7 c . . . 
            . c 7 7 7 6 1 f f 1 8 7 c . . . 
            . f 7 7 7 f 1 f f 1 f 6 f . . . 
            . f 7 7 7 f 2 2 2 2 f 6 f . . . 
            . f 6 7 7 f 2 2 2 2 f 6 c c . . 
            . . c f 7 7 2 2 2 2 7 7 7 7 c . 
            . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
            c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
            c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
            . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . c 6 6 6 6 6 1 1 1 1 6 f . 
            . . . . c c c c c c c c f f . . 
            `,img`
            . . . c c c c c c c . . . . . . 
            . . c 7 f f 6 6 f f c . . . . . 
            . c 6 7 6 6 6 6 6 6 7 c . . . . 
            . c 7 7 7 7 7 7 7 7 7 7 c . . . 
            . c 7 7 7 6 1 f f 1 8 7 c . . . 
            . f 7 7 7 f 1 f f 1 f 6 f . . . 
            . f 7 7 7 f 2 2 2 2 f 6 f . . . 
            . f 6 7 7 f 2 2 2 2 f 6 c c . . 
            . . c f 7 7 2 2 2 2 7 7 7 7 c . 
            . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
            c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
            c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
            . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . c 6 6 6 6 6 1 1 1 1 6 f . 
            . . . . c c c c c c c c f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            c c c c c . . . . . . . . . . . 
            c 6 7 7 7 c c . . . . . . . . . 
            . c c 7 7 7 c c . . . . . . . . 
            . . . c 7 7 6 c . . . . . . . . 
            . . . c 6 6 6 c . . . . . . . . 
            . . c c 6 6 6 c c c c c c . . . 
            . c 6 6 6 c c 6 7 7 7 7 6 c . . 
            c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
            c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
            c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
            c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
            c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
            . c c 6 6 f 6 7 c 1 f f c 1 c . 
            . . . c c c c c c c c c c c c . 
            `,img`
            c c c c c . . . . . . . . . . . 
            c 6 7 7 7 c c . . . . . . . . . 
            . c c 7 7 7 c c . . . . . . . . 
            . . . c 7 7 6 c . . . . . . . . 
            . . . c 6 6 6 c . . . . . . . . 
            . . c c 6 6 6 c . . . . . . . . 
            . c c 6 6 6 c c c c c c c . . . 
            . c 6 6 6 c c 6 7 7 7 7 6 c . . 
            c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
            c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
            c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
            c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
            c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
            . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
            . c c 6 6 f 6 7 c 1 f f c 1 c . 
            . . . c c c c c c c c c c c c . 
            `,img`
            c c c c c . . . . . . . . . . . 
            c 6 7 7 7 c c . . . . . . . . . 
            . c c 7 7 7 c c . . . . . . . . 
            . . . c 7 7 6 c . . . . . . . . 
            . . . c 6 6 6 c . . . . . . . . 
            . . c c 6 6 6 c . . . . . . . . 
            . c c 6 6 6 c c c c c c c . . . 
            . c 6 6 6 c c 6 7 7 7 7 6 c . . 
            c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
            c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
            c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
            c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
            c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
            . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
            . c c 6 6 f 6 7 c 1 f f c 1 c . 
            . . . c c c c c c c c c c c c . 
            `],
        100,
        true
        )
        tiles.placeOnTile(snake, tiles.getTileLocation(randint(3, 28), randint(3, 28)))
        snake.follow(mySprite, randint(25, 75))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let milk_right: Sprite = null
let milk_left: Sprite = null
let snake: Sprite = null
let mySprite: Sprite = null
let Spawn_Count = 0
if (game.ask("Kill 1 Spawn 1 or Kill 1 Spawn 2")) {
    Spawn_Count = 1
} else {
    Spawn_Count = 2
}
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    f f . c d b e e d d c d d d d c 
    f e f . c f e e d d d c c c c c 
    f e f . . f f e e d d d d d f . 
    f e f . f e e e e f f f f f . . 
    f e f f e e e e e e e f . . . . 
    . f f e e e e f e f f e f . . . 
    . . f e e e e f e f f e f . . . 
    . . . f e f f b d f b d f . . . 
    . . . f d b b d d c d d f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 200, 200)
scene.cameraFollowSprite(mySprite)
namespace userconfig {
export const ARCADE_SCREEN_WIDTH = 225
export const ARCADE_SCREEN_HEIGHT = 225
}
info.setLife(500)
info.setScore(0)
for (let index = 0; index < 10; index++) {
    snake = sprites.create(img`
        . . . . c c c c c c c . . . . . 
        . . . c 6 7 7 7 7 7 6 c . . . . 
        . . c 6 7 c 6 6 6 6 c 7 c . . . 
        . . c 7 7 6 f 6 6 f 6 7 6 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 7 7 6 1 f f 1 8 7 f . . 
        . . f 7 7 7 f 1 f f 1 f 6 f . . 
        . . f 6 7 7 f 2 2 2 2 f f . . . 
        . . c f 6 7 7 2 2 2 2 f c c . . 
        . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
        c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
        c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
        . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
        . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . c 6 6 6 6 1 1 1 1 1 6 f . 
        . . . . c c c c c c c c f f . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    snake,
    [img`
        . . . . c c c c c c c . . . . . 
        . . . c 6 7 7 7 7 7 6 c . . . . 
        . . c 6 7 c 6 6 6 6 c 7 c . . . 
        . . c 7 7 6 f 6 6 f 6 7 6 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 7 7 6 1 f f 1 8 7 f . . 
        . . f 7 7 7 f 1 f f 1 f 6 f . . 
        . . f 6 7 7 f 2 2 2 2 f f . . . 
        . . c f 6 7 7 2 2 2 2 f c c . . 
        . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
        c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
        c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
        . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
        . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . c 6 6 6 6 1 1 1 1 1 6 f . 
        . . . . c c c c c c c c f f . . 
        `,img`
        . . . c c c c c c c . . . . . . 
        . . c 7 f f 6 6 f f c . . . . . 
        . c 6 7 6 6 6 6 6 6 7 c . . . . 
        . c 7 7 7 7 7 7 7 7 7 7 c . . . 
        . c 7 7 7 6 1 f f 1 8 7 c . . . 
        . f 7 7 7 f 1 f f 1 f 6 f . . . 
        . f 7 7 7 f 2 2 2 2 f 6 f . . . 
        . f 6 7 7 f 2 2 2 2 f 6 c c . . 
        . . c f 7 7 2 2 2 2 7 7 7 7 c . 
        . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
        c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
        c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
        . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
        . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . c 6 6 6 6 6 1 1 1 1 6 f . 
        . . . . c c c c c c c c f f . . 
        `,img`
        . . . c c c c c c c . . . . . . 
        . . c 7 f f 6 6 f f c . . . . . 
        . c 6 7 6 6 6 6 6 6 7 c . . . . 
        . c 7 7 7 7 7 7 7 7 7 7 c . . . 
        . c 7 7 7 6 1 f f 1 8 7 c . . . 
        . f 7 7 7 f 1 f f 1 f 6 f . . . 
        . f 7 7 7 f 2 2 2 2 f 6 f . . . 
        . f 6 7 7 f 2 2 2 2 f 6 c c . . 
        . . c f 7 7 2 2 2 2 7 7 7 7 c . 
        . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
        c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
        c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
        . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
        . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . c 6 6 6 6 6 1 1 1 1 6 f . 
        . . . . c c c c c c c c f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        c c c c c . . . . . . . . . . . 
        c 6 7 7 7 c c . . . . . . . . . 
        . c c 7 7 7 c c . . . . . . . . 
        . . . c 7 7 6 c . . . . . . . . 
        . . . c 6 6 6 c . . . . . . . . 
        . . c c 6 6 6 c c c c c c . . . 
        . c 6 6 6 c c 6 7 7 7 7 6 c . . 
        c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
        c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
        c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
        c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
        c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
        . c c 6 6 f 6 7 c 1 f f c 1 c . 
        . . . c c c c c c c c c c c c . 
        `,img`
        c c c c c . . . . . . . . . . . 
        c 6 7 7 7 c c . . . . . . . . . 
        . c c 7 7 7 c c . . . . . . . . 
        . . . c 7 7 6 c . . . . . . . . 
        . . . c 6 6 6 c . . . . . . . . 
        . . c c 6 6 6 c . . . . . . . . 
        . c c 6 6 6 c c c c c c c . . . 
        . c 6 6 6 c c 6 7 7 7 7 6 c . . 
        c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
        c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
        c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
        c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
        c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
        . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
        . c c 6 6 f 6 7 c 1 f f c 1 c . 
        . . . c c c c c c c c c c c c . 
        `,img`
        c c c c c . . . . . . . . . . . 
        c 6 7 7 7 c c . . . . . . . . . 
        . c c 7 7 7 c c . . . . . . . . 
        . . . c 7 7 6 c . . . . . . . . 
        . . . c 6 6 6 c . . . . . . . . 
        . . c c 6 6 6 c . . . . . . . . 
        . c c 6 6 6 c c c c c c c . . . 
        . c 6 6 6 c c 6 7 7 7 7 6 c . . 
        c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
        c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
        c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
        c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
        c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
        . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
        . c c 6 6 f 6 7 c 1 f f c 1 c . 
        . . . c c c c c c c c c c c c . 
        `],
    100,
    true
    )
    tiles.placeOnTile(snake, tiles.getTileLocation(randint(3, 28), randint(3, 28)))
    snake.follow(mySprite, randint(25, 75))
}
