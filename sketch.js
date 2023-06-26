
var splashimg
var gameState = "wait"
var rocketImg
var darkStar, iceStar, fireStar, explodeStar, poisonStar, star
var alien
var axe

var storybutton, mutebutton, musicbutton, nextbutton, playbutton, restartbutton
var level1bgimg, eyescore, eyescoreimg
var health = 0
var health2 = 0
var health3 = 0
var maxHealth = 400
var score1 = 0, score2 = 0, score3 = 0
var bgmusic


function preload() {
    bgmusic=loadSound("gaming-sound-143716.mp3")
    splashimg = loadImage("Star_Stellar.gif")
    rocketImg = loadImage("rocket.png")
    darkStar = loadImage("darkStar.png")
    iceStar = loadImage("iceStar.png")
    fireStar = loadImage("fireStar.png")
    explodeStar = loadImage("explodeStar.png")
    // poisonStar = loadImage("poisonStar.png")
    star = loadImage("star.png")

    axe = loadImage("axe.png")
    level1bgimg = loadImage("level1bg.jpg")

    playerimgright = loadImage("alien.gif")
    playerimgleft = loadImage("alienright.gif")



    // level 1
    eye1img = loadImage("iceStar.png")
    eye2img = loadImage("fireStar.png")
    eyescoreimg = loadImage("darkStar.png")
    eye4img = loadImage("explodeStar.png")





    platformimg1 = loadImage("tile1.png")
    platformimg2 = loadImage("tile2.png")


    // level 2

    hand1img = loadImage("dancingstar.gif")
    hand2img = loadImage("collect2.png")
    hand3img = loadImage("goldenkey.gif")


    level2platform1 = loadImage("desertrock.png")
    level2platform2 = loadImage("desertrock2.png")
    level2platform3 = loadImage("desertrock3.png")
    level2platform4 = loadImage("desertrock1.png")
    handscoreimg = loadImage("staranimated.gif")

    bg2img = loadImage("background1.jpg")

    // level 3
    brain1img=loadImage("axe.png")
    brain2img=loadImage("rocket.png")
    brain3img=loadImage("angryfairy.gif")

    level3img=loadImage("background11.png")
    brainscoreimg = loadImage("iceStar.png")

bgmusic.play()
bgmusic.loop()


}

function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("play1.png")
    playbutton.position(width / 2.5, height - (height / 3))
    playbutton.size(300, 300)




    musicbutton = createImg("music.png")
    musicbutton.position(playbutton.x - 200, height / 2 + 130)
    musicbutton.size(300, 300)

    mutebutton = createImg("nomusic.png")
    mutebutton.position(playbutton.x + 200, height / 2 + 115)
    mutebutton.size(300, 300)
    mutebutton.hide()


    infobutton = createImg("info.gif")
    infobutton.position(0, 0)
    infobutton.size(width, height * 1.5)
    infobutton.hide()



    // level 1 platforms
    platform1 = createSprite(width / 4, height / 2)
    platform1.addImage(platformimg2)

    // platform1.scale=.75
    eye1 = createSprite(platform1.x, platform1.y - (platform1.height / 1.25))
    eye1.addImage(eye2img)
    eye1.scale = 3

    platform2 = createSprite(width / 2, height / 1.5)
    platform2.addImage(platformimg1)

    platform2.scale = 1


    eye2 = createSprite(platform2.x, platform2.y - (platform2.height / 1.5))
    eye2.addImage(eye1img)
    eye2.rotation = 65
    eye2.scale = 3

    // eye2.mirrorX(-1)

    platform3 = createSprite(width - width / 4, height / 3)
    platform3.addImage(platformimg2)


    eye3 = createSprite(platform3.x, platform3.y - (platform3.height / 1.25))
    eye3.addImage(eye4img)
    eye3.scale = 3


    platform4 = createSprite(width - 100, height - height / 2.5)
    platform4.addImage(platformimg2)


    // level1 platform visible

    platform1.visible = false
    platform2.visible = false
    platform3.visible = false
    platform4.visible = false

    platform1.tint = ("lime")
    platform2.tint = ("lime")
    platform3.tint = ("lime")
    platform4.tint = ("#FF5F49")


    eye1.visible = false
    eye2.visible = false
    eye3.visible = false





    invisibleground = createSprite(width / 2, height - 50, width, 10)

    invisibleground.setCollider("rectangle", 0, 0, invisibleground.width / 1.75, invisibleground.height / 10)

    invisibleground.visible = false


    invisibleground2 = createSprite(50, height - 80, width / 4, 10)

    invisibleground2.setCollider("rectangle", 0, 0, invisibleground2.width / 1.75, invisibleground2.height / 10)

    invisibleground2.visible = false

    level1endwall = createSprite(width - 10, 100, 20, height * 2)
    level1endwall.visible = false

    // bg2img = loadImage("level2bg.jpg")

    player1 = createSprite(100, height - 150)
    player1.addImage("jump", playerimgright)
    player1.addImage("idle", playerimgleft)
    player1.addImage("walk", playerimgleft)


    player1.scale = 0.5
    player1.visible = false
   
    player1.setCollider("circle", 0, 50, 40)



    eyescore = createSprite(width - width / 6, 50)
    eyescore.addImage(eyescoreimg)
    eyescore.scale = 1.75
    eyescore.visible = false



    handscore = createSprite(width - width / 6, 50)
    handscore.addImage( handscoreimg)
    handscore.scale = 0.3
    handscore.tint = ("lime")
    handscore.visible = false


    brainscore = createSprite(width - width /5.9, 50)
    brainscore.addImage("brainscore", brainscoreimg)
    brainscore.scale = 2
    brainscore.rotation=-265
    // brainhandscore.tint=("lime")
    brainscore.visible = false





    leftwall = createSprite(width / 2 - width / 4, height / 2, 10, height)
    leftwall.visible = false

    rightwall = createSprite(width - width / 4, height / 2, 10, height)
    rightwall.visible = false



    //    level 2 platformes
    platform5 = createSprite(200, height - height / 3.5)
    platform5.addImage(level2platform4)
    platform5.setCollider("rectangle",0,0,platform5.width-(platform5.width/2),platform5.height/2)
    platform5.scale = 0.65

    platform6 = createSprite(width / 2, height / 1.5)
    platform6.addImage(level2platform2)
    platform6.setCollider("rectangle",0,0,platform6.width-(platform6.width/2),platform6.height/2)


    platform7 = createSprite(width - width / 6, height - height / 5)
    platform7.addImage(level2platform1)
    platform7.setCollider("rectangle",0,0,platform7.width-(platform7.width/2),platform7.height/2)

    // platform7.scale=1.5

    platform8 = createSprite(width - width / 4, height / 2.5)
    platform8.addImage(level2platform3)
    platform8.scale=2
    platform8.setCollider("rectangle",0,0,platform8.width-(platform8.width/2),platform8.height/2)

    platform8.scale = 0.5

    platform5.visible = false
    platform6.visible = false
    platform7.visible = false

    platform8.visible = false


    // // collectibles level 2
    hand1 = createSprite(platform5.x + 20, platform5.y - (platform5.height / 2))
    hand1.addImage(hand2img)
    hand1.scale = 3
    hand1.setCollider("rectangle",0,0,hand1.width/2,hand1.height)
    hand1.tint=("red")
    hand1.visible = false

    hand2 = createSprite(platform6.x - 20, platform6.y - (platform6.height / 1.2))
    hand2.addImage(hand1img)
    hand2.scale = 0.5
    hand2.rotation = 95
    hand2.visible = false


    hand3 = createSprite(platform8.x, platform8.y - (platform8.height / 3))
    hand3.addImage(hand3img)
    hand3.rotation = -75
    hand3.scale = 0.5
    hand3.visible = false




    // // collectibles level 3
    brain1=createSprite(platform2.x-20,platform2.y-(platform2.height/5.7))
    brain1.addImage(brain1img)
    brain1.scale=1.25

    brain2=createSprite(platform3.x-20,platform3.y-(platform3.height/5.5))
    brain2.addImage(brain3img)
    // brain2.rotation=-65
    // brain2.scale=0.5

    brain3=createSprite(platform4.x-20,platform4.y-(platform4.height/5.7))
    brain3.addImage(brain2img)
    brain3.scale=0.25


    brain1.visible=false
    brain2.visible=false
    brain3.visible=false

    platform0 = createSprite(50, height - 70)
    platform0.addImage(level2platform1)
    platform0.scale = 0.5
    platform0.visible = false
    platform0.setCollider("rectangle", 0, 0, platform0.width / 1.75, platform0.height / 2)


}

