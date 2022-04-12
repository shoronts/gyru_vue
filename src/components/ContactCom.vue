<template>
    <!-- ==================== title section end ==================== -->
    <div class="container">
        <div class="contact-page-title">
            <p>GET IN TOUCH</p>
            <div class="about-blank-line y-c contact-blank-line"></div>
        </div>
    </div>
    <!-- =================== 1st section start ===================== -->
    <div class="container pb-5">
        <div class="form-area">
            <div class="contact-form">
                <div v-if="VSendToServer" class="alert alert-success" role="alert">
                    <div class="text-center">Thank you!! We will contact you soon.</div>
                </div>
                <form v-if="!VSendToServer" @submit.prevent="SubmitForm" novalidate>
                    <div class="name-email">
                        <div class="name-email-box">
                            <input autocomplete="off" :class="{ error: VErrors.FullName }" type="text"
                                placeholder="Full Name" v-model="VFullName" name="name">
                            <div v-if="VErrors.FullName" class="form-text text-start">{{ VErrors.FullName }}</div>
                        </div>
                        <div class="name-email-box">
                            <input :class="{ error: VErrors.Email }" autocomplete="off" type="email"
                                placeholder="Valid Email" v-model="VEmail" name="email">
                            <div v-if="VErrors.Email" class="form-text text-start">{{ VErrors.Email }}</div>
                        </div>
                    </div>
                    <div class="subject-box">
                        <input autocomplete="off" class="subject" :class="{ error: VErrors.Subject }" type="text" placeholder="Subject" v-model="VSubject"
                            name="subject">
                        <div v-if="VErrors.Subject" class="form-text text-start">{{ VErrors.Subject }}</div>
                    </div>
                    <div class="comment-box">
                        <textarea class="message" :class="{ error: VErrors.Comment }" name="text" cols="30" rows="10"
                            placeholder="Leave a comment here" v-model="VComment"></textarea>
                        <div v-if="VErrors.Comment" class="form-text text-start">{{ VErrors.Comment }}</div>
                    </div>
                    <div class="form-btn text-center mt-3">
                        <button type="submit">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
            <div class="location">
                <div class="d-flex">
                    <div class="location-icon">
                        <i class="fas fa-map"></i>
                    </div>
                    <div class="adress">
                        <span> Location </span>
                        <p>The Gyru app ltd , Ruthland Court, Chislehurst , London, BR75NL</p>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="location-icon">
                        <i class="far fa-star"></i>
                    </div>
                    <div class="adress">
                        <span> E-mail </span>
                        <p>gyruapp@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                VFullName: '',
                VEmail: '',
                VSubject: '',
                VComment: '',
                VSendToServer: false,
                VErrors: {}
            }
        },
        methods: {
            // Send Data To Server
            SubmitFormToServer() {
                let FinalData = {
                    'name': this.VFullName,
                    'email': this.VEmail,
                    'subject': this.VSubject,
                    'comment': this.VComment
                }
                this.VFullName = '';
                this.VEmail = '';
                this.VSubject = '';
                this.VComment = '';
                this.VSendToServer = true;
                console.log(FinalData);
            },
            // Check Valid Email
            validEmail(email) {
                let re =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            // Submit The Form
            SubmitForm() {
                this.VErrors = {};

                if (!this.VFullName) {
                    this.VErrors['FullName'] = 'Fullname Required.';
                }

                if (!this.VEmail) {
                    this.VErrors['Email'] = 'Email Required.';
                } else if (!this.validEmail(this.VEmail)) {
                    this.VErrors['Email'] = 'Please use a valid Email';
                }

                if (!this.VSubject) {
                    this.VErrors['Subject'] = 'Subject Required.';
                }

                if (!this.VComment) {
                    this.VErrors['Comment'] = 'Comment Required';
                }

                if (!this.VErrors['FullName'] && !this.VErrors['Email'] && !this.VErrors['subject'] && !this.VErrors[
                        'Comment']) {
                    this.SubmitFormToServer();
                }
            }
        }
    }
</script>


<style scoped>
    .contact-page-title {
        padding: 70px 0;
    }

    .contact-page-title p {
        text-align: center;
        font-size: 30px;
        font-weight: 600;
    }

    .contact-blank-line {
        margin: auto;
        width: 15%;
    }

    /* ----------------- form ------------ */

    form .error {
        border: 1px solid red!important;;
    }

    .form-area {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .contact-form {
        width: 60%;
    }

    .location {
        width: 30%;
    }

    .name-email {
        display: flex;
        justify-content: space-between;
    }

    .name-email .name-email-box {
        width: 49%;
        margin-bottom: 20px;
    }

    .name-email .name-email-box input {
        width: 100%;
    }

    .subject-box {
        margin-bottom: 20px;
    }

    .subject {
        display: block;
        width: 100%;
    }

    .message {
        width: 100%;
        height: 150px;
        background-color: #eeeeee;
        padding: 10px 20px;
        border: 1px solid #696969;
        outline: none;
        border-radius: 10px;
    }

    .contact-form input {
        background-color: #eeeeee;
        padding: 10px 20px;
        border: 1px solid #696969;
        outline: none;
        border-radius: 20px;
    }

    .form-btn button {
        background-color: #edf000;
        padding: 12px 25px;
        border: none;
        outline: none !important;
        border-radius: 25px;
        text-transform: uppercase;
        margin-left: 50px;
    }

    .form-btn button:hover {
        background-color: #f7c434;
        color: #ffffff;
    }

    .form-text.text-start {
        color: red;
        margin-left: 12px;
    }

    /* ------------------- location ---------------- */

    .location-icon {
        margin-right: 20px;
    }

    .location-icon i {
        font-size: 28px;
        color: #ffc435;
    }

    .adress span {
        font-size: 18px;
        font-weight: 600;
    }

    .adress p {
        margin-top: 10px;
        font-size: 16px;
    }

    @media screen and (max-width: 991px) {

        .contact-form {
            width: 100%;
            margin-bottom: 30px;
        }

        .location {
            width: 100%;
        }

    }

    @media screen and (max-width: 414px) {
        .name-email {
            flex-wrap: wrap;
        }

        .name-email .name-email-box {
            width: 100%;
        }

        .math-validiation {
            margin-bottom: 16px;
        }
    }
</style>