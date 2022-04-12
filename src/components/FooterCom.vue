<template>

    <footer>
        <div class="container">
            <div class="footer">

                <div class="footer-section">
                    <div class="logo">
                        <router-link to="/">
                            <img loading="lazy" decoding="async" src='../assets/img/logo/logo.png' alt="Main Logo">
                        </router-link>
                    </div>
                    <p class="about-gyru-footer">
                        Our main concept is to connect the best driving instructors with the learners via a simple App.
                        In any location where Gyru app operates, a user can easily find a driving instructor and start
                        learning to drive.
                    </p>
                    <div class="social-icon">
                        <a href="https://www.instagram.com/gyruapp/">
                            <i class="fab fa-instagram-square"></i>
                        </a>
                        <a href="https://www.facebook.com/GyruApp/">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/GyruApp">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>

                </div>
                <div class="footer-section">
                    <h3> SHORT LINK</h3>
                    <ul class="footer-link">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About Us</router-link></li>
                        <li><router-link to="/privacy-policy">Privacy policy</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>

                </div>
                <div class="footer-section">
                    <h3>CONTACT US</h3>
                    <p class="about-gyru-footer">
                        <span>Address:</span> The Gyru app ltd, Chislehurst, London, <br> BR75NL <br>
                        <span>Email:</span> gyruapp@gmail.com
                    </p>

                </div>

            </div>

            <div class="d-flex justify-content-between bottom-bar">
                <p class="copy-right">
                    COPYRIGHT &copy; 2022 GYRU APP.
                </p>
                <p class="copy-right text-uppercase">
                    <a target="blank" href="https://squaretechit.com/">developed by Square Tech IT.</a>
                </p>
            </div>

        </div>
    </footer>
    <div id="backToTopBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
            <path
                d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
        </svg>
    </div>
</template>

<style>
    footer {
        padding: 80px 0 40px 0;
        background-color: #000000;
    }

    .footer {
        display: flex;
        justify-content: space-between;
    }

    .footer-section {
        width: 30%;
    }

    .footer-section h3 {
        font-size: 20px;
        color: #ffffff;
        font-weight: 600;
    }

    .about-gyru-footer {
        text-align: justify;
        font-size: 16px;
        margin-top: 30px;
        color: #ffffff;
    }

    .footer-link {
        list-style-type: none;
        margin-top: 30px;
    }

    .footer-link a {
        font-size: 16px;
        color: #ffffff;
        margin-bottom: 13px;
        display: block;
    }

    .footer-link a:hover {
        color: #ffffff;
    }

    .about-gyru-footer span {
        margin-right: 20px;
    }

    .social-icon {
        display: flex;
    }

    .social-icon a {
        margin-right: 15px;
        padding: 5px 10px;
        background-color: #ffc435;
        border-radius: 100%;
    }

    .social-icon a i {
        font-size: 18px;
        color: #ffffff;
    }

    .social-icon a i:hover {
        color: #ffffff;
    }

    .copy-right {
        font-size: 16px;
        color: #ffffff;
        margin-top: 50px;
    }
    .copy-right a {
        color: #ffffff;
    }

    .copy-right:hover,
    .copy-right a:hover {
        color: #ffc435;
    }

    @media screen and (max-width: 768px) {
        .footer {
            flex-direction: column;
        }
        .footer-section {
            width: 100%;
            margin-bottom: 50px;
        }
    }

    @media all and (max-width: 560px) {
        .bottom-bar {
            display: block!important;;
        }

        .bottom-bar .copy-right {
            text-align: center;
        }
        .bottom-bar .copy-right.text-uppercase {
            margin-top: 5px;
        }
    }

    @media all and (max-width: 414px) {
        
        .footer {
            padding: 0 40px;
        }

        .footer-section {
            width: 100%;
            margin-bottom: 50px;
        }

        .footer-link {
            margin-top: 15px;
        }

        .copy-right {
            margin-top: 0px;
            padding: 0 40px;
            text-align: center;
        }
    }
</style>