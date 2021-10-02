## Araşdırma mövzuları:

HTML Elementləri üçün CSS Default Brauzer Dəyərləri hansılardır? 

### h1-h6 tags:
-	display: block;
- font-size: 2em;
- margin-top: 0.67em;
- margin-bottom: 0.67em;
- margin-left: 0;
- margin-right: 0;
- font-weight: bold;

#### display:
   - display-block: bu xüsusiyyətə malik olan element olduğu sətri bütövlükdə tutur. Bütöv sətir tutulduğu üşün ondan sonra yazılan elemenetlər asağıdan yazılır. div, h1-h6, p, ul, li, ol və s. bunlar block elementlerdir. Block elementləri ölçü ala bilir

  - display:inline: blockdan fərqli olaraq ölçü  qəbul etmədiyi üçün olduğu yer ilə kifayətlənir. a, i, span, img və s. bunlar

  - display:inline-block: həm ölçü qəbul edir, həm də ki olduğu yer ilə kifayətlənir
 
#### font-size: 
   - em - fontsize bağlıdır, əgər özümüz font-size verməmişdiksə onda default dəyərin emini hesablayır (1em = 16px). Em vahidi, əsas elementin şrift ölçüsünün hesablanmış dəyərinə əsaslanan nisbi bir vahiddir. Bu o deməkdir ki, uşaq elementləri font ölçüsünü təyin etmək üçün həmişə valideynlərindən asılıdır.
   - rem - 16px (kök elementin ölçüsü) * x hesablanır. Rem vahidlərində isə şrift ölçüsü kök elementin (və ya htmlelementin) dəyərindən asılıdır .
   - Vw (Viewport-Width) - səhifənin görünən tərəfinin x%ni tutur. Mətn ölçüsü brauzer pəncərəsinin ölçüsünə uyğun olacaq (1vw = 1%)
   - vh (viewport-Height) - sehifənin görünən tərəfinin x%ni tutur (1vh = 1%)

### a tag:
   - color: (internal value);
   - text-decoration: underline;
   - cursor: auto;

#### text-decoration:
   - text-decoration-color (xəttin rəngini təyin edir)
     - text-decoration-color: red; 
     - text-decoration-color: #21ff21;
     - text-decoration-color: rgb(255, 90, 255);
     - text-decoration-color: hsl(70, 100%, 40%);
     - text-decoration-color: currentColor;
   - text-decoration-line (xəttin növünü təyin edir)
     - text-decoration-line: none;
     - text-decoration-line: underline; 
     - text-decoration-line: overline; 
     - text-decoration-line: line-through;  
     - text-decoration-line: underline overline;  
     - text-decoration-line: underline line-through;
     - text-decoration-line: overline underline line-through;
     - text-decoration-line: blink;
   - text-decoration-style ()
     - text-decoration-style: solid;
     - text-decoration-style: double;
     - text-decoration-style: dotted;
     - text-decoration-style: dashed;
     - text-decoration-style: wavy;
   - Qlobal dəyərlər:
     - initial
     - inherit
     - revert
     - unset

### button tag:
  - appearance: auto;
  - -webkit-writing-mode: horizontal-tb !important;
  - font-style: ;
  - font-variant-ligatures: ;
  - font-variant-caps: ;
  - font-variant-numeric: ;
  - font-variant-east-asian: ;
  - font-weight: ;
  - font-stretch: ;
  - font-size: ;
  - font-family: ;
  - text-rendering: auto;
  - color: -internal-light-dark(black, white);
  - letter-spacing: normal;
  - word-spacing: normal;
  - line-height: normal;
  - text-transform: none;
  - text-indent: 0px;
  - text-shadow: none;
  - display: inline-block;
  - text-align: center;
  - align-items: flex-start;
  - cursor: default;
  - box-sizing: border-box;
  - background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
  - margin: 0em;
  - padding: 1px 6px;
  - border-width: 2px;
  - border-style: outset;
  - border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  - border-image: initial;

