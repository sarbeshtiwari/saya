import React, { useState } from 'react'

function DigitalMedia() {
    const [selectedYear, setSelectedYear] = useState('2024');

    const handleChange = (event) => {
        setSelectedYear(event.target.value);
    };
    return (
        <div>
            <div className="w-100 padding position-relative bg-secondary">
                <div className="container-lg in-the-media">
                    <div className="inside-blogsArchive">
                        <div className="headingContainer d-flex justify-content-between align-items-center">
                            <div className="heading mb-0">
                                <h1 className="mb-0 text-serif text-orange">Digital Media</h1>
                            </div>
                            <div className="year-filterBtn">
                                <select id="digitalBtn" className="form-control" value={selectedYear} onChange={handleChange}>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>
                            </div>
                        </div>
                        <div className={`digital-container ${selectedYear === '2024' ? 'show' : 'hide'}`}>
                            <div className="row news-slider gap-row">
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://www.financialexpress.com/money/luxury-housing-in-noida-the-transformation-of-urban-living-3582821/" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/luxury-housing-in-noida-the-transformation-of-urban-living.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Luxury Housing in Noida: The Transformation of Urban Living.</h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>Financial Express</small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://www.apnnews.com/budget-reaction-quote-from-real-estate-mr-vikas-bhasin-chairman-managing-director-saya-group/" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/saya30724-11.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Budget Reaction Quote from Real Estate- Mr., Vikas Bhasin, Chairman & Managing Director, Saya Group </h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>APN News </small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://www.etnownews.com/budget/union-budget-2024-expectations-live-updates-fm-nirmala-sitharaman-budget-date-time-income-tax-slabs-new-regime-capex-liveblog-111851418" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/saya30724-2.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Budget 2024 Expectations LIVE Updates: What salaried employees, middle className tax payers expect from FM Nirmala Sitharaman in Union Budget 2024-25</h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>ET Now</small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://todayindia.news/budget-reaction-quote-real-estate-mr-vikas-bhasin-chairman-managing-director-saya-group/" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/saya30724-12.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Budget Reaction Quote from Real Estate- Mr., Vikas Bhasin, Chairman & Managing Director, Saya Group </h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>Today India News </small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://www.tv9hindi.com/business/from-cheaper-house-free-electricity-to-income-tax-what-middle-className-got-in-budget-2024-explained-2743101.html" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/saya30724-7.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Budget for Middle className: सस्ता घर, फ्री बिजली से लेकर इनकम टैक्स…बजट में मिडिल क्लास को क्या-क्या मिला? </h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>TV9 </small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://cxotoday.com/specials/industry-insights-leading-voices-on-indias-post-budget-2024/" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/saya30724-9.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Industry Insights: Leading Voices on India’s Post-Budget 2024 </h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>CXOToday </small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://www.indiatv.in/paisa/business/how-was-the-budget-for-the-real-estate-sector-2024-07-24-1062423" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/saya30724-4.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">रियल एस्टेट सेक्टर के लिये कैसा रहा बजट? जानिए क्या कह रहे इंडस्ट्री से जुड़े लोग </h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>India TV </small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://www.deccanchronicle.com/nation/union-budget-2024-reactions-from-experts-1811823" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/saya30724-8.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Industry Leaders React to FM Nirmala Sitharaman's Budget 2024 </h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>Deccan Chronicle </small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://www.jagran.com/business/budget-union-budget-2024-real-estate-sector-welcome-enthusiastically-check-reaction-of-industry-leaders-23764117.html" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/saya30724-5.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Real Estate Sector ने बजट का उत्साहपूर्वक स्वागत किया, दिग्गजों ने दिया रिएक्शन </h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>Dainik Jagran </small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://economictimes.indiatimes.com/wealth/tax/income-tax-budget-2024-expectations-live-updates-standard-deduction-hike-new-income-tax-slab-changes-finance-minister-nirmala-sitharaman-latest-new-july-22-2024/liveblog/111916925.cms?from=mdr" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/saya30724-1.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Union Budget 2024 Income Tax Expectations Highlights: Hike in standard deduction limit, other measures; what to expect from Budget 2024</h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>The Economic Times</small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://www.moneycontrol.com/news/business/markets/budget-2024-news-live-fm-sitharaman-takes-part-in-halwa-ceremony-marks-final-stage-of-budget-preparation-liveblog-12770840.html" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/saya30724-3.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Union Cabinet to meet on Thursday at 10:30 AM </h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>Moneycontrol</small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://www.jagran.com/business/budget-union-budget-2024-to-be-presented-on-23-july-every-sector-has-high-expectation-from-it-23759554.html" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/saya30724-6.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Budget 2024: हर सेक्टर को आम बजट से खास उम्मीदें, 23 जुलाई को होने जा रहा है पेश </h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>Dainik Jagran </small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://cxotoday.com/specials/industries-voice-their-budget-desires-a-look-at-sectoral-expectations-for-union-budget-2024-25/" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/saya30724-10.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Industries Voice Their Budget Desires: A Look at Sectoral Expectations for Union Budget 2024-25 </h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>CXOToday </small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://www.business-standard.com/content/specials/saya-homes-goes-greens-over-1500-plants-trees-planted-in-massive-environment-day-initiative-124060500737_1.html https://www.business-standard.com/amp/content/specials/saya-homes-goes-greens-over-1500-plants-trees-planted-in-massive-environment-day-initiative-124060500737_1.html" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/saya-homes-goes-greens-over-1500.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Saya Homes Goes Greens: Over 1500 Plants & Trees planted in Massive Environment Day initiative.</h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>Business Standard</small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`digital-container ${selectedYear === '2023' ? 'show' : 'hide'}`}>
                            <div className="row news-slider gap-row">
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://www.business-standard.com/content/press-releases-ani/delhi-ncr-emerging-as-the-most-favourable-commercial-real-estate-destination-123032201230_1.html" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/4NE1Ysp.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Delhi-NCR emerging as the most favourable commercial real estate destination</h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>Business Standard</small>
                                            </div>
                                        </article>
                                    </a>
                                </div>

                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://www.aninews.in/news/business/business/delhi-ncr-emerging-as-the-most-favourable-commercial-real-estate-destination20230322184926/" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/New-Project.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Delhi-NCR emerging as the most favourable commercial real estate destination</h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>Aninews</small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://www.zee5.com/articles/delhi-ncr-emerging-as-the-most-favourable-commercial-real-estate-destination" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/New-Project1.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Delhi-NCR emerging as the most favourable commercial real estate destination</h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>Zee5</small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://theprint.in/ani-press-releases/delhi-ncr-emerging-as-the-most-favourable-commercial-real-estate-destination/1464421/" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/New-Project4.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Delhi-NCR emerging as the most favourable commercial real estate destination</h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>The Print</small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://m.dailyhunt.in/news/india/english/newsvoir-epaper-newsvoir/delhi+ncr+emerging+as+the+most+favourable+commercial+real+estate+destination-newsid-n482818058?listname=newspaperLanding&topic=business&index=3&topicIndex=0&mode=pwa&action=click" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/New-Project5.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Delhi-NCR emerging as the most favourable commercial real estate destination</h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>DailyHunt</small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`digital-container ${selectedYear === '2022' ? 'show' : 'hide'}`}>
                            <div className="row news-slider gap-row">
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://news.easyshiksha.com/saya-homes-unlocks-ncrs-real-estate-market-records-sales-of-rs-150-crores-in-6-months/" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/1.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Saya Homes record sales worth Rs. 150 crores in 6 months</h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>Easyshiksha</small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://dailybiz.news/2022/09/02/saya-homes-unlocks-ncrs-real-estate-market-records-sales-of-rs-150-crores-in-6-months/" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/2.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Saya brings in new wave of energy to the real estate market; records whopping sales worth Rs. 150 crores</h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>Dailybiz</small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://orissadiary.com/saya-homes-unlocks-ncrs-real-estate-market-records-sales-of-rs-150-crores-in-6-months/" target="_blank" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/3.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Saya setting new benchmarks in the real estate market; records sales worth Rs. 150 crores in Quarter 1 & 2</h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>Orissadiary</small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`digital-container ${selectedYear === '2021' ? 'show' : 'hide'}`}>
                            <div className="row news-slider gap-row">

                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Hindustan-Times-13-March-2021.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Hindustan-Times-13-March-2021.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/New-247-Live-27-Jan-2021.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/New-247-Live-27-Jan-2021.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="digital-2020" className="digital-container">
                            <div className="row news-slider gap-row">
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/APN-Newes-January-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/APN-Newes-January-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Delhi-NCR-2-Feb-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Delhi-NCR-2-Feb-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Hindustan-Times-10-June-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Hindustan-Times-10-June-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/LiveMint-15-April-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/LiveMint-15-April-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Business-Standard-3-Jan-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Business-Standard-3-Jan-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Indian-Real-Estate.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Indian-Real-Estate.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/NBT-TImes-221-April-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/NBT-TImes-221-April-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Outllok-the-news-scroll-24-Sep-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Outllok-the-news-scroll-24-Sep-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Realty-Buzz-9-Oct-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Realty-Buzz-9-Oct-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Realty-n-Feria-1-Feb-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Realty-n-Feria-1-Feb-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Realty-n-feria-21-Jan-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Realty-n-feria-21-Jan-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Realty-n-ferial-17-April-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Realty-n-ferial-17-April-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Republic-World.com-14-May-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Republic-World.com-14-May-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Surfaces-4-Feb-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Surfaces-4-Feb-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/The-property-times-18-Oct-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/The-property-times-18-Oct-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/The-Property-Times-2-June-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/The-Property-Times-2-June-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/The-Week-4-May-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/The-Week-4-May-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/The-Property- times-7-August-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/The-Property- times-7-August-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`digital-container ${selectedYear === '2019' ? 'show' : 'hide'}`}>

                            <div className="row news-slider gap-row">

                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/3-Jan-2020.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/3-Jan-2020.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/9-Jan-2019.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/9-Jan-2019.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Business-Standard-31-Dec-2019-100.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Business-Standard-31-Dec-2019-100.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/IIFL-100.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/IIFL-100.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Business-Standard-7-Feb-2019.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Business-Standard-7-Feb-2019.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/IIFL_1-100.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/IIFL_1-100.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/IANS-Live-9-Jan-2019-100.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/IANS-Live-9-Jan-2019-100.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/National-Business-Mirror-100.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/National-Business-Mirror-100.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/National-Business-Mirror_1-100.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/National-Business-Mirror_1-100.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Quiting-Hindi.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Quiting-Hindi.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/National-Real-Estate-Development-Council.-100.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/National-Real-Estate-Development-Council.-100.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Real-Estate-Developers-8-Feb-2019-100.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Real-Estate-Developers-8-Feb-2019-100.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Outlook-The-new-scroll-7-Feb-2019-100.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Outlook-The-new-scroll-7-Feb-2019-100.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Saya-Homes-to-Invest-10-Jan-2020-100.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Saya-Homes-to-Invest-10-Jan-2020-100.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/Realty-Myths-100.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/Realty-Myths-100.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://sayahomes.com/assets/images/media/The-Trinume-100.jpg" data-magnify="gal" data-group="Media" data-caption="Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://sayahomes.com/assets/images/media/The-Trinume-100.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalMedia