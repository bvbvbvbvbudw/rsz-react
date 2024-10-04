import React from 'react';

// Styles
import '../assets/css/inter.css'
import '../assets/css/deezer-product.css'
import '../assets/css/boot.css'
import '../assets/css/main.css'

// Components
import Header from "../Components/header/offers/Header";

export default function Main() {
    return (<>
        <Header/>
        <div className="gap-l-top" id="offer_page">
            <div className="offer-page">
                <section className="section-large">
                    <h1 className="heading-1 text-center">
                        Get 1 month of Premium free </h1>
                </section>
                <section className="section-small gap-m-top">
                    <div className="section-disclaimer">
                        <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21ZM11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM12.5 15.5C12.5 16.3284 11.8284 17 11 17C10.1716 17 9.5 16.3284 9.5 15.5C9.5 14.6716 10.1716 14 11 14C11.8284 14 12.5 14.6716 12.5 15.5ZM12 12V5H10V12H12Z"
                                fill="#FE9935"></path>
                        </svg>
                        <p className="disclaimer-txt">Deezer Free is not available in your country. Please choose an
                            offer and start listening.</p>
                    </div>
                </section>
                <section className="section-small gap-m-top">
                    <div className="vertical-stepper-card" id="tnb_reminder">
                        <div className="vertical-stepper-item">
                            <div className="vertical-stepper-item-step">
                                <div className="vertical-stepper-item-step-dot-md">
                                    <svg fill="none" height="16" viewBox="0 0 15 16" width="15"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.41862 1.00891C7.33976 1.02099 7.24976 1.04386 7.17259 1.07988C7.09767 1.11484 7.06301 1.14861 7.04662 1.17155C7.03723 1.18469 6.99826 1.24007 6.99826 1.39983V2.39983H5.99826C5.06271 2.39983 4.3548 2.78204 3.85504 3.42115C3.33682 4.08388 3.00587 5.07747 2.99999 6.30485C2.98703 9.01007 2.31161 11.2189 1 12.3476V13.0004H14V12.3476C12.6884 11.2189 12.013 9.01007 12 6.30485C11.9948 5.20872 11.6709 4.20313 11.1357 3.49624C10.6154 2.80909 9.90007 2.39983 9 2.39983H8V1.39983C8 1.23918 7.96092 1.18374 7.95189 1.17107C7.93599 1.14876 7.90224 1.11565 7.82843 1.08112C7.75229 1.0455 7.66315 1.02269 7.58398 1.01034C7.54688 1.00455 7.51796 1.00199 7.50195 1.00092L7.49322 1.00042C7.47871 1.00138 7.45251 1.00372 7.41862 1.00891ZM5.08982 14.0004H0.576923C0.258297 14.0004 0 13.7593 0 13.462V12.1158C0 11.9527 0.0791687 11.7985 0.215295 11.6962C1.2609 10.9112 1.98687 9.04044 2 6.30006C2.01335 3.51399 3.5 1.39983 5.99826 1.39983C5.99826 0.000415564 7.5 -0.00394627 7.50437 0.000415562C7.50437 0.000415562 9 0.000415564 9 1.39983C11.5 1.39983 12.9878 3.74707 13 6.30006C13.0131 9.04044 13.7391 10.9112 14.7847 11.6962C14.9208 11.7985 15 11.9527 15 12.1158V13.462C15 13.7593 14.7417 14.0004 14.4231 14.0004H9.91278C9.60836 15.5737 8.55415 16.0004 7.5 16.0004C6.0216 16.0004 5.32035 15.166 5.08982 14.0004ZM6.11636 14.0004C6.17766 14.2232 6.26053 14.4018 6.35852 14.538C6.53291 14.7803 6.83242 15.0004 7.5 15.0004C7.98081 15.0004 8.31225 14.8844 8.52621 14.679C8.64788 14.5622 8.79081 14.3594 8.88762 14.0004H6.11636Z"
                                            fill="white"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="vertical-stepper-item-content-sm">
                                <div className="vertical-stepper-item-title">A stress-free trial</div>
                                <div className="vertical-stepper-item-desc-sm">We will remind you 7 days before your
                                    trial ends.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-small section-toggle section-cards gap-l-top padding-l-bottom"
                         data-theme="dark">
                    <div className="offers-section-wave-bg-container">
                        <svg className="offers-section-wave-bg" viewBox="0 0 1440 376"
                             xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <ellipse cx="-.817" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="61.855" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="124.529" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="187.201" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="249.874" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="312.546" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="375.22" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="437.892" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="500.566" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="563.238" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="625.912" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="688.585" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="751.257" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="813.931" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="876.603" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="939.277" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="1001.95" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="1064.62" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="1127.29" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="1189.97" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="1252.64" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="1315.31" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="1377.99" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                                <ellipse cx="1440.66" cy="187.786" rx="48.836" ry="187.786"></ellipse>
                            </g>
                        </svg>
                    </div>
                    <div className="toggle-wrapper" data-theme="dark">
                        <div className="toggle-container">
                            <ul className="toggle-premiumtab" role="tablist">
                                <li aria-controls="tab-monthly" aria-selected="true" data-tracked="true"
                                    data-tracking-action="monthly" data-tracking-category="offers"
                                    id="toggle-tab-monthly" role="tab" tabIndex="0">
                                    <span>Monthly</span>
                                </li>
                                <li aria-controls="tab-annual" aria-selected="false" data-tracked="true"
                                    data-tracking-action="annual" data-tracking-category="offers" id="toggle-tab-annual"
                                    role="tab" tabIndex="0">
                                    <span>Annual</span>
                                    <span className="toggle-tag">-25%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="slider" style={{position: "relative"}}>
                        <ul aria-hidden="false" aria-labelledby="tab-monthly" className="cards-container slider-item"
                            role="tabpanel">
                            <li className="card-container card-container-premium-group">
                                <div className="unlogged-card">
                                    <div className="unlogged-card-folded-content">
<span className="unlogged-card-folded-title">
</span>
                                        <span className="icon icon-chevron-down"></span>
                                    </div>
                                    <div className="unlogged-card-header fold-hidden">
                                        <a href="offers/premium.html">
                                            <h2 className="unlogged-card-title">
                                                Premium </h2>
                                        </a>
                                        <span className="unlogged-card-tag">1 account</span>
                                    </div>
                                    <div className="unlogged-card-description fold-hidden">
                                        <a className="unlogged-card-caption" href="offers/premium.html">1 month
                                            free </a>
                                        <a className="unlogged-card-second-caption" href="offers/premium.html">
                                            then 23,99 zł/month. </a>
                                    </div>
                                    <div className="fold-hidden w-full">
                                        <a className="tempo-btn tempo-btn-l tempo-btn-phone-s tempo-btn-theme w-full"
                                           data-tracked="true" data-tracking-action="premium"
                                           data-tracking-category="offers-selection"
                                           href="https://account.deezer.com/en/signup/?referer=http%3A%2F%2Fwww.deezer.com%2Fen%2Foffers&amp;pay=1&amp;redirect_uri=https%3A%2F%2Fwww.deezer.com%2Fpayment%2Fgo.php%3Fid%3D1000001%26rg%3D1%26origin%3Doffers-page-deezer-premium%26user_just_logged%3D1%26pay%3D1%26referer%3Dhttp%253A%252F%252Fwww.deezer.com%252Fen%252Foffers">
                                            Try for free </a>
                                    </div>
                                    <div className="fold-hidden">
                                        <a className="unlogged-card-bottom-link" data-tracked="true"
                                           data-tracking-action="learn-more-premium"
                                           data-tracking-category="offers-discover" href="offers/premium.html">
                                            Learn more </a>
                                    </div>
                                </div>
                            </li>
                            <li className="card-container card-container-premium-group">
                                <div className="unlogged-card foldable folded" data-unfold-action="display-student">
                                    <div className="unlogged-card-folded-content">
<span className="unlogged-card-folded-title">
        Student discount      </span>
                                        <div className="unlogged-card-folded-badge">-50%</div>
                                        <span className="icon icon-chevron-down"></span>
                                    </div>
                                    <div className="unlogged-card-header fold-hidden">
                                        <a href="offers/student.html">
                                            <h2 className="unlogged-card-title">
                                                Student </h2>
                                        </a>
                                        <span className="unlogged-card-tag">1 account</span>
                                    </div>
                                    <div className="unlogged-card-description fold-hidden">
                                        <a className="unlogged-card-caption" href="offers/student.html">1 month
                                            free </a>
                                        <a className="unlogged-card-second-caption" href="offers/student.html">
                                            then 10,99 zł/month. </a>
                                    </div>
                                    <div className="fold-hidden w-full">
                                        <a className="tempo-btn tempo-btn-l tempo-btn-phone-s tempo-btn-theme w-full"
                                           data-tracked="true" data-tracking-action="student"
                                           data-tracking-category="offers-selection"
                                           href="https://account.deezer.com/en/signup/?referer=http%3A%2F%2Fwww.deezer.com%2Fen%2Foffers&amp;pay=1&amp;redirect_uri=https%3A%2F%2Fwww.deezer.com%2Fpayment%2Fgo.php%3Fid%3D1005001%26rg%3D1%26origin%3Doffers-page-deezer-student%26user_just_logged%3D1%26pay%3D1%26referer%3Dhttp%253A%252F%252Fwww.deezer.com%252Fen%252Foffers">
                                            Try for free </a>
                                    </div>
                                    <div className="fold-hidden">
                                        <a className="unlogged-card-bottom-link" data-tracked="true"
                                           data-tracking-action="learn-more-student"
                                           data-tracking-category="offers-discover" href="offers/student.html">
                                            Learn more </a>
                                    </div>
                                </div>
                            </li>
                            <li className="card-container card-container-family-group">
                                <div className="unlogged-card">
                                    <div className="unlogged-card-folded-content">
<span className="unlogged-card-folded-title">
</span>
                                        <span className="icon icon-chevron-down"></span>
                                    </div>
                                    <div className="unlogged-card-header fold-hidden">
                                        <a href="offers/family.html">
                                            <h2 className="unlogged-card-title">
                                                Family </h2>
                                        </a>
                                        <span className="unlogged-card-tag">6 accounts</span>
                                    </div>
                                    <div className="unlogged-card-description fold-hidden">
                                        <a className="unlogged-card-caption" href="offers/family.html">1 month free </a>
                                        <a className="unlogged-card-second-caption" href="offers/family.html">
                                            then 39,99 zł/month. </a>
                                    </div>
                                    <div className="fold-hidden w-full">
                                        <a className="tempo-btn tempo-btn-l tempo-btn-phone-s tempo-btn-theme w-full"
                                           data-tracked="true" data-tracking-action="family"
                                           data-tracking-category="offers-selection"
                                           href="https://account.deezer.com/en/signup/?referer=http%3A%2F%2Fwww.deezer.com%2Fen%2Foffers&amp;pay=1&amp;redirect_uri=https%3A%2F%2Fwww.deezer.com%2Fpayment%2Fgo.php%3Fid%3D1000006%26rg%3D1%26origin%3Doffers-page-deezer-family%26user_just_logged%3D1%26pay%3D1%26referer%3Dhttp%253A%252F%252Fwww.deezer.com%252Fen%252Foffers">
                                            Try for free </a>
                                    </div>
                                    <div className="fold-hidden">
                                        <a className="unlogged-card-bottom-link" data-tracked="true"
                                           data-tracking-action="learn-more-family"
                                           data-tracking-category="offers-discover" href="offers/family.html">
                                            Learn more </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul aria-hidden="true" aria-labelledby="tab-annual" className="cards-container slider-item"
                            role="tabpanel" style={{display: "none"}}>
                            <li className="card-container card-container-premium-group">
                                <div className="unlogged-card">
                                    <div className="unlogged-card-folded-content">
<span className="unlogged-card-folded-title">
        Annual discount      </span>
                                        <div className="unlogged-card-folded-badge">-25%</div>
                                        <span className="icon icon-chevron-down"></span>
                                    </div>
                                    <div className="unlogged-card-header fold-hidden">
                                        <a href="offers/annual-plan.html">
                                            <h2 className="unlogged-card-title">
                                                Premium </h2>
                                        </a>
                                        <span className="unlogged-card-tag">1 account</span>
                                    </div>
                                    <div className="unlogged-card-description fold-hidden">
                                        <a className="unlogged-card-caption" href="offers/annual-plan.html">1 month
                                            free </a>
                                        <a className="unlogged-card-second-caption" href="offers/annual-plan.html">
                                            then 17,92 zł/month when paid annually (214,99 zł/year) </a>
                                    </div>
                                    <div className="fold-hidden w-full">
                                        <a className="tempo-btn tempo-btn-l tempo-btn-phone-s tempo-btn-theme w-full"
                                           data-tracked="true" data-tracking-action="premium-annual"
                                           data-tracking-category="offers-selection"
                                           href="https://account.deezer.com/en/signup/?referer=http%3A%2F%2Fwww.deezer.com%2Fen%2Foffers&amp;pay=1&amp;redirect_uri=https%3A%2F%2Fwww.deezer.com%2Fpayment%2Fgo.php%3Fcip%3DMTczNzgyYzkyNTAwOGRhYzAxMWMyNzhmMjVkMTNlNThjMGY4YzI0MDRiNzFlY2M2ZDBjNjdlNTUyM2VkNWNhNmVhYzM0MzNkY2I1ODBhYjA0YjlhN2QzZDA4ZjZmMjk2YTE1MTE3MGVhOGE5NjVlODk2ODM1MTAyNzk5NWNhZjkyZjMwNGYwMTVlMzllMzQxYzIwM2Q3ZGUxYWE1YmYxNTdmZjYwM2MzYjI1NGIyMzU3NDc5NmU1ODYxMmVlYWE1Mzc4ODEzM2I2YjAzMGU1MTI5YjY3YTk5OTdlOGQ4NDQ%253D%26rg%3D1%26origin%3Doffers-page-deezer-premium-annual%26user_just_logged%3D1%26pay%3D1%26referer%3Dhttp%253A%252F%252Fwww.deezer.com%252Fen%252Foffers">
                                            Try for free </a>
                                    </div>
                                    <div className="fold-hidden">
                                        <a className="unlogged-card-bottom-link" data-tracked="true"
                                           data-tracking-action="learn-more-premium-annual"
                                           data-tracking-category="offers-discover" href="offers/annual-plan.html">
                                            Learn more </a>
                                    </div>
                                </div>
                            </li>
                            <li className="card-container card-container-family-group">
                                <div className="unlogged-card">
                                    <div className="unlogged-card-folded-content">
<span className="unlogged-card-folded-title">
        Annual discount      </span>
                                        <div className="unlogged-card-folded-badge">-8%</div>
                                        <span className="icon icon-chevron-down"></span>
                                    </div>
                                    <div className="unlogged-card-header fold-hidden">
                                        <a href="offers/family/annual-plan.html">
                                            <h2 className="unlogged-card-title">
                                                Family </h2>
                                        </a>
                                        <span className="unlogged-card-tag">6 accounts</span>
                                    </div>
                                    <div className="unlogged-card-description fold-hidden">
                                        <a className="unlogged-card-caption" href="offers/family/annual-plan.html">1
                                            month free </a>
                                        <a className="unlogged-card-second-caption"
                                           href="offers/family/annual-plan.html">
                                            then 36,57 zł/month when paid annually (438,89 zł/year) </a>
                                    </div>
                                    <div className="fold-hidden w-full">
                                        <a className="tempo-btn tempo-btn-l tempo-btn-phone-s tempo-btn-theme w-full"
                                           data-tracked="true" data-tracking-action="family-annual-plan"
                                           data-tracking-category="offers-selection"
                                           href="https://account.deezer.com/en/signup/?referer=http%3A%2F%2Fwww.deezer.com%2Fen%2Foffers&amp;pay=1&amp;redirect_uri=https%3A%2F%2Fwww.deezer.com%2Fpayment%2Fgo.php%3Fcip%3DMTczNzgyYzkyNTAwOGRhYzAxMWMyNzhmMjVkMTNlNTgwMjViNTZjNDlmMWI1OTY3YzdlZDQ4ZWJhMzcwNjM1ODUxNTczNzMwMTkzNjhkMzU5MGMxZDM3YjdhOGI2MjY2ZTdhNDQ5N2Q1MWE5MWQ5YmU1NDM2NmJhYjI1Nzc0OTdmZDQzMzFiNTdkZDM3Y2FiZDA0YzA3MGVhMGRkNDRhYmM2MGE2YmQ5MTQ3YWJiNmIzYzU0OTY2NDYxN2VjNTNkZWZhMWIzNDY5NzU4OTgwMGIzZjg4NDNlMTZhNzgwMmM%253D%26rg%3D1%26origin%3Doffers-page-deezer-family-annual-plan%26user_just_logged%3D1%26pay%3D1%26referer%3Dhttp%253A%252F%252Fwww.deezer.com%252Fen%252Foffers">
                                            Try for free </a>
                                    </div>
                                    <div className="fold-hidden">
                                        <a className="unlogged-card-bottom-link" data-tracked="true"
                                           data-tracking-action="learn-more-family-annual-plan"
                                           data-tracking-category="offers-discover"
                                           href="offers/family/annual-plan.html">
                                            Learn more </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section
                    className="bg-secondary tempo-section section-padding padding-xl-vertical tempo-section-rounded-down"
                    data-theme="light">
                    <div className="section-split">
                        <div className="tempo-section-column-left stack-m-vertical">
                            <h2 className="heading-2">
                                Gift card </h2>
                            <div className="paragraph">
                                What could be better than 3, 6 or 12 months of unlimited music?
                            </div>
                            <div className="tempo-section-cta-container stack-s-collapsed-mobile">
                                <a className="tempo-btn tempo-btn-m tempo-btn-theme" data-tracked="true"
                                   data-tracking-action="get-voucher" data-tracking-category="offers-selection"
                                   data-tracking-label=""
                                   href="https://account.deezer.com/en/signup/?referer=http%3A%2F%2Fwww.deezer.com%2Fen%2Foffers&amp;pay=1&amp;redirect_uri=https%3A%2F%2Fwww.deezer.com%2Fpayment%2Fgo.php%3Fid%3D1%26gift%3D1%26origin%3Doffer_gift%26gift%3D1%26user_just_logged%3D1%26pay%3D1%26referer%3Dhttp%253A%252F%252Fwww.deezer.com%252Fen%252Foffers">
                                    Get a gift card </a>
                                <a className="tempo-btn tempo-btn-m tempo-link-btn-neutral" data-tracked="true"
                                   data-tracking-action="activate-voucher" data-tracking-category="offers-discover"
                                   data-tracking-label="" href="../gift/index1a03.html?page=offer_gift">
                                    Activate my gift card </a>
                            </div>
                        </div>
                        <div className="tempo-section-column-right">
                            <div className="tempo-section-illustration">
                                <div className="animated-group-gift-card">
                                    <div className="animated-gift-card">
                                        <svg fill="none" viewBox="0 0 314 359" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#a)">
                                                <path d="m64.6.7 248 52.6L248.4 357 .3 304.6z" fill="#A238FF"></path>
                                                <path clip-rule="evenodd"
                                                      d="M150.3 278.4c-5.4 4.8-11 7-16.1 5.8-5-1-9.2-5.1-12.2-11.5-1.3.2-2.6.2-3.8 0-4.6-1-8.2-5.1-10.7-11.5-1.6.4-3.1.5-4.6.2-4.7-1-8.3-5.7-10.5-12.9-2 1.2-4 1.6-5.9 1.2-4.4-.9-7.4-6.4-8.9-14.7-2.5 2.5-5 3.6-7.1 3.2-4.5-1-7.1-8.4-7.5-19.2-3 5.3-6 8.3-8.6 7.7-5.5-1.1-6.5-18-2.4-37.7 4.2-19.6 12-34.6 17.5-33.5 2.6.6 4.1 4.5 4.7 10.6 4.7-9.7 10.1-15.5 14.6-14.5 2.2.4 4 2.5 5.2 5.8 4.8-7 9.8-10.8 14.2-9.9 1.8.4 3.4 1.6 4.8 3.4 5-5.7 10.1-8.5 14.9-7.5 1.5.3 2.9 1 4.2 2 4.8-4.7 9.8-7 14.3-6 1.2.3 2.4.7 3.4 1.4 5.4-4.6 10.9-6.7 16-5.6 5.1 1.1 9.3 5.4 12.4 12 1.5-.4 3-.4 4.5-.1 4.5 1 8.1 5 10.6 11.4 1.6-.5 3.2-.6 4.7-.3 4.8 1 8.3 5.8 10.6 13 2-1.2 3.9-1.6 5.7-1.2 4.4 1 7.5 6.4 9 14.8 2.4-2.5 4.9-3.7 7.1-3.2 4.5 1 7.1 8.4 7.5 19.1 3-5.3 6-8.2 8.6-7.7 5.4 1.2 6.5 18 2.3 37.7-4.1 19.7-12 34.7-17.4 33.5-2.6-.5-4.2-4.5-4.7-10.5-4.8 9.7-10.1 15.4-14.6 14.5-2.3-.5-4-2.6-5.3-5.8-4.7 7-9.7 10.8-14.1 9.8a8.1 8.1 0 0 1-4.9-3.4c-5 5.6-10 8.4-14.8 7.4-1.5-.3-2.9-1-4.1-2-5 4.8-9.9 7.1-14.5 6.1-1.4-.3-2.8-1-4-1.9Zm100-18.3c3.1.6 8.3-11.3 11.6-26.7 3.2-15.4 3.3-28.4.2-29-3.1-.7-8.3 11.2-11.6 26.6-3.2 15.4-3.3 28.4-.2 29ZM37.9 215c3 .6 8.3-11.3 11.5-26.7 3.3-15.4 3.4-28.4.3-29-3.1-.7-8.3 11.2-11.6 26.6-3.2 15.4-3.4 28.4-.2 29Z"
                                                      fill="#000" fill-rule="evenodd"></path>
                                                <path
                                                    d="M150.3 278.4Zm-28.3-5.7Zm-14.5-11.5v-.1Zm-15.1-12.7ZM77.6 235v-.2.1ZM63 219v-.3.3Zm11.2-53v.3-.2Zm19.8-8.6v.1h.1v-.1Zm19-6.5v.2-.1Zm19-5.4h.1Zm17.8-4.7v.1h.1Zm28.4 6.3v.1Zm15.1 11.4Zm15.3 12.7h-.1v.1h.1v-.1Zm14.7 13.6h-.1v.1h.1v-.1Zm14.6 16v.2-.2Zm-11.2 52.9v-.3l-.1.3Zm-19.9 8.7h.1v-.2l-.1.1Zm-19 6.4h.1v-.2l-.1.1Zm-19 5.4h.1v-.1ZM38.2 186Zm96 98.3c5.3 1 10.8-1 16.3-5.8l-.1-.1c-5.5 4.7-11 6.8-16 5.7l-.1.2ZM122 272.8c3 6.3 7.2 10.4 12.3 11.5v-.2c-5-1-9.1-5-12.2-11.4Zm-3.7 0c1.2.2 2.5.2 3.8 0v-.1a12 12 0 0 1-3.8-.1v.1Zm-10.8-11.6c2.5 6.4 6.2 10.6 10.8 11.5v-.1c-4.5-1-8.1-5-10.6-11.5l-.2.1Zm-4.6.2c1.6.4 3.1.3 4.7-.2v-.1c-1.6.4-3.1.5-4.6.2v.1Zm-10.5-12.8c2.2 7.1 5.8 11.8 10.5 12.8v-.1c-4.6-1-8.1-5.6-10.4-12.8h-.1Zm-5.8 1.2a8 8 0 0 0 5.9-1.2v-.1a8 8 0 0 1-5.8 1.2v.1Zm-9-14.8a31 31 0 0 0 3.4 10.2c1.5 2.5 3.4 4.1 5.6 4.6v-.1c-2.1-.5-4-2-5.5-4.6a30 30 0 0 1-3.3-10.1h-.2Zm-7 3.2c2.2.5 4.7-.7 7.2-3.2h-.2c-2.4 2.4-4.8 3.6-7 3.1v.1ZM62.8 219c.2 5.4 1 10 2.2 13.3 1.3 3.3 3 5.5 5.3 6v-.2c-2.1-.5-3.9-2.5-5.2-5.9-1.2-3.3-2-7.8-2.1-13.2h-.2Zm-8.5 7.8c1.3.3 2.7-.3 4.2-1.7 1.5-1.3 3-3.4 4.4-6v-.1c-1.6 2.6-3 4.7-4.5 6-1.5 1.3-2.8 2-4 1.7l-.1.1ZM52 189c-2.1 9.8-2.9 19-2.5 25.8.3 3.4.8 6.3 1.6 8.3.8 2.1 1.9 3.4 3.3 3.7v-.1c-1.3-.3-2.4-1.6-3.2-3.6a28 28 0 0 1-1.5-8.3c-.4-6.8.3-16 2.4-25.8H52Zm17.5-33.6c-1.4-.3-3 .5-4.5 2-1.6 1.6-3.2 4-4.8 7-3.1 6.1-6.1 14.8-8.2 24.6h.1a99.7 99.7 0 0 1 8.3-24.5c1.5-3 3.2-5.4 4.7-7 1.6-1.5 3-2.2 4.4-2Zm4.8 10.6c-.3-3-.8-5.5-1.6-7.3-.8-1.8-1.9-3-3.2-3.3v.2c1.2.2 2.3 1.3 3 3.1a22 22 0 0 1 1.6 7.4h.2Zm14.5-14.5c-2.3-.5-4.8.7-7.3 3.3-2.5 2.5-5 6.4-7.4 11.2h.2c2.3-4.8 4.9-8.6 7.3-11.1 2.5-2.6 5-3.7 7.2-3.3v-.1Zm5.3 5.9c-1.2-3.3-3-5.4-5.3-6v.2c2.2.5 4 2.5 5.2 5.8h.1Zm14.1-10c-2.2-.4-4.6.3-7 2a31 31 0 0 0-7.2 8h.1c2.4-3.5 4.8-6.2 7.2-7.9 2.4-1.7 4.7-2.4 6.9-2Zm4.8 3.5c-1.3-1.9-3-3-4.8-3.5v.2a8 8 0 0 1 4.7 3.4l.1-.1Zm14.9-7.6c-4.8-1-10 1.9-15 7.6h.1c5-5.6 10.2-8.4 14.8-7.4v-.2Zm4.2 2.1a9.8 9.8 0 0 0-4.2-2.1v.2c1.5.3 2.9 1 4.1 2h.1Zm14.3-6c-4.5-1-9.5 1.3-14.4 6l.1.1c4.9-4.7 9.8-7 14.3-6v-.2Zm3.5 1.4a10 10 0 0 0-3.5-1.5v.2c1.2.2 2.3.7 3.4 1.4v-.1Zm15.9-5.7c-5.1-1-10.6 1-16 5.7h.1c5.4-4.5 10.8-6.6 15.9-5.5v-.2Zm12.5 12c-3-6.6-7.3-10.9-12.5-12v.2c5.1 1 9.3 5.3 12.3 11.9h.2Zm4.4 0c-1.5-.4-3-.4-4.5 0v.1c1.5-.3 3-.3 4.5 0v-.2Zm10.7 11.3c-2.5-6.3-6.1-10.4-10.7-11.4v.2c4.5 1 8 5 10.6 11.3h.1Zm4.7-.2a9.8 9.8 0 0 0-4.8.2v.1c1.6-.4 3.2-.5 4.7-.2v-.1Zm10.5 13c-2.2-7.3-5.8-12-10.5-13v.1c4.6 1 8.2 5.7 10.4 13l.1-.1Zm5.8-1.3a8 8 0 0 0-5.9 1.2l.1.2a8 8 0 0 1 5.7-1.2v-.2Zm9 14.9a31 31 0 0 0-3.4-10.2c-1.5-2.6-3.4-4.2-5.7-4.7v.2c2.2.4 4 2 5.5 4.5 1.5 2.6 2.7 6 3.4 10.2h.1Zm7-3.3c-2.2-.5-4.7.7-7.2 3.2l.1.1c2.5-2.5 5-3.6 7.1-3.1v-.2Zm7.6 19.2c-.2-5.4-1-10-2.2-13.3-1.3-3.3-3-5.4-5.4-5.9v.2c2.2.4 4 2.5 5.2 5.8a42 42 0 0 1 2.2 13.2h.2Zm8.5-7.8c-1.3-.2-2.8.4-4.2 1.7-1.5 1.4-3 3.4-4.5 6.1h.2c1.4-2.6 3-4.6 4.4-6 1.4-1.3 2.8-1.9 4-1.6v-.2Zm2.4 37.8c2-9.8 2.9-19 2.4-25.8-.2-3.4-.7-6.2-1.5-8.3-.8-2-2-3.4-3.3-3.7v.2c1.3.3 2.3 1.5 3.1 3.6a27 27 0 0 1 1.6 8.2c.4 6.8-.4 16-2.4 25.8h.1Zm-17.6 33.6c1.5.3 3-.4 4.6-2 1.5-1.6 3.2-4 4.7-7 3.2-6 6.2-14.7 8.3-24.6h-.2c-2 9.8-5 18.5-8.2 24.6-1.6 3-3.2 5.4-4.7 6.9-1.6 1.5-3 2.2-4.4 2v.1Zm-4.7-10.6c.3 3 .8 5.5 1.6 7.4.8 1.8 1.8 3 3.1 3.2v-.1c-1.2-.3-2.2-1.4-3-3.2-.7-1.8-1.3-4.3-1.6-7.3h-.1ZM212 268.3c2.2.4 4.7-.8 7.2-3.3a45 45 0 0 0 7.4-11.3h-.1a43 43 0 0 1-7.4 11.2c-2.5 2.5-5 3.7-7.1 3.2v.2Zm-5.3-6c1.2 3.4 3 5.5 5.3 6v-.2c-2.2-.5-4-2.5-5.2-5.8h-.1Zm-14.1 10c2.2.5 4.6-.2 7-2a31 31 0 0 0 7.2-7.9h-.1a30.8 30.8 0 0 1-7.2 7.8c-2.4 1.7-4.7 2.4-7 2v.1Zm-5-3.5c1.4 1.9 3 3.1 5 3.5v-.1a8 8 0 0 1-4.8-3.5l-.1.1Zm-14.7 7.5c4.8 1 10-1.8 14.9-7.5h-.1c-5 5.6-10.1 8.4-14.7 7.4v.1Zm-4.2-2c1.3 1 2.7 1.7 4.2 2v-.1c-1.4-.3-2.8-1-4-2h-.2Zm-14.4 6.1c4.6 1 9.6-1.3 14.5-6.2-5 4.7-9.9 7-14.4 6v.2Zm-4.1-1.9c1.3 1 2.6 1.6 4.1 2v-.2c-1.4-.3-2.8-1-4-2l-.1.2Zm111.5-45.1c-1.7 7.7-3.8 14.5-5.8 19.3-1 2.4-2.1 4.3-3.1 5.6l-1.4 1.4c-.4.3-.8.4-1.2.3v.1c.4.1.8 0 1.3-.3s1-.8 1.4-1.4c1-1.3 2-3.2 3-5.6 2.2-4.8 4.3-11.7 6-19.4h-.2Zm.3-29c.3.1.7.4 1 .8.2.4.5 1 .7 1.8.3 1.6.5 3.7.5 6.4 0 5.2-.9 12.3-2.5 20h.1a97.6 97.6 0 0 0 2.5-20 28 28 0 0 0-.5-6.4c-.2-.8-.4-1.4-.7-1.9-.3-.4-.7-.7-1-.8l-.1.1ZM250.6 231c1.6-7.7 3.8-14.5 5.8-19.3 1-2.4 2.1-4.3 3.1-5.6l1.4-1.4 1.2-.3v-.1c-.4-.1-.8 0-1.3.3s-1 .8-1.4 1.4c-1 1.3-2 3.2-3.1 5.6-2 4.9-4.2 11.7-5.8 19.4h.1Zm-.3 29c-.4 0-.7-.3-1-.8a6 6 0 0 1-.7-1.8 34 34 0 0 1-.5-6.3c0-5.3.9-12.4 2.5-20l-.1-.1c-1.7 7.7-2.5 14.8-2.6 20 0 2.7.2 4.9.6 6.4.2.8.4 1.5.7 2 .3.4.7.7 1 .8l.1-.2Zm-201-71.6c-1.6 7.7-3.7 14.5-5.8 19.3-1 2.4-2 4.3-3 5.6l-1.4 1.4c-.5.3-.9.4-1.2.3v.1c.4.1.8 0 1.3-.3l1.4-1.4c1-1.3 2-3.2 3-5.6a96 96 0 0 0 5.9-19.4h-.1Zm.4-29c.3.1.6.4 1 .8l.6 1.8c.4 1.6.6 3.7.6 6.4 0 5.2-1 12.3-2.5 20h.1c1.6-7.7 2.5-14.8 2.5-20 0-2.7-.1-4.9-.5-6.4-.2-.8-.4-1.4-.7-1.9-.3-.4-.7-.7-1.1-.8v.1ZM38.2 186c1.6-7.7 3.7-14.5 5.8-19.3 1-2.4 2.1-4.3 3-5.6l1.5-1.4c.4-.3.8-.4 1.2-.3v-.1c-.4-.1-.9 0-1.3.3-.5.3-1 .8-1.4 1.4-1 1.3-2 3.2-3.1 5.6-2.1 4.9-4.2 11.7-5.9 19.4h.2Zm-.3 29c-.4 0-.7-.3-1-.8a6 6 0 0 1-.7-1.8c-.4-1.6-.5-3.7-.5-6.3 0-5.3.9-12.4 2.5-20l-.2-.1a114 114 0 0 0-2.5 20c0 2.7.2 4.9.6 6.4.1.8.4 1.4.7 1.9.3.5.6.8 1 .8v-.1Zm62.8-108.6 31 6.6 2.2-10.2-16.4-3.5 1-4.6 15.4 3.2 1.8-8.3-15.4-3.3.9-4.3 16.4 3.4 2.2-10.1-31.1-6.6-8 37.7Zm34.6 7.3 31 6.6 2.2-10.2-16.4-3.5 1-4.6 15.4 3.3 1.8-8.4-15.4-3.2.9-4.4 16.4 3.5 2.1-10.2-31-6.6-8 37.7ZM279 144.2a116 116 0 0 0-5-20.7c5-.4 8.4-2.8 9.3-7.3 1.5-6.8-4.2-11.4-14.2-13.5l-20.5-4.4-8 37.7 14.7 3.2 3.3-15.7a78.7 78.7 0 0 1 4 17.2l16.5 3.5Zm-19.3-26 1.4-6.6 5.1 1.1c2.2.5 3.1 1.9 2.7 4-.5 2.2-2 3.1-4.1 2.7l-5.1-1.1ZM206 128.7l31 6.6 2.2-10.2-16.4-3.5 1-4.6 15.4 3.2 1.8-8.3-15.5-3.3 1-4.3 16.4 3.5 2.1-10.2-31-6.6-8 37.7Zm-30.3-35.2 15.2 3.2a73.2 73.2 0 0 0-19.2 14.1l-2.1 10.2 33.3 7 2.2-10.1-16.7-3.6a92 92 0 0 1 20.4-13.8l2.1-10.2-33-7-2.2 10.2ZM86.5 64l-19-4-8 37.7 19 4c11.7 2.5 21.6-3.6 24-14.6 2.3-11.1-4.3-20.7-16-23.1Zm-6.7 27.3-3.4-.7 3.7-17.3 3.4.7c3.7.8 5.1 3.6 3.8 9.9-1.3 6.2-3.8 8.2-7.5 7.4Z"
                                                    fill="#000"></path>
                                                <path
                                                    d="m100.7 106.3 31 6.6 2.2-10.2-16.4-3.5 1-4.6 15.4 3.2 1.7-8.3-15.4-3.2 1-4.4 16.3 3.5 2.2-10.2-31-6.6-8 37.7Zm34.5 7.3 31 6.6 2.2-10.2-16.4-3.5 1-4.6 15.4 3.3 1.8-8.4-15.4-3.2.9-4.4 16.4 3.5 2.1-10.2-31-6.6-8 37.7ZM278.9 144c-.9-6.1-2.6-13-5-20.7 4.9-.3 8.3-2.7 9.2-7.2 1.5-6.8-4.2-11.4-14.1-13.5l-20.6-4.4-8 37.7 14.7 3.1 3.3-15.6a78.6 78.6 0 0 1 4 17.2l16.5 3.5Zm-19.4-25.8 1.4-6.7 5.1 1.1c2.2.5 3.1 1.9 2.7 4-.5 2.2-2 3.1-4 2.7l-5.2-1.1Zm-53.6 10.4 31 6.6L239 125l-16.3-3.5 1-4.6L239 120l1.7-8.3-15.4-3.3 1-4.3 16.3 3.5 2.2-10.2-31-6.6-8 37.7Zm-30.3-35.2 15.2 3.2a73.1 73.1 0 0 0-19.2 14.1l-2.1 10.2 33.3 7 2.2-10.1-16.7-3.6a92 92 0 0 1 20.4-13.8l2.1-10.1-33-7-2.2 10.1ZM86.4 63.9l-18.9-4-8 37.7 19 4C90.2 104 100 98 102.5 87c2.3-11-4.4-20.6-16-23.1Zm-6.6 27.3-3.4-.7 3.7-17.3 3.4.7c3.7.8 5.1 3.7 3.8 9.9-1.3 6.2-3.8 8.2-7.5 7.4Z"
                                                    fill="#000"></path>
                                                <path
                                                    d="m187.3 63.7 21.7 4.6c5.2 1.1 4 6.3 4 6.3l-.4 2.2c-1 5.2-6.3 4.1-6.3 4.1l-56.6-12c-5.2-1-4.1-6.3-4.1-6.3l.5-2.2c1-5.2 6.2-4 6.2-4l22.3 4.6.1-.2a6.4 6.4 0 1 1 12.6 2.7v.2Z"
                                                    fill="#313131" opacity=".4"></path>
                                                <path
                                                    d="M142.6 243.3c-4-.9-7.3-2.7-9.9-5.4a23.2 23.2 0 0 1-5.5-10.7c-1-4.2-1-8.9-.1-14l16 3.5c-1.4 7.6-.6 11.7 2.4 12.3 1.4.3 2.8-.3 4-2a20 20 0 0 0 3-7.7c.7-3.1.7-5.4 0-7-.6-1.4-2-2.4-4.2-2.9l-7.8-1.6 2.6-12.3 7.8 1.7c2 .4 3.6 0 4.8-1 1.2-1.2 2-3.3 2.7-6.4.7-3.1.9-5.5.4-7.2-.3-1.7-1.2-2.8-2.5-3-1.5-.3-2.8.3-4 2a27.5 27.5 0 0 0-3.3 8l-15.9-3.3a32.1 32.1 0 0 1 10.6-17.1c4.9-3.7 10.4-5 16.5-3.6a20 20 0 0 1 15.7 23.8 22 22 0 0 1-5.5 10.6 16.4 16.4 0 0 1-9.5 5 16 16 0 0 1 7.1 8.3c1.5 3.5 1.7 7.5.8 11.8a24 24 0 0 1-5.3 11 21.2 21.2 0 0 1-21 7.2Z"
                                                    fill="#fff"></path>
                                            </g>
                                            <defs>
                                                <clippath id="a">
                                                    <rect fill="#fff" height="311.6" rx="10.1"
                                                          transform="rotate(12 64.6 .7)" width="254.3" x="64.6"
                                                          y=".7"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="animated-gift-card">
                                        <svg fill="none" viewBox="0 0 266 320" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#b)">
                                                <path d="m11.4 0 253.5 8.5L254.4 319 1 310.4z" fill="#1B191F"></path>
                                                <ellipse cx="132.2" cy="192.3" fill="#A238FF" rx="22.6" ry="96.2"
                                                         transform="rotate(92 132.2 192.3)"></ellipse>
                                                <ellipse cx="130.3" cy="248.6" fill="#A238FF" rx="15.3" ry="64.8"
                                                         transform="rotate(92 130.3 248.6)"></ellipse>
                                                <ellipse cx="131.6" cy="211.1" fill="#A238FF" rx="20.2" ry="85.8"
                                                         transform="rotate(92 131.6 211)"></ellipse>
                                                <ellipse cx="131" cy="229.8" fill="#A238FF" rx="17.7" ry="75.3"
                                                         transform="rotate(92 131 229.8)"></ellipse>
                                                <ellipse cx="134.1" cy="136" fill="#A238FF" rx="15.3" ry="64.8"
                                                         transform="rotate(-88 134.1 136)"></ellipse>
                                                <ellipse cx="132.9" cy="173.5" fill="#A238FF" rx="20.2" ry="85.8"
                                                         transform="rotate(-88 132.9 173.5)"></ellipse>
                                                <ellipse cx="133.5" cy="154.8" fill="#A238FF" rx="17.7" ry="75.3"
                                                         transform="rotate(-88 133.5 154.8)"></ellipse>
                                                <path
                                                    d="M132 233.1c-4.4-.1-8.3-1.8-11.6-4.9a30.5 30.5 0 0 1-7.4-13.6 68.9 68.9 0 0 1-2.2-20.7c.3-8.3 1.5-15.5 3.6-21.6 2.1-6.1 5-10.8 8.6-14a17.1 17.1 0 0 1 25.6 2.1 30.8 30.8 0 0 1 5.9 17.3l-15.5-.5c-.1-6.7-1.5-10-4-10.2-2 0-3.6 1.7-4.6 5.2a94 94 0 0 0-2 17.2 12 12 0 0 1 4.3-5.5 10 10 0 0 1 6.3-1.8 12 12 0 0 1 8 3.4c2.4 2.2 4.2 5.1 5.5 8.9 1.3 3.7 1.8 7.8 1.7 12.3-.2 5-1.2 9.7-3.2 13.8-2 4-4.6 7.2-8 9.5a18 18 0 0 1-11 3.1Zm-3.8-26.4c-.2 4.3.1 7.5.9 9.6.8 2.1 1.9 3.2 3.4 3.2 3.1.1 4.9-4 5.1-12.5a26 26 0 0 0-1-9.5c-.7-2.1-1.8-3.2-3.3-3.3-3.1 0-4.9 4-5.1 12.5Z"
                                                    fill="#fff"></path>
                                                <path
                                                    d="m65.4 97.8 31.7 1 .3-10.3-16.7-.6.1-4.8 15.8.6.3-8.5-15.8-.6.2-4.4 16.7.5.4-10.4-31.8-1-1.2 38.5Zm35.3 1.2 31.7 1 .4-10.4-16.8-.5.2-4.8 15.7.6.3-8.6-15.8-.5.2-4.4 16.8.5.3-10.4-31.7-1-1.3 38.5Zm146.9 5c-2-6-4.8-12.4-8.6-19.6 4.8-1.2 7.7-4.2 7.9-8.8.2-7-6.1-10.5-16.3-10.8l-21-.7-1.4 38.5 15 .5.6-16a78.7 78.7 0 0 1 6.9 16.3l16.9.5ZM224 81.7l.2-6.8 5.2.2c2.2 0 3.4 1.3 3.4 3.5-.1 2.2-1.4 3.3-3.6 3.3l-5.2-.2Zm-51 19.7 31.6 1 .4-10.3-16.8-.6.2-4.7 15.8.5.2-8.5-15.7-.6.1-4.4 16.8.6.3-10.5-31.7-1-1.3 38.5ZM137 72l15.5.6A73.2 73.2 0 0 0 136 89.8l-.4 10.4 34.1 1.1.4-10.4-17-.6c4-5.5 9.7-11 17.6-17.1l.3-10.4-33.8-1.2L137 72ZM44 58.5l-19.4-.7-1.3 38.6 19.3.6c12 .4 20.7-7.2 21.1-18.5.4-11.4-7.8-19.6-19.8-20Zm-1.8 28.1-3.5-.1.6-17.7h3.5c3.7.2 5.6 2.8 5.4 9.1-.2 6.4-2.3 8.8-6 8.7Z"
                                                    fill="#000"></path>
                                                <path
                                                    d="m65.3 97.7 31.7 1 .4-10.3-16.8-.6.2-4.7 15.7.5.3-8.5-15.8-.5.2-4.5 16.8.6.3-10.4-31.7-1-1.3 38.4Zm35.3 1.2 31.7 1 .4-10.3-16.8-.6.2-4.7 15.7.5.3-8.5-15.7-.5.1-4.5 16.8.6.3-10.4-31.7-1.1-1.3 38.5Zm146.8 4.9c-2-6-4.8-12.3-8.6-19.5 4.8-1.2 7.7-4.1 7.9-8.7.2-7-6.1-10.5-16.3-10.9l-21-.7-1.3 38.5 15 .5.5-16a78.6 78.6 0 0 1 6.9 16.3l16.9.5Zm-23.6-22 .2-6.9 5.2.2c2.2 0 3.4 1.3 3.4 3.5-.1 2.2-1.4 3.4-3.6 3.3l-5.2-.2Zm-51 19.5 31.7 1 .3-10.3-16.7-.6.1-4.7 15.8.5.3-8.5-15.8-.5.2-4.5 16.7.6.4-10.4-31.7-1-1.3 38.4ZM136.9 72l15.4.5c-6.6 5-12 10.8-16.3 17.2l-.4 10.4 34 1.1.4-10.4-17-.6c4-5.5 9.7-11 17.6-17l.4-10.5-33.8-1.1L137 72Zm-93-13.6-19.3-.6-1.3 38.5 19.3.6c12 .5 20.7-7.2 21-18.5.4-11.3-7.8-19.6-19.7-20Zm-1.7 28.1-3.5-.1.5-17.7 3.5.1c3.8.1 5.7 2.7 5.5 9-.2 6.4-2.3 8.8-6 8.7Z"
                                                    fill="#A238FF"></path>
                                                <path
                                                    d="m143.1 40.7 22.3.7c5.2.2 5 5.5 5 5.5v2.3c-.2 5.3-5.5 5.1-5.5 5.1l-57.9-2c-5.3-.1-5-5.4-5-5.4v-2.3c.2-5.3 5.5-5.1 5.5-5.1l22.8.8V40a6.4 6.4 0 1 1 12.8.5v.2Z"
                                                    fill="#fff" opacity=".4"></path>
                                            </g>
                                            <defs>
                                                <clippath id="b">
                                                    <rect fill="#fff" height="311.6" rx="10.1"
                                                          transform="rotate(2 11.4 0)" width="254.3" x="11.4"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="animated-gift-card">
                                        <svg fill="none" viewBox="0 0 282 334" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#c)">
                                                <path d="M.1 23.7 252.6.7 281 309.8 28.4 333z" fill="#A238FF"></path>
                                                <path
                                                    d="M214.1 273.3c20-1.9 33-39.9 28.8-85-4-45-23.7-80-43.7-78.2-20 1.8-32.9 39.8-28.8 84.9 4.2 45 23.7 80.1 43.7 78.3Z"
                                                    fill="#000"></path>
                                                <path
                                                    d="M169.9 277.3c15-1.4 24-39 19.8-84-4-45.1-19.6-80.6-34.7-79.2-15.1 1.4-24 39-19.9 84.1 4.2 45 19.7 80.5 34.8 79.1Z"
                                                    fill="#000"></path>
                                                <path
                                                    d="M123.4 281.6c20-1.9 33-39.9 28.8-85-4.1-45-23.7-80-43.7-78.2-20 1.8-33 39.8-28.8 84.9 4.1 45 23.7 80.1 43.7 78.3Z"
                                                    fill="#000"></path>
                                                <path
                                                    d="M77 285.8c11.8-1 18.6-31.2 15.3-67.3C89 182.4 76.8 154 65.1 155c-11.7 1.1-18.5 31.2-15.2 67.4 3.3 36 15.4 64.5 27.2 63.4Z"
                                                    fill="#000"></path>
                                                <path
                                                    d="M107 179c-2 1.2-4.5 2.3-7.7 3.2L98 168c3.6-.8 6.1-1.9 7.6-3.2a8.2 8.2 0 0 0 2.5-5.5l13.8-1.2 7 77.3-16.5 1.5-5.3-58Zm26.5 42c5.9-8.6 10.3-15.3 13.1-20.3 2.9-5 4.7-9.2 5.6-12.4a26 26 0 0 0 1-9.7c-.6-6-2.1-9-4.5-8.7-1.4.1-2.5 1.2-3.2 3.3-.6 2.1-.8 5.5-.5 10.3l-16 1.5a36 36 0 0 1 4.6-21.8 19 19 0 0 1 14.5-8.5 19 19 0 0 1 18 9.2c2 3.1 3.3 7 3.7 11.4a38 38 0 0 1-3.5 18.2 132 132 0 0 1-14.8 24.9l22.7-2.1 1.3 14.9-40.7 3.7-1.3-14Z"
                                                    fill="#fff"></path>
                                                <path
                                                    d="m65.8 114 31.7-2.8-1-10.4-16.7 1.5-.4-4.7L95 96l-.8-8.4L78.6 89l-.4-4.4L94.9 83l-1-10.3-31.6 2.8 3.5 38.4Zm35.2-3.2 31.7-2.9-1-10.3L115 99l-.4-4.7 15.7-1.5-.8-8.5-15.7 1.5-.4-4.5 16.7-1.5-1-10.4-31.6 3 3.5 38.3Zm146.4-13.4a132 132 0 0 0-11-18.3c4.7-1.8 7.2-5 6.8-9.6-.6-7-7.4-9.7-17.5-8.8l-21 2 3.5 38.3 15-1.3-1.5-16a78.7 78.7 0 0 1 8.9 15.3l16.8-1.6Zm-26.2-19-.6-6.8 5.2-.4c2.2-.2 3.6.8 3.8 3 .2 2.2-1 3.5-3.2 3.7l-5.2.5ZM173 104.2l31.6-2.8-1-10.4-16.6 1.5-.5-4.7 15.8-1.5-.8-8.4-15.7 1.4-.4-4.4 16.7-1.6-1-10.3-31.6 2.8 3.5 38.4Zm-39.3-24.6 15.4-1.4a73.2 73.2 0 0 0-14 19l.9 10.4 34-3-1-10.4-17 1.5c3.4-6 8.3-12.1 15.4-19.2l-1-10.4-33.7 3.1 1 10.4Zm-94-1.9-19.3 1.8 3.6 38.4 19.2-1.8c12-1 19.6-9.8 18.6-21-1-11.3-10.2-18.5-22.1-17.4Zm1.8 28.1-3.5.3-1.7-17.6 3.5-.3c3.8-.4 6 2 6.6 8.3.6 6.3-1.2 9-5 9.3Z"
                                                    fill="#000"></path>
                                                <path
                                                    d="m65.8 114 31.6-3-1-10.3-16.7 1.5-.4-4.7L95 96.1l-.8-8.5L78.5 89l-.4-4.4 16.7-1.5-1-10.4-31.5 2.9 3.5 38.4Zm35.2-3.3 31.5-2.8-.9-10.4-16.7 1.5-.4-4.7 15.7-1.4-.8-8.5-15.7 1.4-.4-4.4 16.7-1.5-1-10.4-31.5 2.9 3.5 38.3Zm146.2-13.3c-2.7-5.7-6.3-11.7-11-18.3 4.6-1.8 7.2-5 6.8-9.7-.7-7-7.4-9.7-17.5-8.7l-21 1.9L208 101l15-1.4-1.5-15.9a78.6 78.6 0 0 1 8.9 15.2l16.8-1.5Zm-26.2-19-.6-6.8 5.2-.5c2.2-.2 3.6.9 3.8 3 .2 2.3-1 3.6-3.2 3.8l-5.2.5Zm-48.1 25.8 31.5-3-.9-10.3-16.7 1.5-.4-4.7 15.7-1.4-.8-8.5-15.7 1.4-.4-4.4 16.7-1.5-1-10.4-31.6 3 3.6 38.3Zm-39.3-24.7 15.4-1.4a73.1 73.1 0 0 0-14.1 19l1 10.5 33.9-3.1-1-10.4-17 1.5c3.4-6 8.3-12 15.4-19.1l-1-10.4-33.6 3 1 10.4Zm-93.9-1.8-19.3 1.7 3.5 38.4 19.3-1.8c11.9-1 19.6-9.8 18.5-21-1-11.3-10.1-18.4-22-17.3Zm1.7 28-3.5.4-1.6-17.7 3.5-.3c3.7-.3 6 2 6.5 8.3.6 6.3-1.1 9-4.9 9.3Z"
                                                    fill="#000"></path>
                                                <path
                                                    d="m136 47.7 22-2c5.3-.5 5.8 4.8 5.8 4.8l.2 2.2c.5 5.3-4.8 5.8-4.8 5.8l-57.7 5.3c-5.2.5-5.7-4.8-5.7-4.8l-.2-2.3c-.5-5.3 4.8-5.8 4.8-5.8l22.7-2v-.2a6.4 6.4 0 1 1 12.8-1.2v.2Z"
                                                    fill="#313131" opacity=".4"></path>
                                                <path
                                                    d="M46.8 288.6c4-.4 5.7-16.9 3.8-36.8-1.8-20-6.5-36-10.4-35.6-4 .4-5.6 16.9-3.8 36.9 1.8 20 6.5 35.8 10.4 35.5Z"
                                                    fill="#000"></path>
                                            </g>
                                            <defs>
                                                <clippath id="c">
                                                    <rect fill="#fff" height="311.6" rx="10.1"
                                                          transform="rotate(-5.2 0 23.7)" width="254.3" x=".1"
                                                          y="23.7"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section gap-xl-vertical">
                    <p className="paragraph font-s text-center">
                        These offers are non-binding, meaning you can cancel your subscription at any time. These offers
                        are only available to users with no current nor previous subscription to any Deezer subscription
                        tier, with no benefit from any previous Deezer promotion and no previous free trial to any
                        Deezer subscription tier at any time. These offers cannot be combined with any other offer.
                        These are one-time only offers and are valid for one user only. </p>
                </section>
                <div id="consent-container"></div>
            </div>
        </div>
        <div>
            <footer className="footer" data-theme="dark">
                <div className="cell cell-stores">
                    <a href="https://apps.apple.com/us/app/deezer-music-podcast-player/id292738169?itsct=apps_box&amp;itscg=30200" style={{display: "inline-block", overflow: "hidden"}}>
                        <img alt="Download on the App Store" className="store-badge" id="footer-app-store-button"
                             src="../../cdn-assets.dzcdn.net/common/images/apple-store-badge/en.svg"/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=deezer.android.app&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                        <img alt="Get it on Google Play" className="store-badge" id="footer-play-store-button"
                             src="../../cdn-assets.dzcdn.net/common/images/play-store-badge/en.svg"/>
                    </a>
                </div>
                <div className="cell cell-navigation">
                    <div className="cell-navigation-inner">
                        <ul className="nav-main">
                            <li className="nav-main-item title">
                                <p className="nav-main-link">Useful links</p>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../explore/download/index.html"
                                   id="footer-link-download" target="_self">
                                    Download the Deezer app </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="offers.html" id="footer-link-offers" target="_self">
                                    Offers </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../explore/reviews/index.html"
                                   id="footer-link-reviews" target="_self">
                                    Reviews </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="https://account.deezer.com/en/gift/"
                                   id="footer-link-giftcard" target="_self">
                                    Use a promo code </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link"
                                   href="https://account.deezer.com/en/signup/?referer=http%3A%2F%2Fwww.deezer.com%2Fen%2Foffers&amp;pay=1&amp;redirect_uri=https%3A%2F%2Fwww.deezer.com%2Fpayment%2Fgo.php%3Fid%3D1%26gift%3D1%26origin%3Dfooter-gift-card%26user_just_logged%3D1%26pay%3D1%26referer%3Dhttp%253A%252F%252Fwww.deezer.com%252Fen%252Foffers"
                                   id="footer-link-gift" target="_self">
                                    Buy a gift card </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="https://support.deezer.com/hc/en-gb"
                                   id="footer-link-support" target="_self">
                                    FAQ </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="https://support.deezer.com/hc/en-gb/requests/new"
                                   id="footer-link-contact" target="_self">
                                    Contact Deezer </a>
                            </li>
                        </ul>
                        <ul className="nav-main">
                            <li className="nav-main-item title">
                                <a className="nav-main-link" href="../explore/features/index.html"
                                   id="footer-link-features">Features </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../explore/features/flow/index.html"
                                   id="footer-link-flow" target="_self">
                                    Flow </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../explore/features/songcatcher/index.html"
                                   id="footer-link-songcatcher" target="_self">
                                    Song identifier </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../explore/features/transfer-playlist/index.html"
                                   id="footer-link-tune_my_music" target="_self">
                                    Transfer your music </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../explore/features/lyrics/index.html"
                                   id="footer-link-lyrics" target="_self">
                                    Listen with lyrics </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../explore/features/offline/index.html"
                                   id="footer-link-offline" target="_self">
                                    Offline mode </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../explore/features/hifi/index.html"
                                   id="footer-link-hifi" target="_self">
                                    HiFi sound quality </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../explore/features/shaker/index.html"
                                   id="footer-link-shaker" target="_self">
                                    Shared playlists </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../explore/features/music-quiz/index.html"
                                   id="footer-link-music-quiz" target="_self">
                                    Play Music Quiz </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../explore/devices/index.html"
                                   id="footer-link-devices" target="_self">
                                    Compatible devices </a>
                            </li>
                        </ul>
                        <ul className="nav-main">
                            <li className="nav-main-item title">
                                <p className="nav-main-link">Live the Music</p>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="channels/explore" id="footer-link-explore"
                                   target="_self">
                                    Explore the catalogue </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="channels/charts.html" id="footer-link-charts"
                                   target="_self">
                                    Top songs </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="channels/new.html" id="footer-link-new"
                                   target="_self">
                                    New releases </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="https://www.thebackstage-deezer.com/"
                                   id="footer-link-blog" target="_self">
                                    The Backstage - Deezer Blog </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="https://en.deezercommunity.com/"
                                   id="footer-link-community" target="_self">
                                    Deezer Community </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../explore/features/purpleclub/index.html"
                                   id="footer-link-purpleclub" target="_self">
                                    Purple Club </a>
                            </li>
                        </ul>
                        <ul className="nav-main">
                            <li className="nav-main-item title">
                                <a className="nav-main-link" href="index.html" id="footer-link-deezer">About us </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="https://www.newsroom-deezer.com/"
                                   id="footer-link-newsroom" target="_self">
                                    Press &amp; News </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../explore/artist-remuneration/index.html"
                                   id="footer-link-acps" target="_self">
                                    Artist-Centric Payment System (ACPS) </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../explore/deezer_for_creators/index.html"
                                   id="footer-link-creators" target="_self">
                                    Deezer for Creators </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="https://www.deezer-investors.com/"
                                   id="footer-link-investors" target="_self">
                                    Investors </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="https://www.deezer-brandpartnerships.com/"
                                   id="footer-link-brand_partnerships" target="_self">
                                    Brand Partnerships </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="https://www.deezerjobs.com/" id="footer-link-jobs"
                                   target="_self">
                                    Careers </a>
                            </li>
                        </ul>
                        <ul className="nav-main">
                            <li className="nav-main-item title">
                                <a className="nav-main-link" href="../legal/legal.html"
                                   id="footer-link-legal">Legal </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../legal/cgu.html" id="footer-link-cgu"
                                   target="_self">
                                    Terms and Conditions </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../legal/personal-datas.html"
                                   id="footer-link-personal-datas" target="_self">
                                    Privacy policy </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" id="footer-link-cookie-preference" target="_self">
                                    Cookies </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="../explore/licenses/index.html"
                                   id="footer-link-open-source-sofware-report" target="_self">
                                    Open Source Software Report </a>
                            </li>
                            <li className="nav-main-item visible">
                                <a className="nav-main-link" href="https://vdp.deezer.com/p/Welcome"
                                   id="footer-link-vulnerabilities-disclosure-privacy" target="_self">
                                    Vulnerability Disclosure Policy </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cell cell-bottom">
                    <a className="logo-container" href="index.html">
                        <div className="logo-deezer" data-testid="DeezerIcon"></div>
                    </a>
                    <ul className="social-list">
                        <li className="social-list-item">
                            <a className="social-list-link" href="https://www.facebook.com/deezer"
                               id="footer-social-link-facebook" target="_self">
                                <svg aria-hidden="true" className="svg-icon svg-icon-facebook"
                                     data-testid="FacebookIcon" focusable="false" height="20" viewBox="0 0 12 12"
                                     width="20">
                                    <path
                                        d="M9.205 6.6L9.5 4.393H7.136V3.031c.083-.617.263-1.038 1.187-1.038L9.5 1.992V0H7.727C6.084 0 4.922.994 4.922 2.82v1.573H3v2.133l1.773.074V12h2.363V6.6h2.069z"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="social-list-item">
                            <a className="social-list-link" href="https://www.instagram.com/deezer"
                               id="footer-social-link-instagram" target="_self">
                                <svg aria-hidden="true" className="svg-icon svg-icon-instagram"
                                     data-testid="InstagramIcon" focusable="false" height="20" viewBox="0 0 12 12"
                                     width="20">
                                    <path
                                        d="M 6 1.0815 c 1.602 0 1.792 0.006 2.425 0.035 c 1.626 0.074 2.3855 0.8455 2.4595 2.4595 c 0.029 0.6325 0.0345 0.8225 0.0345 2.4245 c 0 1.6025 -0.006 1.792 -0.0345 2.4245 c -0.0745 1.6125 -0.832 2.3855 -2.4595 2.4595 c -0.633 0.029 -0.822 0.035 -2.425 0.035 c -1.602 0 -1.792 -0.006 -2.4245 -0.035 c -1.63 -0.0745 -2.3855 -0.8495 -2.4595 -2.46 c -0.029 -0.6325 -0.035 -0.822 -0.035 -2.4245 c 0 -1.602 0.0065 -1.7915 0.035 -2.4245 c 0.0745 -1.6135 0.832 -2.3855 2.4595 -2.4595 c 0.633 -0.0285 0.8225 -0.0345 2.4245 -0.0345 z m 0 -1.0815 c -1.6295 0 -1.8335 0.007 -2.4735 0.036 c -2.179 0.1 -3.39 1.309 -3.49 3.49 c -0.0295 0.6405 -0.0365 0.8445 -0.0365 2.474 c 0 1.6295 0.007 1.834 0.036 2.474 c 0.1 2.179 1.309 3.39 3.49 3.49 c 0.6405 0.029 0.8445 0.036 2.474 0.036 c 1.6295 0 1.834 -0.007 2.474 -0.036 c 2.177 -0.1 3.391 -1.309 3.4895 -3.49 c 0.0295 -0.64 0.0365 -0.8445 0.0365 -2.474 c 0 -1.6295 -0.007 -1.8335 -0.036 -2.4735 c -0.098 -2.177 -1.3085 -3.39 -3.4895 -3.49 c -0.6405 -0.0295 -0.845 -0.0365 -2.4745 -0.0365 z m 0 2.919 c -1.7015 0 -3.081 1.3795 -3.081 3.081 s 1.3795 3.0815 3.081 3.0815 s 3.081 -1.3795 3.081 -3.0815 c 0 -1.7015 -1.3795 -3.081 -3.081 -3.081 z m 0 5.081 c -1.1045 0 -2 -0.895 -2 -2 c 0 -1.1045 0.8955 -2 2 -2 s 2 0.8955 2 2 c 0 1.105 -0.8955 2 -2 2 z m 3.203 -5.9225 c -0.398 0 -0.7205 0.3225 -0.7205 0.72 s 0.3225 0.72 0.7205 0.72 c 0.3975 0 0.7195 -0.3225 0.7195 -0.72 s -0.322 -0.72 -0.7195 -0.72 z"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="social-list-item">
                            <a className="social-list-link" href="https://twitter.com/Deezer"
                               id="footer-social-link-twitter" target="_self">
                                <svg aria-hidden="true" className="svg-icon svg-icon-twitter" data-testid="TwitterIcon"
                                     focusable="false" height="20" viewBox="0 0 12 12" width="20">
                                    <path
                                        d="M7.14 5.117 11.61.25h-1.06L6.673 4.477 3.574.25H0l4.684 6.39L0 11.743h1.059l4.093-4.46 3.274 4.46H12ZM5.692 6.695l-.472-.633L1.44.997h1.625l3.047 4.09.477.633 3.96 5.312H8.927Zm0 0"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="social-list-item">
                            <a className="social-list-link" href="https://www.youtube.com/deezer"
                               id="footer-social-link-youtube" target="_self">
                                <svg aria-hidden="true" className="svg-icon svg-icon-youtube" data-testid="YoutubeIcon"
                                     focusable="false" height="20" viewBox="0 0 12 12" width="20">
                                    <path
                                        d="M 9.8075 1.592 c -1.802 -0.123 -5.8155 -0.1225 -7.615 0 c -1.9485 0.133 -2.178 1.31 -2.1925 4.408 c 0.0145 3.0925 0.242 4.2745 2.1925 4.408 c 1.8 0.1225 5.813 0.123 7.615 0 c 1.9485 -0.133 2.178 -1.31 2.1925 -4.408 c -0.0145 -3.0925 -0.242 -4.2745 -2.1925 -4.408 z m -5.3075 6.408 v -4 l 4 1.9965 l -4 2.0035 z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="legal">
                        <div className="legal-list">
                            <div className="legal-list-item copyright">© 2024 Deezer</div>
                            <div className="index-navbar-lang">
                                <span className="lang-carret icon icon-chevron-down"></span>
                                <span className="lang-label">English</span>
                                <select className="lang-select" data-testid="language_select" id="language_select">
                                    <option value="cs">Čeština</option>
                                    <option value="da">Dansk</option>
                                    <option value="de">Deutsch</option>
                                    <option selected="" value="en">English</option>
                                    <option value="us">English (us)</option>
                                    <option value="es">Español</option>
                                    <option value="mx">Español (latam)</option>
                                    <option value="fr">Français</option>
                                    <option value="hr">Hrvatski</option>
                                    <option value="it">Italiano</option>
                                    <option value="hu">Magyar</option>
                                    <option value="nl">Nederlands</option>
                                    <option value="pl">Polski</option>
                                    <option value="br">Português (br)</option>
                                    <option value="pt">Português (pt)</option>
                                    <option value="ro">Română</option>
                                    <option value="sk">Slovenčina</option>
                                    <option value="sl">Slovenščina</option>
                                    <option value="sr">Srpski</option>
                                    <option value="fi">Suomi</option>
                                    <option value="sv">Svenska</option>
                                    <option value="tr">Türkçe</option>
                                    <option value="bg">Български</option>
                                    <option value="ru">Pусский</option>
                                    <option value="uk">Українська</option>
                                    <option value="ar">العربیة</option>
                                    <option value="ja">日本語</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        <div className="react-cookie" id="react-cookie"></div>
        <div aria-hidden="true" className="modal" id="modal" role="dialog" style={{display: "none"}}>
            <div className="modal-backdrop"></div>
            <div className="modal-wrapper"></div>
        </div>
    </>)
}