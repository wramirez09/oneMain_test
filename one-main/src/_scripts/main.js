// Main javascript entry point
// Should handle bootstrapping/starting application
'use strict';
import Button from '../_modules/atoms/button/button';
import Radios from "../_modules/checking/checkingRadios";
import Restrictions from "../_modules/checking/Restrictions";

const radios = new Radios();
radios.init();

// checking form restrictions 
const formRestriction = new Restrictions();

formRestriction.init();

const button = new Button();
button.init();
