import React, { useEffect, useState } from 'react'

function PrintMedia() {
    const [selectedYear, setSelectedYear] = useState('2024');

    const handleChange = (event) => {
      setSelectedYear(event.target.value);
    };


    useEffect(() => {
      const containers = document.querySelectorAll('.partners-container');
      containers.forEach(container => {
        if (container.id === `partners-${selectedYear}`) {
          container.style.display = 'block';
        } else {
          container.style.display = 'none';
        }
      });
    }, [selectedYear]);
  return (
    <div>
          <div className="w-100 padding position-relative">
                <div className="container-lg in-the-media">
                    <div className="inside-blogsArchive">
                        <div className="headingContainer d-flex justify-content-between align-items-center">
                            <div className="heading mb-0">
                                <h1 className="h1 text-serif mb-0">Print Media</h1>
                            </div>
                            <div className="year-filterBtn">
                            <select id="partnersBtn" className="form-control" value={selectedYear} onChange={handleChange}>
                                    <option value="2024">2024</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>
                            </div>
                        </div>
                        <div id="partners-2024" className="partners-container show">
                            <div className="row news-slider gap-row">
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/toi15824-big.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/toi15824.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Times of India</h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>15th August 2024</small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/bb4ac7dc-013c-4594-8c31-8e6cba81f156.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/bb4ac7dc-013c-4594-8c31-8e6cba81f156-th.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                        <article>
                                            <h5 className="news-title mt-4">Navbharat Times</h5>
                                            <div className="date justify-content-center justify-content-sm-between">
                                                <small>15th May 2024</small>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="partners-2022" className="partners-container">
                            <div className="row news-slider gap-row">
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/dainik-jagran-15.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/dainik-jagran-15.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="partners-2021" className="partners-container">
                            <div className="row news-slider gap-row">
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2021/1.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2021/1.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2021/2.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2021/2.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2021/3.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2021/3.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2021/4.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2021/4.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2021/5.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2021/5.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2021/6.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2021/6.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2021/7.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2021/7.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="partners-2020" className="partners-container">
                            <div className="row news-slider gap-row">
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/1.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/1.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/2.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/2.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/3.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/3.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/4.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/4.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/5.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/5.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/6.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/6.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/7.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/7.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/8.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/8.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/9.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/9.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/10.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/10.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/11.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/11.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/12.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/12.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/13.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/13.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/14.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/14.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/15.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/15.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/16.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/16.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/17.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/17.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/18.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/18.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/19.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/19.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/20.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/20.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/21.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/21.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/22.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/22.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/23.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/23.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2020/24.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2020/24.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="partners-2019" className="partners-container">
                            <div className="row news-slider gap-row">
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/1.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/1.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/2.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/2.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/3.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/3.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/4.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/4.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/5.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/5.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/6.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/6.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/7.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/7.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/8.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/8.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/9.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/9.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/10.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/10.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/11.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/11.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/12.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/12.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/13.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/13.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/14.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/14.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/15.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/15.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/16.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/16.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/17.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/17.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/18.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/18.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/19.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/19.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/20.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/20.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/21.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/21.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/22.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/22.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/23.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/23.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6 newsBox">
                                    <a href="https://ecis.in/sayahomes-react/assets/images/print/2019/24.jpg" data-magnify="gal" data-group="Print Media" data-caption="Print Media" className="inner h-100">
                                        <div className="img-fluid mt-0"><img src="https://ecis.in/sayahomes-react/assets/images/print/2019/24.jpg" alt="Saya Realty" className="h-100 object-cover" title /></div>
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

export default PrintMedia