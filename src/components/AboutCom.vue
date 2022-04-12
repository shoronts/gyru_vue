<template>
    <!-- =============== banner section start =============== -->
    <div class="about-banner">
        <div class="container">
            <div class="about-page-banner-section">
                <div class="about-banner-asrea">
                    <h4>ABOUT US</h4>
                    <div class="about-page-blank-color"></div>
                    <p>
                        We are the Gyru App company based in Kent, United Kingdom. We started our journey with the idea
                        of
                        making an App that will connect people, who want to learn driving, with the best driving
                        instructors. Our motto is to help people find their instructors through the app and make their
                        life
                        easier.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- ================== banner section start ================== -->
    <!-- ===================== 1st section start ===================== -->
    <div class="container">
        <div class="about-section">
            <div class="about-section-details">
                <div class="about-section-img">
                    <img loading="lazy" decoding="async" src="../assets/img/card/about-1.png" alt="First Banner">
                </div>
            </div>
            <div class="about-section-details ">
                <h2>Concepts</h2>
                <div class="about-blank-line y-c"></div>
                <p>
                    Our main concept is to connect the best driving instructors with the learners via a simple App. In
                    any
                    location where Gyru app operates, a user can easily find a driving instructor and start learning to
                    drive. Moreover, experts affiliated with App industry have worked with the concept.
                </p>
            </div>
        </div>
    </div>
    <!-- ================== 1st section end =============== -->

    <!-- ============== 2nd section end ============ -->
    <div class="back-yellow">
        <div class="container">
            <div class="about-section cloum-rev">
                <div class="about-section-details">
                    <h2 class="text-white">Our Mission</h2>
                    <div class="about-blank-line w-c"></div>
                    <p class="text-white">
                        Our mission is to connect the learner with the best driving instructor in the shortest possible
                        time
                        without any hassle. Also, we want to help users avoid unwanted gap during a driving lesson and
                        eradicate the difficulty of making an appointment to learn driving.
                    </p>
                </div>
                <div class="about-section-details">
                    <div class="about-section-img">
                        <img loading="lazy" decoding="async" src="../assets/img/card/our-mission1.png"
                            alt="Second Banner">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- =================== 2nd section end ============= -->

    <!-- ================= 3th section start =========== -->
    <div class="container">
        <div class="about-section">
            <div class="about-section-details">
                <div class="about-section-img">
                    <img loading="lazy" decoding="async" src="../assets/img/card/Our-Obstacles2.png" alt="Third Banner">
                </div>
            </div>
            <div class="about-section-details">
                <h2>Our Obstacles</h2>
                <div class="about-blank-line y-c"></div>
                <p>
                    Wireframe sketch is neat, but some dots were not connecting to each other. One of our experts came
                    up
                    with some brilliant yet simple solution to connect the dots.
                </p>
                <p>
                    It was difficult for us to choose the right platform for back-end functionalities. Finally, we
                    decided
                    to work on Firebase.
                </p>
                <p>
                    We are lacking professional instructors on board. In this circumstance, our company director
                    appointed
                    an approved driving instructor (ADI).
                </p>
            </div>
        </div>
    </div>
    <!-- ================= 3th section end ================= -->

    <!-- =============== 4th section start ============= -->
    <div class="back-yellow">
        <div class="container">
            <div class="about-section cloum-rev">
                <div class="about-section-details">
                    <h2 class="text-white">Our Promise</h2>
                    <div class="about-blank-line w-c"></div>
                    <p class="text-white">
                        Our promise is to make the process as easy and simple as possible. We are making this app in a
                        way
                        that will benefit both the learners and instructors.
                    </p>
                </div>
                <div class="about-section-details">
                    <div class="about-section-img">
                        <img loading="lazy" decoding="async" src="../assets/img/card/Our-Promise3.png"
                            alt="Fourth Banner">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- =========== 4th section end =========== -->

    <!-- ============== 5th section start ========= -->
    <div class="container">
        <div class="about-section">
            <div class="about-section-details">
                <div class="about-section-img">
                    <img loading="lazy" decoding="async" src="../assets/img/card/Conclusion2.png" alt="Sixth Banner">
                </div>
            </div>
            <div class="about-section-details">
                <h2>Conclusion</h2>
                <div class="about-blank-line y-c"></div>
                <p>
                    In this era of fast-moving world, driving is an unavoidable need/In this fast-moving-era, driving is
                    an
                    essential need. As a result, people look for the best instructor to learn driving and we help them
                    connect. We would like to be remembered by turning their problem into solution.
                </p>
            </div>
        </div>
    </div>
    <!-- ============== 6th section end ============== -->
</template>

<style>
    .about-banner {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(../assets/img/bg/bg-copy-2.png);
        background-size: cover;
        background-position: center;
    }

    .about-page-banner-section {
        height: 100vh;
        position: relative;
    }

    .about-banner-asrea {
        text-align: center;
        position: absolute;
        top: 37%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
    }

    .about-page-blank-color {
        height: 3px;
        width: 80px;
        background-color: #f7c434;
        margin: auto;
    }

    .about-banner-asrea h4 {
        font-size: 36px;
        color: #ffffff;
        margin-bottom: 5px;
    }

    .about-banner-asrea p {
        color: #ffffff;
        margin-top: 30px;
        font-size: 16px;
    }

    /* banner section end */

    /* 1st section start */

    .about-section {
        display: flex;
        justify-content: space-between;
        padding: 50px 0;
    }

    .about-section-details {
        width: 49%;
    }

    .about-section-img {
        width: 70%;
        height: 380px;
        margin: auto;
    }

    .about-section-img img {
        width: 100%;
        height: 100%;
    }

    .about-blank-line {
        height: 3px;
        width: 40px;
    }

    .y-c {
        background-color: #ffc435;
    }

    .w-c {
        background-color: #ffffff;
    }

    .about-section-details h2 {
        margin-top: 50px;
        font-weight: 600;
    }

    .about-section-details p {
        font-size: 16px;
        margin-top: 20px;
        text-align: justify;
    }

    .back-yellow {
        background-color: #ffc435;
    }

    @media screen and (max-width: 768px) {

        .about-section {
            flex-direction: column;
        }

        .about-section-details {
            width: 100%;
        }

        .about-banner-asrea h4 {
            font-size: 25px;
        }

        .about-page-banner-section {
            height: 45vh;
        }

        .about-section-img {
            width: 80%;
            height: 315px;
        }

        .btnSecondSec {
            top: 80px;
            right: 135px;
        }
        .cloum-rev {
            flex-direction: column-reverse;
        }
    }

    @media screen and (max-width: 414px) {

        .about-section {
            flex-wrap: wrap;
        }

        .about-section-details {
            width: 100%;
        }

        .btnSecondSec {
            height: 50px;
            width: 150px;
            top: 45px;
            right: 60px;
        }
    }

    @media screen and (max-width: 375px) {

        .about-banner-asrea {
            top: 50%;
        }

        .btnSecondSec {
            height: 45px;
            width: 115px;
            top: 40px;
            right: 70px;
        }
    }
</style>