import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

function Footer() {
    return (
        <footer className="bg-slate-800 text-white py-3 px-4 mt-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Contact Info */}
                <div>
                    <h2 className="text-2xl font-semibold ">Contact Us</h2>
                    <p>Phone: 7091071889</p>
                    <p>Email: manyakumar26@gmail.com</p>
                </div>

                {/* Office Address */}
                <div>
                    <h2 className="text-2xl font-semibold">Office Address</h2>
                    <p>Flat No: 32-B</p>
                    <p>Amber Hostel</p>
                    <p>IIT DHANBAD</p>
                    <p>846002</p>
                </div>

                {/* Social Media Links */}
                <div>
                    <h2 className="text-2xl font-semibold justify-center mb-2">Follow Us</h2>
                    <ul className="flex justify-center md:justify-start gap-4 text-3xl">
                        <li className="text-pink-500 transition"><FaInstagram /></li>
                        <li className="text-green-400 transition"><FaWhatsapp /></li>
                        <li className="text-red-500 transition"><FaYoutube /></li>
                        <li className="text-blue-500 transition"><RiTwitterXLine /></li>
                        <li className="text-blue-700 transition"><FaFacebook /></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
                &copy; {new Date().getFullYear()} Cucie. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
