import { createGlobalStyle } from "styled-components";

const GlobelStyleCss = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
*{
	margin:0;
	padding:0;
    box-sizing: border-box;
	font-family: 'Inter', sans-serif;
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
	button.btn {
    padding: 0px 26px 0px 26px;
    border-radius: 5px 5px 5px 5px;
    font-family: "Poppins", Sans-serif;
    font-size: 15px;
    line-height: 55px;
    font-weight: 600;
    border: none;
    color: #fff;
} 
.btn_purple { 
    background: rgb(36,57,255);
    background: linear-gradient(90deg, rgba(36,57,255,1) 0%, rgba(144,0,255,1) 100%);
}

button.btn.btn_blue {
    background: #08203A;
} 
}
.swiper-wrapper img{
    border-radius: 10px;overflow: hidden;height: 100%
}

span.swiper-pagination-bullet.swiper-pagination-bullet-active {
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
}

span.swiper-pagination-bullet {
    position: relative;
}

span.swiper-pagination-bullet:after {
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

span.swiper-pagination-bullet.swiper-pagination-bullet-active:after {
    opacity: 1;
    border-width: 3px;
}
}
.swiper-pagination {
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
