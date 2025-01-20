'use client'
import Image from "next/image";
import Link from "next/link";
import {useState} from 'react';

const WithTieredImages = () => {

    const[black,setBlack] = useState(true);
    const[gray,setGray] = useState(false);

    const GrayClickHandler = () => {
        setBlack(false);
        setGray(true);
    }

    const BlackClickHandler = () => {
        setBlack(true);
        setGray(false);
    }

    return(
        <div>
            <div className="container py-4">
                <ul className="d-flex align-items-center gap-3 list-none m-0 p-0">
                    <li>Women</li>
                    <li className="color-gray-500">/</li>
                    <li>Clothing</li>
                    <li className="color-gray-500">/</li>
                    <li className="color-gray-500">Basic Tee</li>
                </ul>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="overflow-hidden rounded-3">
                            <Image className="w-100 h-auto" alt="product-image" height={100} width={100} src="/with-tiered-images/with-tiered-images-1.jpg"/>
                        </div>
                        <div className="row mt-3 d-lg-flex d-none">
                            <div className="col-lg-6">
                                <div className="overflow-hidden rounded-3">
                                    <Image className="w-100 h-auto" alt="product-image" height={100} width={100} src="/with-tiered-images/with-tiered-images-2.jpg"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="overflow-hidden rounded-3">
                                    <Image className="w-100 h-auto" alt="product-image" height={100} width={100} src="/with-tiered-images/with-tiered-images-3.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-3">
                        <div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h2 className="fs-4 m-0">Basic Tee</h2>
                                <h2 className="fs-4 m-0">$35</h2>
                            </div>
                            <div className="d-flex align-items-center gap-4 mb-3">
                                <div className="d-flex align-items-center gap-2">
                                    <div>
                                        <p className="m-0 fs-6 fw-light">3.9</p>
                                    </div>
                                    <div>
                                        <ul className="list-none p-0 m-0 d-flex align-items-center gap-2">
                                            <li><i className="bi bi-star-fill color-yellow-400"></i></li>
                                            <li><i className="bi bi-star-fill color-yellow-400"></i></li>
                                            <li><i className="bi bi-star-fill color-yellow-400"></i></li>
                                            <li><i className="bi bi-star-fill color-yellow-400"></i></li>
                                            <li><i className="bi bi-star-fill color-gray-500"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <Link href="#" className="list-none text-decoration-none fs-6 fw-normal">See all 512 reviews</Link>
                                </div>
                            </div>
                            <div>
                                <h6 className="fs-6 fw-normal">Color</h6>
                                <div>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className={`w-36px h-36px rounded-circle bg-white d-flex align-items-center justify-content-center border ${black == true && 'border-black'}`} onClick={BlackClickHandler} role="button">
                                            <span className="d-block w-32px h-32px rounded-circle bg-black"></span>
                                        </div>
                                        <div className={`w-36px h-36px rounded-circle bg-white d-flex align-items-center justify-content-center border ${gray == true && 'border-black'}`} onClick={GrayClickHandler} role="button">
                                            <span className="d-block w-32px h-32px rounded-circle bg-gray-800"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex align-items-cemter justify-content-between mt-3">
                                    <h6 className="fs-6 fw-normal">Size</h6>
                                    <Link href="#" className="fs-6 fw-normal text-decoration-none">See sizing chart</Link>
                                </div>
                                <div className="mt-2 d-flex gap-3 flex-wrap">
                                    <span className="d-flex align-items-center justify-content-center border border-dark-subtle w-72px h-46px rounded-2 fs-6 bg-primary text-white fw-normal" role="button">XXS</span>
                                    <span className="d-flex align-items-center justify-content-center border border-dark-subtle w-72px h-46px rounded-2 fs-6 text-black fw-normal" role="button">XS</span>
                                    <span className="d-flex align-items-center justify-content-center border border-dark-subtle w-72px h-46px rounded-2 fs-6 text-black fw-normal" role="button">S</span>
                                    <span className="d-flex align-items-center justify-content-center border border-dark-subtle w-72px h-46px rounded-2 fs-6 text-black fw-normal" role="button">M</span>
                                    <span className="d-flex align-items-center justify-content-center border border-dark-subtle w-72px h-46px rounded-2 fs-6 text-black fw-normal" role="button">L</span>
                                    <span className="d-flex align-items-center justify-content-center border border-dark-subtle w-72px h-46px rounded-2 fs-6 text-black fw-normal opacity-25 pe-none" role="button">XL</span>
                                </div>
                            </div>
                            <div className="my-5">
                                <button type="button" className="btn btn-primary w-100 text-capitalize">Add to cart</button>
                            </div>
                            <div>
                                <h6>Description</h6>
                                <p className="text-body-tertiary fs-6">The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
                                <p className="text-body-tertiary fs-6 p-0 m-0">Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
                                <div className="py-3">
                                    <hr></hr>
                                </div>
                                <h6>Fabric & Care</h6>
                                <ul className="m-0">
                                    <li className="text-body-tertiary fs-6 mb-1">Only the best materials</li>
                                    <li className="text-body-tertiary fs-6 mb-1">Ethically and locally made</li>
                                    <li className="text-body-tertiary fs-6 mb-1">Pre-washed and pre-shrunk</li>
                                    <li className="text-body-tertiary fs-6">Machine wash cold with similar colors</li>
                                </ul>
                                <div>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <div className="border border-dark-subtle rounded-2 bg-gray-200 p-4">
                                                <div className="mb-2 text-center"><i className="bi bi-truck"></i></div>
                                                <h6 className="text-center">International delivery</h6>
                                                <p className="m-0 text-center text-body-tertiary fs-6 fw-normal">Get your order in 2 years</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-md-0 mt-3">
                                            <div className="border border-dark-subtle rounded-2 bg-gray-200 p-4">
                                                <div className="mb-2 text-center"><i className="bi bi-currency-dollar"></i></div>
                                                <h6 className="text-center">Loyalty rewards</h6>
                                                <p className="m-0 text-center text-body-tertiary fs-6 fw-normal">Don't look at other tees</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WithTieredImages;