function draw() {
    if (gameState == "wait") {
        background(splashimg)
    }

    playbutton.mousePressed(() => {
        playbutton.hide()
        infobutton.show()
        mutebutton.hide()
        musicbutton.hide()

    })

    infobutton.mousePressed(() => {
        gameState = "level1"
        playbutton.hide()
        infobutton.hide()

    })
    musicbutton.mousePressed(() => {
        musicbutton.hide()
        mutebutton.show()
        bgmusic.play()
    })

    mutebutton.mousePressed(() => {
        musicbutton.show()
        mutebutton.hide()
        bgmusic.stop  ()

    })


    if (gameState === "level1") {
        background(level1bgimg)
        healthlevel1()

        eyescore.visible = true

        platform1.visible = true
        platform2.visible = true
        platform3.visible = true


        eye1.visible = true
        eye2.visible = true
        eye3.visible = true
        player1.visible = true
        if (player1.isTouching(invisibleground)) {
            gameState = "end"
        }
        musicbutton.mousePressed(() => {
            musicbutton.hide()
            mutebutton.show()
            // bgmusic.play()
        })
        mutebutton.mousePressed(() => {
            musicbutton.show()
            mutebutton.hide()
            // bgmusic.stop()

        })

        player1.velocityY += 0.8
        player1.collide(invisibleground2)



    }




    if (gameState == "level2") {
        image(bg2img, 0, 0, width, height)
        // background(bg2img)
        // background("green")
        healthlevel2()
        eyescore.visible = false



        player1.collide(invisibleground)
        platform5.visible = true
        platform6.visible = true
        // platform7.visible = true
        platform8.visible = true
        handscore.visible = true


        // platform8.visible = true




        if (player1.isTouching(invisibleground)) {
            gameState = "end"
        }

        if (platform6.isTouching(leftwall)) {
            platform6.velocityX = 2
        }

        else if (platform6.isTouching(rightwall)) {
            platform6.velocityX = -2
        }


        player1.velocityY += 0.8
        player1.collide(invisibleground2)

    }




    if (gameState == "level3") {
        background(level3img)
        brain1.visible=true
        brain2.visible=true
        brain3.visible=true
        healthlevel3()
        brainscore.visible = true
        handscore.visible=false


        platform0.visible=true
        platform1.visible = true
        platform2.visible = true
        platform3.visible = true
        platform4.visible = true


        platform0.tint = ("yellow")
        platform1.tint = ("yellow")
        platform2.tint = ("yellow")
        platform3.tint = ("yellow")
        platform4.tint = ("yellow")



        topwall = createSprite(width / 2, 50, width, 20)
    bottomwall = createSprite(width / 2, height - 100, width, 20)
   
    topwall.visible = false
    bottomwall.visible = false

    score1 = 0
    score2 = 0
    platform1.x = width / 2
    
    // player1.x = 100
    player1.collide(platform0)




        if (player1.isTouching(invisibleground)) {
            gameState = "end"
        }

        if (platform1.isTouching(leftwall)) {
            platform1.velocityX = -(platformvelocityX)
        }

        else if (platform1.isTouching(rightwall)) {
            platform1.velocityX = -2
        }


        player1.velocityY += 0.8
        // player1.collide(platform0)

        if (platform2.isTouching(topwall) || platform2.isTouching(bottomwall)) {
            if (platform2.isTouching(topwall)) {
                platform2.velocityY = 2
            }

            if (platform2.isTouching(bottomwall)) {
                platform2.velocityY = -2
            }
        }

        if (platform3.isTouching(topwall) || platform3.isTouching(bottomwall)) {
            if (platform3.isTouching(topwall)) {
                platform3.velocityY = 2
            }

            if (platform3.isTouching(bottomwall)) {
                platform3.velocityY = -2
            }
        }



        if (platform4.isTouching(topwall) || platform4.isTouching(bottomwall)) {
            if (platform4.isTouching(topwall)) {
                platform4.velocityY = 2
            }

            if (platform4.isTouching(bottomwall)) {
                platform4.velocityY = -2
            }
        }

    }




    drawSprites()



    if (gameState === "end") {

        GameOver()

    }



    if (gameState === "level1") {

        // player movement... added 2 april


        textSize(60)
        fill("black")
        stroke(0)
        strokeWeight(2)
        text(": " + score1, eyescore.x + (eyescore.width / 7 + 20), 70)

        stroke("red")
        strokeWeight(6)
        fill("white")
        text(gameState, width / 2 - 100, 50)

        if (keyIsDown(RIGHT_ARROW)) {
            player1.x += 5
            player1.changeImage("jump", playerimgright)




        }

        if (keyIsDown(LEFT_ARROW)) {
            player1.x -= 5
            // player1.changeImage("idle", player1idleimg)
            player1.changeImage("idle", playerimgleft)



        }

        if (keyDown("space")) {
            player1.velocityY = -15
            // player1.changeImage("jump", player1jumpimg)
           
        }





        if (player1.isTouching(platform1)) {
            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0

        }



        if (player1.isTouching(platform2)) {
            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0
        }



        if (player1.isTouching(platform3)) {
            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0
        }

        if (player1.isTouching(platform4)) {
            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0
        }



        if (player1.isTouching(eye1) || player1.isTouching(eye2) || player1.isTouching(eye3)) {
            // coinCollecting.play()
            if (player1.isTouching(eye1)) {
                eye1.remove()
                score1 += 10
                health += 115
            }
            if (player1.isTouching(eye2)) {
                eye2.remove()
                score1 += 10
                health += 115

            }
            if (player1.isTouching(eye3)) {
                eye3.remove()
                score1 += 10
                health += 115

            }

        }


    }


    if (score1 == 30) {
        platform1.x = width - 100
        platform1.velocityX = 0

        if (player1.isTouching(level1endwall)) {

            eyescore.visible = false
            level1over()

        }
    }





    // level 2
    if (gameState == "level2") {
        textSize(60)
        fill("red")
        stroke(0)
        strokeWeight(2)
        text(" : " + score2, handscore.x + (handscore.width / 4), 70)

        //   player movement
        if (keyDown(RIGHT_ARROW)) {
            player1.x += 5
            player1.changeImage("jump", playerimgright)


        }

        if (keyDown(LEFT_ARROW)) {
            player1.x -= 5
            player1.changeImage("idle", playerimgleft)

        }

        if (keyDown("space")) {
            player1.velocityY = -15
        }



        // standing on platforms

        if (player1.isTouching(platform5)) {
            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0

        }



        if (player1.isTouching(platform6)) {

            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0
        }



        if (player1.isTouching(platform7)) {

            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0
        }

        if (player1.isTouching(platform8)) {

            //jumpsound.play()
            player1.velocityX = 0
            player1.velocityY = 0
        }




        // level 2 player touching coin
        if (player1.isTouching(hand1) || player1.isTouching(hand2) || player1.isTouching(hand3)) {
            if (player1.isTouching(hand1)) {
                hand1.remove()
                score2 += 10
                health2 += 115

            }
            if (player1.isTouching(hand2)) {
                hand2.remove()
                score2 += 10
                health2 += 115


            }

            if (player1.isTouching(hand3)) {
                hand3.remove()
                score2 += 10
                health2 += 115


            }


        }


        if (score2 >= 30) {
            rightwall.remove()
        }

        if (player1.isTouching(level1endwall))

            level2over()

    }


    // level3
    

    if (gameState == "level3") {
        textSize(60)
        fill("red")
        stroke(0)
        strokeWeight(2)
        text(" : " + score3, brainscore.x + (brainscore.width / 4), 70)
    
        platform5.visible=false
        platform6.visible=false
        platform7.visible=false
        platform8.visible=false
    
        if (keyDown("space")) {
            player1.velocityY = -5
            console.log("jump")
        }
    
        if (keyDown(RIGHT_ARROW)) {
            player1.x += 5
            console.log("right")
        }
    
    
        if (keyDown(LEFT_ARROW)) {
            player1.x -= 5
            console.log("left")
        }
    
    
        if (player1.isTouching(platform1)) {
    
            player1.velocityX = 0
            player1.velocityY = 0
    
        }
        if (player1.isTouching(platform2)) {
    
            player1.velocityX = 0
            player1.velocityY = 0
    
        }
        if (player1.isTouching(platform3)) {
    
            player1.velocityX = 0
            player1.velocityY = 0
    
        }
    
        if (player1.isTouching(platform4)) {
    
            player1.velocityX = 0
            player1.velocityY = 0
    
        }
    
    
        if (player1.isTouching(brain1) || player1.isTouching(brain2) || player1.isTouching(brain3)) {
    
            if (player1.isTouching(brain1) && player1.isTouching(platform2)) {
                brain1.remove()
                platform2.remove()
                // coinCollecting.play()
                score3 += 10
            }
            if (player1.isTouching(brain2) && player1.isTouching(platform3)) {
                brain2.remove()
                platform3.remove()
    
                // coinCollecting.play()
    
                score3 += 10
            }
            if (player1.isTouching(brain3) && player1.isTouching(platform4)) {
                brain3.remove()
                platform4.remove()
                // coinCollecting.play()
    
                score3 += 10
            }
    
            if (player1.isTouching(topwall) || player1.isTouching(bottomwall)) {
                
              if  (player1.isTouching(topwall)){
                gameState = "end"}
    
                if  (player1.isTouching(bottomwall)){
                    gameState = "end"}
            }
    
    
    
            if (score3 >= 30) {
                win()
            }
    
        }
    
    
    
    
    }

}


