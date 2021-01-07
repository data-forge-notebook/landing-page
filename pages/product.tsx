import Layout from '../components/layout'
import { useRouter } from 'next/router'
import "./product.less";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import { loadStripe } from '@stripe/stripe-js';

var baseApiUrl = "https://api.data-forge-notebook.com";
// var baseApiUrl = "http://localhost:80";

const defaultDiscountMsg = "If you have a discount code please enter it here";

//
// Load the Stripe API.
//
async function _loadStripe() {
    // SANDBOX
    // fonst stripe = await loadStripe('pk_test_51H6qptBwAGsxbJSlNebVfem6QNcRHX11OcXtE1XyT9qAXpVP6Nts6FLBfcP0hBoMNaMjAdGCW5Wqvf2lR6z1Dlj800aWQMCCY9');

    // LIVE
    const stripe = await loadStripe('pk_live_51H6qptBwAGsxbJSl95hGruA0EB6jj8TZmtgC6t032a2Qz30u558C7SdNWAms04XH5Wf10IA4fVLxSHn1eNL6e27m00r5GvUI5d');

    return stripe;
}


export default function Product() {

    const router = useRouter()
    const query = router.query;
    const [ email, setEmail ] = useState("");
    const [ discountMsg, setDiscountMsg ] = useState(defaultDiscountMsg);

    const [ discountCode, setDiscountCode ] = useState("");
    if (email === "" && query.email) {
        setEmail(query.email as string);
    }

    if (discountCode === "" && query.discount) {
        setDiscountCode(query.discount as string);
    }

    function onDiscountCodeUpdated() {
        if (discountCode === "") {
            setDiscountMsg(defaultDiscountMsg);
            return;
        }

        const url = baseApiUrl + "/discount-code?code=" + discountCode;
        axios.get(url)
            .then(response => {
                if (response.data.ok) {
                    setDiscountMsg(`You have a discount of ${response.data.discount.toString()}% which means you'll pay ${response.data.payment.toString()} USD.`);
                }
                else {
                    setDiscountMsg(`Your discount code isn't valid.`);
                }
            })
            .catch(err => {
                console.error(`An error occurred retreiving querying server for discount code ${discountCode}.`);
                console.error(err && err.stack || err);
            });
    }

    useEffect(debounce(onDiscountCodeUpdated, 200), [discountCode]);

    //
    // Displays an error message when the user has not entered their email address.
    //
    function onEmailError() {
        alert("Please enter your email.\r\nWe need your email to be able to send you download links for Data-Forge Notebook. Your email won't be shared with anyone else.\r\n\r\nIf you have questions or a problem please email support@data-forge-notebook.com.");
    }

    //
    // The PayPal payment button has been clicked.
    //
    async function onPurchaseWithPayPal() {
        try {
            let purchaseEmail = email;
            if (purchaseEmail) {
                purchaseEmail = purchaseEmail.trim();
            }
           
            if (!purchaseEmail || purchaseEmail === "") {
                onEmailError();
                return;
            }

            //todo:
            // mixpanel.alias(email);
            // mixpanel.people.set({
            //     $email: email,
            // });

            //todo:
            // fbq('track', 'InitiateCheckout', {
            //     value: 50,
            //     currency: 'USD',
            // });

            setTimeout(function () {
                //todo:
                // mixpanel.track("Web-Payment-Started");
                var purchaseUrl = baseApiUrl + "/purchase?email=" + encodeURIComponent(purchaseEmail);
                if (discountCode) {
                    purchaseUrl += "&discount=" + discountCode;
                }
                //todo:
                // purchaseUrl += "&did=" + mixpanel.get_distinct_id();
                window.open(purchaseUrl, "_self");
            }, 300);

        }
        catch (err) {
            console.error("Error after clicking the Stripe button:");
            console.error(err && err.stack || err);
        }
    }

    //
    // The Stripe payment button has been clicked.
    //
    async function onPurchaseWithStripe() {
        try {
            const stripe = await _loadStripe();
            if (!stripe) {
                alert("Failed to load Stripe library.");
                return;
            }

            let purchaseEmail = email;
            if (purchaseEmail) {
                purchaseEmail = purchaseEmail.trim();
            }
           
            if (!purchaseEmail || purchaseEmail === "") {
                onEmailError();
                return;
            }

            var purchaseUrl = baseApiUrl + "/purchase-stripe?email=" + encodeURIComponent(purchaseEmail);
            if (discountCode) {
                purchaseUrl += "&discount=" + discountCode;
            }
            //todo:purchaseUrl += "&did=" + mixpanel.get_distinct_id();

            var r = new XMLHttpRequest();
            r.open("GET", purchaseUrl, true);
            r.onreadystatechange = function () {
                if (r.readyState !== XMLHttpRequest.DONE) {
                    return;
                }
                
                if (r.status != 200) {
                    alert("Checkout failed, problem in the backend. Please let us know at support@data-forge-notebook.com");
                    return;
                }

                var response = JSON.parse(r.responseText);
                if (response.session) {
                    stripe.redirectToCheckout({
                            sessionId: response.session,
                        })
                        .then(function (result) {
                            alert("Checkout failed, details: \n" + result.error.message);
                        });
                }
                else {
                    alert("Checkout failed, problem in the backend. Please let us know at support@data-forge-notebook.com");
                }
            };
            r.send();


        }
        catch (err) {
            console.error("Error after clicking the Stripe button:");
            console.error(err && err.stack || err);
        }
    }

    return (
        <Layout>
            <div className="product">
                <img className="logo" src="images/logo.png" alt="Data-Forge Notebook logo" />

                <div className="mt-8">
                    <h3>Your email</h3>
                    <input 
                        id="email-input"
                        placeholder="Enter your email here"
                        value={email}
                        onChange={evt => setEmail(evt.target.value)}
                        />
                    <p>
                        Your email is needed to send you download links and
                        won't be shared with anyone else.
                    </p>
                </div>

                <div className="mt-16">
                    <a 
                        className="cursor-pointer" 
                        onClick={onPurchaseWithPayPal} 
                        >
                        <div 
                            className="paypal-button paypal-button-number-0 paypal-button-layout-horizontal paypal-button-shape-pill paypal-button-branding-branded paypal-button-number-single paypal-button-env-production paypal-should-focus paypal-button-label-buynow paypal-button-color-gold paypal-button-logo-color-blue" 
                            role="button" 
                            aria-label="paypal" 
                            tabIndex={0}
                            >
                            <span 
                                className="paypal-button-text" 
                                > 
                                Buy now with 
                            </span>
                            <img 
                                className="paypal-button-logo paypal-button-logo-pp paypal-button-logo-gold" 
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICAgIDxwYXRoIGZpbGw9IiMwMDljZGUiIGQ9Ik0gMjAuOTA1IDkuNSBDIDIxLjE4NSA3LjQgMjAuOTA1IDYgMTkuNzgyIDQuNyBDIDE4LjU2NCAzLjMgMTYuNDExIDIuNiAxMy42OTcgMi42IEwgNS43MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMy4xIDQuNjE1IDMuNiBMIDEuMzM5IDI1LjggQyAxLjMzOSAyNi4yIDEuNjIgMjYuNyAyLjA4OCAyNi43IEwgNi45NTYgMjYuNyBMIDYuNjc1IDI4LjkgQyA2LjU4MSAyOS4zIDYuODYyIDI5LjYgNy4yMzYgMjkuNiBMIDExLjM1NiAyOS42IEMgMTEuODI1IDI5LjYgMTIuMjkyIDI5LjMgMTIuMzg2IDI4LjggTCAxMi4zODYgMjguNSBMIDEzLjIyOCAyMy4zIEwgMTMuMjI4IDIzLjEgQyAxMy4zMjIgMjIuNiAxMy43OSAyMi4yIDE0LjI1OCAyMi4yIEwgMTQuODIxIDIyLjIgQyAxOC44NDUgMjIuMiAyMS45MzUgMjAuNSAyMi44NzEgMTUuNSBDIDIzLjMzOSAxMy40IDIzLjE1MyAxMS43IDIyLjAyOSAxMC41IEMgMjEuNzQ4IDEwLjEgMjEuMjc5IDkuOCAyMC45MDUgOS41IEwgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAxMjE2OSIgZD0iTSAyMC45MDUgOS41IEMgMjEuMTg1IDcuNCAyMC45MDUgNiAxOS43ODIgNC43IEMgMTguNTY0IDMuMyAxNi40MTEgMi42IDEzLjY5NyAyLjYgTCA1LjczOSAyLjYgQyA1LjI3MSAyLjYgNC43MSAzLjEgNC42MTUgMy42IEwgMS4zMzkgMjUuOCBDIDEuMzM5IDI2LjIgMS42MiAyNi43IDIuMDg4IDI2LjcgTCA2Ljk1NiAyNi43IEwgOC4yNjcgMTguNCBMIDguMTczIDE4LjcgQyA4LjI2NyAxOC4xIDguNzM1IDE3LjcgOS4yOTYgMTcuNyBMIDExLjYzNiAxNy43IEMgMTYuMjI0IDE3LjcgMTkuNzgyIDE1LjcgMjAuOTA1IDEwLjEgQyAyMC44MTIgOS44IDIwLjkwNSA5LjcgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA5LjQ4NSA5LjUgQyA5LjU3NyA5LjIgOS43NjUgOC45IDEwLjA0NiA4LjcgQyAxMC4yMzIgOC43IDEwLjMyNiA4LjYgMTAuNTEzIDguNiBMIDE2LjY5MiA4LjYgQyAxNy40NDIgOC42IDE4LjE4OSA4LjcgMTguNzUzIDguOCBDIDE4LjkzOSA4LjggMTkuMTI3IDguOCAxOS4zMTQgOC45IEMgMTkuNTAxIDkgMTkuNjg4IDkgMTkuNzgyIDkuMSBDIDE5Ljg3NSA5LjEgMTkuOTY4IDkuMSAyMC4wNjMgOS4xIEMgMjAuMzQzIDkuMiAyMC42MjQgOS40IDIwLjkwNSA5LjUgQyAyMS4xODUgNy40IDIwLjkwNSA2IDE5Ljc4MiA0LjYgQyAxOC42NTggMy4yIDE2LjUwNiAyLjYgMTMuNzkgMi42IEwgNS43MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMyA0LjYxNSAzLjYgTCAxLjMzOSAyNS44IEMgMS4zMzkgMjYuMiAxLjYyIDI2LjcgMi4wODggMjYuNyBMIDYuOTU2IDI2LjcgTCA4LjI2NyAxOC40IEwgOS40ODUgOS41IFoiPjwvcGF0aD4KPC9zdmc+Cg==" 
                                alt="pp" 
                                /> 
                            <img 
                                className="paypal-button-logo paypal-button-logo-paypal paypal-button-logo-gold" 
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg==" 
                                alt="paypal" 
                                />
                        </div>
                    </a>
                </div>

                <div className="mt-8">
                    <button 
                        id="checkout-button"
                        onClick={onPurchaseWithStripe}
                        >
                        Buy now with credit card
                    </button>
                </div>

                <div className="mt-16 discount-code-container">
                    <h3>Discount code</h3>
                    <input 
                        className="mt-0"
                        id="discount-code-input"
                        value={discountCode}
                        placeholder="Enter your discount code here"
                        onChange={evt => setDiscountCode(evt.target.value)}
                        />
                    <p className="mt-0 mb-1">
                        
                    </p>
                </div>

                <p className="subtext" id="discount-text">
                    {discountMsg}
                </p>

            </div>

        </Layout>
    )
}
