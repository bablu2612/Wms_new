import React from 'react';

const BlogSection = () => {
    return (
        <div>
            <div class="elementor-widget-container">
                <div class="ct-heading">
                    <div class="ct-heading--inner">
                        <div class="item--text-below"></div>
                        <div class="item--sub-title style-line-leftright">
                            <span> Blog </span>
                        </div>
                        <h3 class="item--title st-default">
                            <span class="ct-text-inner">Trending IT <cite class="ct-text-highlight"> Solution </cite> Article &amp; Tips</span>
                        </h3>
                    </div>
                </div>
            </div>
            <div className='sliderSection'>
                <div class="grid-item-inner ">
                    <div class="item--featured">
                        <a href="https://demo.casethemes.net/itfirm/regional-manager-limited-time-management/" tabindex="0">
                            <img class="" src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/07/h2-blog1-600x405.jpg" width="600" height="405" alt="h2-blog1" /></a>
                        <div class="item-date">
                            <div class="item-date-inner">
                                <div class="item-date--day">08</div>
                                <div class="item-date--month">Dec</div>
                            </div>
                        </div>
                    </div>
                    <div class="item--holder">
                        <div class="item--meta">
                            <div class="item-author">
                                <a href="https://demo.casethemes.net/itfirm/author/admin/" tabindex="0">
                                    <span class="item-icon-box">
                                        <i class="caseicon-user"></i>
                                    </span> Rayan Colins
                                </a>
                            </div>
                            <div class="item-comment">
                                <span class="item-icon-box"><i class="caseicon-comment"></i></span> 2 Comments
                            </div>
                        </div>
                        <h4 class="item--title">
                            <a href="https://demo.casethemes.net/itfirm/regional-manager-limited-time-management/" tabindex="0">Regional Manager &amp; limited time management.</a>
                        </h4>
                        <div class="item--content"> With over a decade experience, we’ve established ourselves as one of the pioneering agencies in the region.…</div>
                        <div class="item--readmore">
                            <a class="btn btn-dark1" href="https://demo.casethemes.net/itfirm/regional-manager-limited-time-management/" tabindex="0"> <span>Read More</span> <i class="ct-icon-plus size-sm space-left"></i> </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogSection;