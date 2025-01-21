import Image from "next/image";

const ShoppingCartOne = () => {
    return(
        <div>
            <div className="container">
                <h2 className="mt-4">Shopping Cart</h2>
                <div className="row mt-lg-5 mt-3">
                    <div className="col-lg-8 pe-lg-5">
                        <div className="row py-4 border-bottom">
                            <div className="col-md-4">
                                <div className="overflow-hidden rounded-2">
                                    <Image alt="product-image" width={100} height={100} src="/ecommerce/shopping-cart-1/img-1.jpg" className="w-100 h-auto"/>
                                </div>
                            </div>
                            <div className="col-md-8 mt-md-0 mt-3">
                                <div className="d-flex flex-column justify-content-between h-100 pb-3">
                                    <div className="d-flex align-items-start justify-content-between gap-4">
                                        <div>
                                            <h6 className="fs-6 fw-normal m-0">Basic Tee</h6>
                                            <p className="fs-6 fw-normal text-secondary">Sienna | Large</p>
                                            <h6 className="fs-6 fw-normal m-0">$32.00</h6>
                                        </div>
                                        <div>
                                            <select className="form-control bg-white px-3 pe-5">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                            </select>
                                        </div>
                                        <div>
                                          <button className="bg-transparent p-0 m-0 border-0">
                                            <i className="bi bi-x-lg"></i>
                                          </button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="bi bi-check2 text-success"></i>
                                        <span className="text-secondary fs-6 fw-normal">In Stock</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row py-4 border-bottom">
                            <div className="col-md-4">
                                <div className="overflow-hidden rounded-2">
                                    <Image alt="product-image" width={100} height={100} src="/ecommerce/shopping-cart-1/img-2.jpg" className="w-100 h-auto"/>
                                </div>
                            </div>
                            <div className="col-md-8 mt-md-0 mt-3">
                                <div className="d-flex flex-column justify-content-between h-100 pb-3">
                                    <div className="d-flex align-items-start justify-content-between gap-4">
                                        <div>
                                            <h6 className="fs-6 fw-normal m-0">Basic Tee</h6>
                                            <p className="fs-6 fw-normal text-secondary">Black | Large</p>
                                            <h6 className="fs-6 fw-normal m-0">$32.00</h6>
                                        </div>
                                        <div>
                                            <select className="form-control bg-white px-3 pe-5">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                            </select>
                                        </div>
                                        <div>
                                          <button className="bg-transparent p-0 m-0 border-0">
                                            <i className="bi bi-x-lg"></i>
                                          </button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="bi bi-alarm-fill text-secondary"></i>
                                        <span className="text-secondary fs-6 fw-normal">Ships in 3–4 weeks</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row py-4 border-bottom">
                            <div className="col-md-4">
                                <div className="overflow-hidden rounded-2">
                                    <Image alt="product-image" width={100} height={100} src="/ecommerce/shopping-cart-1/img-3.jpg" className="w-100 h-auto"/>
                                </div>
                            </div>
                            <div className="col-md-8 mt-md-0 mt-3">
                                <div className="d-flex flex-column justify-content-between h-100 pb-3">
                                    <div className="d-flex align-items-start justify-content-between gap-4">
                                        <div>
                                            <h6 className="fs-6 fw-normal m-0">Nomad Tumbler</h6>
                                            <p className="fs-6 fw-normal text-secondary">White</p>
                                            <h6 className="fs-6 fw-normal m-0">$32.00</h6>
                                        </div>
                                        <div>
                                            <select className="form-control bg-white px-3 pe-5">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                            </select>
                                        </div>
                                        <div>
                                          <button className="bg-transparent p-0 m-0 border-0">
                                            <i className="bi bi-x-lg"></i>
                                          </button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <i className="bi bi-check2 text-success"></i>
                                        <span className="text-secondary fs-6 fw-normal">In Stock</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-lg-0 mt-4 mb-4">
                        <div className="p-4 rounded-2" style={{backgroundColor:'var(--bs-tertiary-bg)'}}>
                            <h5>Order summary</h5>
                            <div className="d-flex align-items-center justify-content-between border-bottom py-2">
                                <p className="fs-6 fw-normal text-secondary m-0">Subtotal</p>    
                                <p className="fs-6 fw-normal m-0 fw-bold">$99.00</p>  
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-bottom py-2">
                                <p className="fs-6 fw-normal text-secondary m-0">Shipping estimate<i className="bi bi-question-circle-fill ms-2"></i></p>    
                                <p className="fs-6 fw-normal m-0 fw-bold">$5.00</p>  
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-bottom py-2">
                                <p className="fs-6 fw-normal text-secondary m-0">Tax estimate<i className="bi bi-question-circle-fill ms-2"></i></p>    
                                <p className="fs-6 fw-normal m-0 fw-bold">$8.32</p>  
                            </div>
                            <div className="d-flex align-items-center justify-content-between py-2">
                                <p className="fs-6 fw-normal m-0 fw-semibold">Order total<i className="bi bi-question-circle-fill ms-2"></i></p>    
                                <p className="fs-6 fw-normal m-0 fw-semibold">$112.32</p>  
                            </div>
                            <button type="button" class="btn btn-primary w-100 mt-4">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartOne;