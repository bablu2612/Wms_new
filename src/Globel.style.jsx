import { createGlobalStyle } from "styled-components";

const GlobelStyleCss = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
*{
	margin:0;
	padding:0;
    box-sizing: border-box;
	font-family: 'Inter', sans-serif;
}
h1,h2,h3,h4{
    font-family: "Poppins", Sans-serif;
}
.mainbanner {
    background: url(https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h3-bg-slider1.jpg;) no-repeat;
    background-size: cover;
    padding-top: 200px;
	height: 100vh;
}
	.banner_main_section {  
		align-items: center;
      & > div {
		max-width: 50%;
		flex: 0 0 50%;
		width: 100%;
		/* padding: 0 20px; */
      }
	  .slider_section {
	  padding: 10px;
		background: #fff;
		box-shadow: 0 10px 50px rgba(0,10,80,.15);
		border-radius: 10px; 
        width: 100%; 
		.swiper-slide {
			border-radius: 10px;
		}
	  }
	  @media (min-width: 1600px){
		.slider_section {
				min-width: 45vw; 
			}
	  }
	  
    }
	 
	.creactiveSection { 
			h3 {
			background-image: -webkit-gradient(linear, left top, left bottom, from(#2439FF), to(#9000FF));
			background-image: -webkit-linear-gradient(to left, #2439FF, #9000FF);
			background-image: -moz-linear-gradient(to left, #2439FF, #9000FF);
			background-image: -ms-linear-gradient(to left, #2439FF, #9000FF);
			background-image: -o-linear-gradient(to left, #2439FF, #9000FF);
			background-image: linear-gradient(to left, #2439FF, #9000FF);
			filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#2439FF', endColorStr='#9000FF');
			background-color: transparent;
			background-clip: text;
			-o-background-clip: text;
			-ms-background-clip: text;
			-moz-background-clip: text;
			-webkit-background-clip: text;
			text-fill-color: transparent;
			-o-text-fill-color: transparent;
			-ms-text-fill-color: transparent;
			-moz-text-fill-color: transparent;
			-webkit-text-fill-color: transparent;color: #2439FF !important;
			font-family: "Poppins", Sans-serif;
			font-size: 24px;
			margin-bottom: 10px; 
		}
	h2 {
		font-family: "Poppins", Sans-serif;
		font-size: 74px;
		line-height: 82px;
			span {
			color: #372FFF;
			position: relative;
			z-index: 1;
				&:before { 
					content: "";
					background: url(https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h3-shape2.png) no-repeat;
					position: absolute;
					width: 100%;
					height: 40px;
					background-size: contain;
					background-position: center;
					content: '';
					z-index: -1;
					top: 80%;
					left: 0; 
			}
		} 
	} 
	& > p {
		color: #08203A;
		font-size: 20px;
		line-height: 30px;
		margin: 30px 0;
	}
} 



.buttonSections { 
    gap: 20px; 

}
.swiper-wrapper img{
    border-radius: 10px;overflow: hidden;height: 100%;object-fit: cover;
}

span.swiper-pagination-bullet.swiper-pagination-bullet-active, .item--image:before,.item--holder-hover:before  {
    background-image: -webkit-gradient(linear, left top, right top, from(#2439ff), to(#9000ff));
    background-image: -webkit-linear-gradient(to left, #2439ff, #9000ff);
    background-image: -moz-linear-gradient(to left, #2439ff, #9000ff);
    background-image: -ms-linear-gradient(to left, #2439ff, #9000ff);
    background-image: -o-linear-gradient(to left, #2439ff, #9000ff);
    background-image: linear-gradient(to left, #2439ff, #9000ff);
}

 
.swiper-pagination {
	span.swiper-pagination-bullet {
    height: 12px;
    width: 12px;
    /* font-size: 0; */
    padding: 0;
    -webkit-border-radius: 23px;
    -khtml-border-radius: 23px;
    -moz-border-radius: 23px;
    -ms-border-radius: 23px;
    -o-border-radius: 23px;
    border-radius: 23px;
    -webkit-box-shadow: none;
    -khtml-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
    z-index: 1;
    overflow: visible;
    opacity: 1;
    background-color: #08203a; 
    position: relative;
    &:after {
    opacity: 0;
    height: 25px;
    width: 25px;
    border-width: 3px;
    content: '';
    border: 2px solid #2439FF;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -khtml-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    -webkit-border-radius: 46px;
    -khtml-border-radius: 46px;
    -moz-border-radius: 46px;
    -ms-border-radius: 46px;
    -o-border-radius: 46px;
    border-radius: 46px;
    -webkit-transition: .3s cubic-bezier(.24,.74,.58,1);
    -khtml-transition: .3s cubic-bezier(.24,.74,.58,1);
    -moz-transition: .3s cubic-bezier(.24,.74,.58,1);
    -ms-transition: .3s cubic-bezier(.24,.74,.58,1);
    -o-transition: .3s cubic-bezier(.24,.74,.58,1);
    transition: .3s cubic-bezier(.24,.74,.58,1);
} 
}
 
span.swiper-pagination-bullet.swiper-pagination-bullet-active:after {
    opacity: 1;
    border-width: 3px;
}
}
.slider_section .swiper-pagination {
    display: flex;
    justify-content: center;
    gap: 20px;
    top: calc(100% - 40px) !important;
}
.d-flex{
	display: flex;
}
.container{
	max-width: 1280px;    margin: 0 auto;    padding-left: 15px;
    padding-right: 15px;	
}
.w-100 {
    width: 100%;
}

.animated_shape {
    animation: animationFramesFive 12s infinite linear alternate;
    position: absolute;
	right: -20px;
    top: -120px;
    z-index: -1;
}
.creactiveSection {
    position: relative;
	z-index: 1;
}
 .color_purple {
    color: #372FFF;
    position: relative;
    z-index: 1;
    font-family: "Poppins",Sans-serif;
}
.btn_purple { 
    background: rgb(36,57,255);
    background: linear-gradient(90deg, rgba(36,57,255,1) 0%, rgba(144,0,255,1) 100%);
}
.btn {
    padding: 0px 26px 0px 26px;
    border-radius: 5px 5px 5px 5px;
    font-family: "Poppins", Sans-serif;
    font-size: 15px;
    line-height: 55px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    color: #fff;
} 
.btn.btn_blue {
    background: #08203A; 
}
 .btn.btn-dark1.btn_blue {
    height: 36px;
    line-height: 35px;
    text-decoration: none; 
    display: inline-flex;
    padding: 0 15px;
}
.text-center{
    text-align: center;
}
 

.item--image {
    width: 130px;
    height: 130px;
    padding: 3px;
    position: relative;
    margin: 0 auto 24px;
    -webkit-border-radius: 130px;
    -khtml-border-radius: 130px;
    -moz-border-radius: 130px;
    -ms-border-radius: 130px;
    -o-border-radius: 130px;
    border-radius: 130px;
    z-index: 1;
  img {
    border: 7px solid #fff;
    -webkit-border-radius: 130px;
    -khtml-border-radius: 130px;
    -moz-border-radius: 130px;
    -ms-border-radius: 130px;
    -o-border-radius: 130px;
    border-radius: 130px;
    width: 100%;
    height: 100%;
}
&:before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-border-radius: 130px;
    -khtml-border-radius: 130px;
    -moz-border-radius: 130px;
    -ms-border-radius: 130px;
    -o-border-radius: 130px;
    border-radius: 130px;
    background-image: -webkit-gradient(linear, left top, right top, from(#2439ff), to(#9000ff));
    background-image: -webkit-linear-gradient(to left, #2439ff, #9000ff);
    background-image: -moz-linear-gradient(to left, #2439ff, #9000ff);
    background-image: -ms-linear-gradient(to left, #2439ff, #9000ff);
    background-image: -o-linear-gradient(to left, #2439ff, #9000ff);
    background-image: linear-gradient(to left, #2439ff, #9000ff);
}
}




/* Success */ 
.ourPricing {
    background: url("https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h3-bg-section-03.jpg")
      no-repeat;
    background-size: cover;
    padding: 80px 0px 130px 0px;
  }
  
 
  .preparing_class h3 {
    color: #FFFFFF;
    font-family: "Poppins", Sans-serif;
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 14px;
}  
.ct-video-button {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-transform: uppercase;
    color: #fff;
    font-size: 18px;
    display: inline-grid;
     place-content: center;
    position: relative;
    z-index: 1;
                svg.bi.bi-play-fill {
                width: 30px;
                height: 30px;
            }
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, rgba(36,57,255,1) 0%, rgba(144,0,255,1) 100%);
            -webkit-border-radius: 100%;
            -khtml-border-radius: 100%;
            -moz-border-radius: 100%;
            -ms-border-radius: 100%;
            -o-border-radius: 100%;
            border-radius: 100%;
            z-index: -1;
        }
    &:after {
        content: "";
        position: absolute;
        z-index: 0;
        left: 0;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-color: #3630ff;;
        border-radius: 50%;
        animation: pulse-border2 1500ms ease-out infinite;
        -webkit-animation: pulse-border2 1500ms ease-out infinite;
        z-index: -2;
        opacity: .65;
    }

 &:hover:after {
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    -o-animation-play-state: paused;
    animation-play-state: paused
}
} 
.specific_class {
    margin: 0px 0px 34px 0px;
    padding: 0% 16% 0% 16%;
    p {
    text-align: center;
    color: #C6CBDB;
}
}
.ct-video-box {
    margin-bottom: 50px;
}

@keyframes pulse-border2 {
    0% {
        transform: scale(1);
        opacity: .67
    }

    100% {
        transform: scale(2.2);
        opacity: 0
    }
}

@-webkit-keyframes pulse-border2 {
    0% {
        transform: scale(1);
        opacity: .67
    }

    100% {
        transform: scale(2.2);
        opacity: 0
    }
}



.heading_head {
      h3 {
        color: #3630ff;
        font-size: 20px;
        font-family: "Inter", sans-serif;
        position: relative;
        max-width: max-content;
        z-index: 1;
        margin: 0 auto 10px;
        mix-blend-mode: darken;
        &:before {
          content: "";
          background-color: #3630ff;
          width: 280px;
          height: 3px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }
        span{
            position: relative;
            z-index: 9;
            background: #fff;
            padding: 0 10px;
        } 
      }
      h2 {
        font-size: 36px;
        line-height: 48px;
        text-align: center;
        margin-bottom: 40px;
      }
    }

/* 02-06-2023 */
.mainHomepage_class{background: url(https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h3-bg-section-01.jpg)
    no-repeat;}
@keyframes animationFramesFive {
    0% {
        transform: translateY(0)
    }

    25% {
        transform: translateY(-40px)
    }

    50% {
        transform: translateY(0)
    }

    75% {
        transform: translateY(40px)
    }

    100% {
        transform: translateY(0)
    }
}
.row{
	display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
	margin-left: -15px;
	margin-right: -15px;
}
 .py-80{
     padding-top: 80px;
     padding-bottom: 80px;
 }
 .mb-0{
    margin-bottom: 0;
 }




 /* blog page css */
  

section.parent_fq {
    padding: 105px 0px 110px 0px;
}
 
  .grid-item-inner {
    background-color: #fff;
    -webkit-border-radius: 5px 5px 0 0;
    -khtml-border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    -ms-border-radius: 5px 5px 0 0;
    -o-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
    -webkit-box-shadow: 0 20px 50px rgba(0,10,80,6%);
    -khtml-box-shadow: 0 20px 50px rgba(0,10,80,6%);
    -moz-box-shadow: 0 20px 50px rgba(0,10,80,6%);
    -ms-box-shadow: 0 20px 50px rgba(0,10,80,6%);
    -o-box-shadow: 0 20px 50px rgba(0,10,80,6%);
    box-shadow: 0 20px 50px rgba(0,10,80,6%);
    margin-top: 30px;
    margin-bottom: 120px;
    -webkit-transition: .3s cubic-bezier(.24,.74,.58,1);
    -khtml-transition: .3s cubic-bezier(.24,.74,.58,1);
    -moz-transition: .3s cubic-bezier(.24,.74,.58,1);
    -ms-transition: .3s cubic-bezier(.24,.74,.58,1);
    -o-transition: .3s cubic-bezier(.24,.74,.58,1);
    transition: .3s cubic-bezier(.24,.74,.58,1);
}
.item--featured {
    position: relative;
    overflow: hidden;
    -webkit-border-radius: 5px 5px 0 0;
    -khtml-border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    -ms-border-radius: 5px 5px 0 0;
    -o-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
    img {
    width: 100%;
    -webkit-transition: 6s cubic-bezier(.24,.74,.58,1);
    -khtml-transition: 6s cubic-bezier(.24,.74,.58,1);
    -moz-transition: 6s cubic-bezier(.24,.74,.58,1);
    -ms-transition: 6s cubic-bezier(.24,.74,.58,1);
    -o-transition: 6s cubic-bezier(.24,.74,.58,1);
    transition: 6s cubic-bezier(.24,.74,.58,1);
}
} 
.item--title { 
    margin-bottom: 12px;
    a{
        font-size: 22px;
    color: #08203a;
    line-height: 1.36333;
    text-decoration: none;
    }
  
}
  .item-date,   .item-icon-box i {
    background-image: -webkit-linear-gradient(125deg, #2439FF, #9000FF);
    background-image: -moz-linear-gradient(125deg, #2439FF, #9000FF);
    background-image: -ms-linear-gradient(125deg, #2439FF, #9000FF);
    background-image: -o-linear-gradient(125deg, #2439FF, #9000FF);
    background-image: linear-gradient(125deg, #2439FF, #9000FF);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#2439FF', endColorStr='#9000FF');
}
  .item-date {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 60px;
    height: 60px;
    -webkit-border-radius: 4px;
    -khtml-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px; 
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    line-height: 1;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .item-date--day {
    font-weight: 700;
    font-family: poppins,Sans-serif;
    font-size: 24px;
    margin-bottom: 4px;
}
}
.item--holder {
    padding: 30px 20px 38px 28px;
}
.item--meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #666;
    margin-bottom: 18px;
}
 .item-author {
    margin-right: 18px;
}



  .sliderSection .swiper-slide {
    padding: 0 15px;
}
 


.item-author  a,.item-comment  {
    box-shadow: none;
    text-decoration: none;
    color: #666;
    display: flex;
    align-items: center;
} 
 .item-icon-box {
    background-color: rgba(0,108,255,.15);
    width: 35px;
    height: 35px;
    display: inline-block;
    border-radius: 35px;
    line-height: 35px;
    text-align: center;
    margin-right: 6px;
    margin-bottom: 0;
}
.item--content{color: #666;
    margin-bottom: 18px;}
    
 

.sliderSection .swiper.swiper-horizontal {
    margin-bottom: 0;
}

.swiper-wrapper {
    margin-bottom: 150px; 
    button:after {
    height: 26px;
    width: 26px;
    border-width: 3px;
}
}
 
.swiper-pagination span.swiper-pagination-bullet.swiper-pagination-bullet-active  {
    transform: scale(.8);
}
.swiper-pagination span.swiper-pagination-bullet.swiper-pagination-bullet-active:after{
    height: 20px;
    width: 20px;
}
/* end blog page css */


@media (min-width: 768px){
	.col-md-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 50%;
	padding-left: 15px;
	padding-right: 15px;
}

}
`;
export default GlobelStyleCss;