#### appearance (istifadəçilərin əməliyyat sisteminin mövzusuna əsaslanan bir platforma üslubu istifadə edərək bir elementi göstərmək üçün istifadə olunur):
   - /* CSS Basic User Interface Module Level 4 values */
     - appearance: none;
     - appearance: auto;
     - appearance: menulist-button;
     - appearance: textfield;

  - /* "Compat-auto" values, which have the same effect as 'auto' */
     - appearance: button;
     - appearance: searchfield;
     - appearance: textarea;
     - appearance: push-button;
     - appearance: slider-horizontal;
     - appearance: checkbox;
     - appearance: radio;
     - appearance: square-button;
     - appearance: menulist;
     - appearance: listbox;
     - appearance: meter;
     - appearance: progress-bar;

  - /* Partial list of available values in Gecko */
     - -moz-appearance: scrollbarbutton-up;
     - -moz-appearance: button-bevel;
 
  - /* Partial list of available values in WebKit/Blink (as well as Gecko and Edge) */
     - -webkit-appearance: media-mute-button;
     - -webkit-appearance: caret;
     - 
  - -webkit-appearance: button; /* WebKit */ (Google Chrome, Safari)
  - -moz-appearance: button; /* Mozilla */
  - -o-appearance: button; /* Opera */
  - -ms-appearance: button; /* Internet Explorer */

#### writing-mode (mətn sətirlərinin üfüqi və ya şaquli olaraq qoyulacağını təyin edir):
   - writing-mode: horizontal-tb; (top to bottom)
   - writing-mode: vertical-lr; (left to rihgt)
   - writing-mode: vertical-rl; (right to left)

#### font-variant (bir yazı tipi üçün bütün şrift variantlarını təyin etməyə imkan verir):
   - font-variant-numeric
     - font-variant-numeric: normal;
     - font-variant-numeric: ordinal;
     - font-variant-numeric: slashed-zero; (O və 0 arasında fərq qoyur)
     - font-variant-numeric: lining-nums;         /* numeric-figure-values */
     - font-variant-numeric: oldstyle-nums;       /* numeric-figure-values */
     - font-variant-numeric: proportional-nums;   /* numeric-spacing-values */
     - font-variant-numeric: tabular-nums;        /* numeric-spacing-values */
     - font-variant-numeric: diagonal-fractions;  /* numeric-fraction-values */
     - font-variant-numeric: stacked-fractions;   /* numeric-fraction-values */
     - font-variant-numeric: oldstyle-nums stacked-fractions;
   - font-variant-alternates
     - font-variant-alternates: normal;
     - font-variant-alternates: historical-forms;
     - font-variant-alternates: stylistic(user-defined-ident);
     - font-variant-alternates: styleset(user-defined-ident);
     - font-variant-alternates: character-variant(user-defined-ident);
     - font-variant-alternates: swash(user-defined-ident);
     - font-variant-alternates: ornaments(user-defined-ident);
     - font-variant-alternates: annotation(user-defined-ident);
     - font-variant-alternates: swash(ident1) annotation(ident2);
   - font-variant-ligatures
     - font-variant-ligatures: normal;
     - font-variant-ligatures: none;
     - font-variant-ligatures: common-ligatures;           /* common-lig-values */
     - font-variant-ligatures: no-common-ligatures;        /* common-lig-values */
     - font-variant-ligatures: discretionary-ligatures;    /* discretionary-lig-values */
     - font-variant-ligatures: no-discretionary-ligatures; /* discretionary-lig-values */
     - font-variant-ligatures: historical-ligatures;       /* historical-lig-values */
     - font-variant-ligatures: no-historical-ligatures;    /* historical-lig-values */
     - font-variant-ligatures: contextual;                 /* contextual-alt-values */
     - font-variant-ligatures: no-contextual;              /* contextual-alt-values */
   - font-variant-east-asian
     - font-variant-east-asian: normal;
     - font-variant-east-asian: ruby;
     - font-variant-east-asian: jis78;              /* east-asian-variant-values */
     - font-variant-east-asian: jis83;              /* east-asian-variant-values */
     - font-variant-east-asian: jis90;              /* east-asian-variant-values */
     - font-variant-east-asian: jis04;              /* east-asian-variant-values */
     - font-variant-east-asian: simplified;         /* east-asian-variant-values */
     - font-variant-east-asian: traditional;        /* east-asian-variant-values */
     - font-variant-east-asian: full-width;         /* east-asian-width-values */
     - font-variant-east-asian: proportional-width; /* east-asian-width-values */
     - ont-variant-east-asian: ruby full-width jis83;
   - font-variant-caps
     - font-variant-caps: normal;
     - font-variant-caps: small-caps;
     - font-variant-caps: all-small-caps;
     - font-variant-caps: petite-caps;
     - font-variant-caps: all-petite-caps;
     - font-variant-caps: unicase;
     - font-variant-caps: titling-caps;
     