function healthlevel1() {

    //   health = min(maxHealth, ++health);


    stroke("gold");
    strokeWeight(7);
    noFill();
    rect(10, 10, 200, 20);

    noStroke();
    fill("orange");
    rect(10, 10, map(health, 0, maxHealth, 0, 200), 20);
}


function level1over() {
    swal({
        title: "You have done it!! ",
        text: " LEVEL 1 CLEARED!!",
        imageUrl: "fairy.gif",
        imageSize: '400x400',
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'LEVEL 2 !!!',
    },
        function (isConfirm) {
            Level2()

        })

}



function Level2() {
    gameState = "level2"
    platform1.visible = false
    platform2.visible = false
    platform3.visible = false
    platform4.visible = false

    score1 = 0
    platform6.x = width / 2
    platform6.velocityX = 2
    player1.x = 100
    // player.y=height-150
    player1.collide(invisibleground2)
    hand1.visible = true
    hand2.visible = true
    hand3.visible = true

}

function healthlevel2() {

    //   health = min(maxHealth, ++health);
    // health=health+score1


    stroke("green");
    strokeWeight(10);
    noFill();
    rect(10, 10, 200, 20);

    noStroke();
    fill(255, 0, 0);
    rect(10, 10, map(health2, 0, maxHealth, 0, 200), 20);
    //   health++
}





function level2over() {
    swal({
        title: "You have done it!! ",
        text: " LEVEL 2 CLEARED!!",
        imageUrl: "fairy.gif",
        imageSize: '400x400',
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'LEVEL 3 !!!',
    },
        function (isConfirm) {
            // Level3()
            platform1.velocityX = 2
            platform2.velocityY = -2
            platform3.velocityY = 2
            platform4.velocityY = -2
            player1.x = 100

            gameState = "level3"

        })

}


// level 3
function Level3() {
    gameState = "level3"
    topwall = createSprite(width / 2, 50, width, 20)
    bottomwall = createSprite(width / 2, height - 100, width, 20)

  
    topwall.visible = false
    bottomwall.visible = false

    score1 = 0
    score2 = 0
    platform1.x = width / 2

    player1.x = 100
    player1.collide(platform0)

    platform1.velocityX = 2
    platform2.velocityY = -2
    platform3.velocityY = 2
    platform4.velocityY = -2

    platform0.visible = true
    platform5.visible = false
    platform6.visible = false
    platform7.visible = false
    platform8.visible = false

    // brain1.visible = true
    // brain2.visible = true
    // brain3.visible = true



}

function healthlevel3() {

    //   health = min(maxHealth, ++health);
    // health=health+score1


    stroke("green");
    strokeWeight(10);
    noFill();
    rect(10, 10, 200, 20);

    noStroke();
    fill(255, 0, 0);
    rect(10, 10, map(health3, 0, maxHealth, 0, 200), 20);
    //   health++
}

function GameOver() {
    score1 = 0
    score2 = 0
    score3 = 0
    player1.remove()
    swal({
        title: "YOU LOST IT !!",
        text: "TRY AGAIN ",
        textSize: 50,
        imageUrl: "firedragon1.png",
        imageSize: "500x300",
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'OK',
    },

        function () {

            window.location.reload();
        });

}

function win() {
    player1.remove()
    swal({
        title: "KUDOS !! YOU DID IT !!!",
        text: "CONGRATULATIONS ",
        textSize: 50,
        imageUrl: "fairy.gif",
        imageSize: "500x300",
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'OK',
    },

        function () {

            window.location.reload();
        });

}