#### font-stretch (xassəsi şriftdən normal, sıxlaşdırılmış və ya genişləndirilmiş üz seçir) :
   - font-stretch: ultra-condensed;(50%)
   - font-stretch: extra-condensed;(62.5%)
   - font-stretch: condensed;(75%)
   - font-stretch: semi-condensed;(87.5%)
   - font-stretch: normal (100%);
   - font-stretch: semi-expanded;(112.5%)
   - font-stretch: expanded; (125%)
   - font-stretch: extra-expanded;(150%)
   - font-stretch: ultra-expanded;(200%)
   - font-stretch: 50%;
   - font-stretch: 100%;
   - font-stretch: 200%;

#### text-rendering (göstərmə mühərrikinə mətn göstərərkən nəyi optimallaşdırmaq barədə məlumat verir):
   - text-rendering: auto;
   - text-rendering: optimizeSpeed; (işləmə sürəti)
   - text-rendering: optimizeLegibility; (oxunaqlılıq / bəzi şriftlər üçün 20px -dən kiçik mətndə yazılar yazmağa imkan verir)
   - text-rendering: geometricPrecision; (həndəsi dəqiqlik)

#### text-transform (mətnin böyük hərflə yazılmasına nəzarət edir):
   - text-transform: none;
   - text-transform: capitalize;
   - text-transform: uppercase;
   - text-transform: lowercase;
   - text-transform: full-width;
   - text-transform: full-size-kana;
   
#### text-indent (mətn blokunda birinci sətrin girintisini təyin edir):
   -  text-indent: 50px;
   -  text-indent: -2em;
   -  text-indent: 30%;

#### text-shadow (mətnə kölgə əlavə edir):
   - /* offset-x | offset-y | blur-radius | color */
     - text-shadow: 1px 1px 2px black;

   - /* color | offset-x | offset-y | blur-radius */
     - text-shadow: #fc0 1px 0 10px;

   - /* offset-x | offset-y | color */
     - text-shadow: 5px 5px #558abb;

   - /* color | offset-x | offset-y */
     - text-shadow: white 2px 5px;

   - /* offset-x | offset-y | Use defaults for color and blur-radius */
      - text-shadow: 5px 10px;
#### border-image (müəyyən bir elementin ətrafında bir şəkil çəkir, elementin adi sərhədini əvəz edir.):
   - /* source | slice */
      - border-image: linear-gradient(red, blue) 27;

   - /* source | slice | repeat */
      - border-image: url("/images/border.png") 27 space;

   - /* source | slice | width */
      - border-image: linear-gradient(red, blue) 27 / 35px;

   - /* source | slice | width | outset | repeat */
      - border-image: url("/images/border.png") 27 23 / 50px 30px / 1rem round space;

       - border-image-source: url(image.jpg);
       - border-image-source: linear-gradient(to top, red, yellow);
        - border-image-slice: 30 fill; (hissələrə bölmə)
        - border-image-slice: 30%; (All sides)
        - border-image-slice: 10% 30%; (vertical | horizontal)
        - border-image-slice: 7 12 14 5; (top | right | bottom | left)
        - border-image-outset: 1rem; (outset - bir elementin haşiyə görüntüsünün sərhəd qutusundan təyin olunduğu məsafəni təyin edir)
        - border-image-outset: 1.5;
        - border-image-outset: 1 1.2; (vertical | horizontal)
        - border-image-outset: 30px 2 45px; (top | horizontal | bottom)
        - border-image-outset: 7px 12px 14px 5px; (top | right | bottom | left)
        - border-image-repeat: stretch;
        - border-image-repeat: repeat;
        - border-image-repeat: round;
        - border-image-repeat: space;
        - border-image-repeat: round stretch; (vertical | horizontal)
        - border-image-width: 1rem;
        - border-image-width: 25%;
        - border-image-width: 3;
        - border-image-width: 2em 3em; (vertical | horizontal)
        
### ul tag:
  - display: block;
  - list-style-type: disc;
  - margin-top: 1em;
  - margin-bottom: 1 em;
  - margin-left: 0;
  - margin-right: 0;
  - padding-left: 40px;

#### list-style-type
  - list-style-type: disc;
  - list-style-type: circle;
  - list-style-type: square;
  - list-style-type: decimal;
  - list-style-type: georgian;
  - list-style-type: space-counter;

### li tag:
  - display: list-item;

### section tag:
  - display: block;

### img tag:
  - display: inline-block;

### span tag:
