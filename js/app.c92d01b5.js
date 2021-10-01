(function(){var t={1357:function(t,e,s){"use strict";var i=s(9963),n=s(8684),a=(s(2467),s(6252)),r=s(2262),o=s(3577),l=s(1446),c=s(235),h=s(9400);function u(t){(0,a.bv)((()=>window.addEventListener("resize",t,!1))),(0,a.Ah)((()=>window.removeEventListener("resize",t,!1)))}const _=["fill"];var d=(0,a.aZ)({props:{width:{type:Number,required:!1,default:window.innerWidth},height:{type:Number,required:!1,default:window.innerHeight},wave:{type:Number,required:!1,default:1},peak:{type:Number,required:!1,default:.5},level:{type:Number,required:!1,default:.5},color:{type:String,required:!1,default:"#000000"},period:{type:Number,required:!1,default:300}},setup(t){const e=t,s=(0,r.Fl)((()=>h(1*e.peak))),i=(0,r.Fl)((()=>h(-1*e.peak))),n=(0,r.Fl)((()=>Math.round((e.period||300)+500*Math.random()))),l=(0,r.Fl)((()=>e.height*(1-e.level))),c=(0,r.Fl)((()=>[`--d0: path('${s.value}')`,`--d1: path('${i.value}')`,`--period: ${n.value}ms`,`transform: translateY(${l.value}px)`].join(";")));function h(t){const{wave:s,width:i,height:n}=e,a=0,r=i/s,o=r*Math.random(),l=[`M ${-o} ${a}`];for(let e=0;e<s+1;e++){const s=.25*r*t*(e%2?1:-1),i=`${r*(e+.5)-o} ${a+s}`,n=`${r*(e+1)-o} ${a}`;l.push(`C ${i}, ${i}, ${n}`)}return l.push(`L ${i} ${2*n} L 0 ${2*n} Z`),l.join(" ")}return(e,s)=>((0,a.wg)(),(0,a.iD)("path",{style:(0,o.j5)((0,r.SU)(c)),fill:t.color},null,12,_))}}),f=s(3744);const E=(0,f.Z)(d,[["__scopeId","data-v-0a66ea03"]]);var S=E;const p={class:"sonic"};var w=(0,a.aZ)({props:{peak:{type:Number,required:!0},level:{type:Number,required:!0},period:{type:Number,required:!0}},setup(t){const e=t,s=(0,r.iH)(window.innerWidth),i=(0,r.iH)(window.innerHeight);return u((()=>{s.value=window.innerWidth,i.value=window.innerHeight})),(t,n)=>((0,a.wg)(),(0,a.iD)("svg",p,[(0,a.Wm)(S,{width:s.value,height:i.value,peak:e.peak,wave:Math.round(s.value/640*2),level:e.level,period:e.period,color:"#50E3C2FF"},null,8,["width","height","peak","wave","level","period"]),(0,a.Wm)(S,{width:s.value,height:i.value,peak:e.peak,wave:Math.round(s.value/640*3),level:e.level,period:e.period,color:"#46DBBAB2"},null,8,["width","height","peak","wave","level","period"]),(0,a.Wm)(S,{width:s.value,height:i.value,peak:e.peak,wave:Math.round(s.value/640*5),level:e.level,period:e.period,color:"#47CCC2CC"},null,8,["width","height","peak","wave","level","period"])]))}});const g=(0,f.Z)(w,[["__scopeId","data-v-327205e5"]]);var m=g,v=(s(4633),s(9539)),j=s(7766),b=s(5001),y=s(4155),L=s(8764)["Buffer"];const A=(0,v.promisify)(j.FY);function I(t){return new Promise((e=>{const s=s=>{t.removeListener("end",i),e(s)},i=()=>{t.removeListener("entry",s),e(null)};t.once("entry",s),t.once("end",i),t.readEntry()}))}async function T(t){const e=L.from(await t.arrayBuffer()),s=await A(e,{lazyEntries:!0}),i=(0,v.promisify)(s.openReadStream.bind(s)),n={};let a;while(null!=(a=await I(s))){if(a.fileName.endsWith("/"))continue;const t=await i(a);n[`/${a.fileName}`]=await(0,b.Z)(t).spoon()}return n}window.setImmediate=y.nextTick;var k=s(8764)["Buffer"];async function Z(t){const e=await T(t),{dir:s,content:i}=U(e)||{};if(!i)return null;const n=k.from(i).toString().replace(/\n/g," ").split(" ").map((t=>t.trim())).filter((t=>!!t)),a={flashMode:"qio",partitions:[]};for(let r=0;r<n.length-1;r++)if("--flash_mode"==n[r])a.flashMode=n[r+1];else if(n[r].match(/^0x([A-Fa-f0-9]+)$/)){const t=parseInt(RegExp.$1,16),i=`${s}/${n[r+1]}`;e[i]&&a.partitions.push({address:t,image:e[i]})}else if(n[r].match(/^([0-9]+)$/)){const t=parseInt(RegExp.$1),i=`${s}/${n[r+1]}`;e[i]&&a.partitions.push({address:t,image:e[i]})}return a}function U(t){for(const e in t)if(e.match(/^(.*)\/flash_args$/))return{dir:RegExp.$1,content:t[e]};return null}var P=s(2482),F=s(7187),B=s.n(F),C=s(2635),M=s.n(C);function H(t,e=1){return`0x${t.toString(16).padStart(2*e,"0")}`}async function $(t,e,s){return new Promise(((i,n)=>{const a=t=>{clearTimeout(r),i(t)},r=setTimeout((()=>{t.removeListener(e,a),n(new Error("Timeout"))}),s);t.once(e,a)}))}function D(t){return new Promise((e=>setTimeout(e,t)))}var R=s(8764)["Buffer"];function O(t){const e=R.alloc(2*t.length+2);e[0]=192;let s=1;for(let i=0;i<t.length;i++)192==t[i]?(e[s]=219,e[s+1]=220,s+=2):219==t[i]?(e[s]=219,e[s+1]=221,s+=2):(e[s]=t[i],s+=1);return e[s]=192,e.slice(0,s+1)}var N=s(8764)["Buffer"];function z(t,e){t=N.concat([t,e]);const s=[];let i=0,n=0,a=null;while(n<t.length)192==t[n]?(null==a?a=N.alloc(t.length):(s.push(a.slice(0,i)),a=null,i=0),n+=1):n<t.length-1&&219==t[n]&&220==t[n+1]?(null!=a&&(a[i]=192,i+=1),n+=2):n<t.length-1&&219==t[n]&&221==t[n+1]?(null!=a&&(a[i]=219,i+=1),n+=2):(null!=a&&(a[i]=t[n],i+=1),n+=1);return a=null!=a?N.concat([N.from([192]),a.slice(0,i)]):N.alloc(0),{queue:a,packets:s}}var G=s(8764)["Buffer"];const W=(0,v.promisify)(M().unzip),x=(0,v.promisify)(M().deflate),q="dataTerminalReady",K="requestToSend";class Y{constructor(t){(0,P.Z)(this,"CHIP_NAME","Espressif device"),(0,P.Z)(this,"IS_STUB",!1),(0,P.Z)(this,"COMPRESS",!0),(0,P.Z)(this,"ESP_FLASH_BEGIN",2),(0,P.Z)(this,"ESP_FLASH_DATA",3),(0,P.Z)(this,"ESP_FLASH_END",4),(0,P.Z)(this,"ESP_MEM_BEGIN",5),(0,P.Z)(this,"ESP_MEM_END",6),(0,P.Z)(this,"ESP_MEM_DATA",7),(0,P.Z)(this,"ESP_SYNC",8),(0,P.Z)(this,"ESP_READ_REG",10),(0,P.Z)(this,"ESP_FLASH_DEFL_BEGIN",16),(0,P.Z)(this,"ESP_FLASH_DEFL_DATA",17),(0,P.Z)(this,"ESP_FLASH_DEFL_END",18),(0,P.Z)(this,"ESP_SPI_ATTACH",13),(0,P.Z)(this,"ESP_CHANGE_BAUDRATE",15),(0,P.Z)(this,"ESP_RAM_BLOCK",6144),(0,P.Z)(this,"FLASH_WRITE_SIZE",1024),(0,P.Z)(this,"ESP_IMAGE_MAGIC",233),(0,P.Z)(this,"ESP_CHECKSUM_MAGIC",239),(0,P.Z)(this,"FLASH_SECTOR_SIZE",4096),(0,P.Z)(this,"STATUS_BYTES_LENGTH",2),(0,P.Z)(this,"BOOTLOADER_FLASH_OFFSET",0),(0,P.Z)(this,"FLASH_SIZES",{}),(0,P.Z)(this,"USB_JTAG_SERIAL_PID",4097),(0,P.Z)(this,"port",void 0),(0,P.Z)(this,"reader",void 0),(0,P.Z)(this,"dispatcher",void 0),(0,P.Z)(this,"queue",void 0),(0,P.Z)(this,"usb_jtag_serial",!1),(0,P.Z)(this,"STUB_CLASS",void 0),(0,P.Z)(this,"_trace",void 0),this.port=t,this.dispatcher=new(B()),this.queue=G.alloc(0),this._trace=Y.TRACE?t=>console.log(`%cTRACE ${t}`,"color: darkcyan"):()=>null}start(){this._read()}async release(){this.reader&&await this.reader.cancel()}async _read(){if(!this.port?.readable)return;const t=this.reader=this.port.readable.getReader();try{while(this.reader){const{value:e,done:s}=await t.read();if(!e||s)break;const i=G.from(e);this._trace(`Read ${i.length} bytes: ${i.toString("hex")}`);const{queue:n,packets:a}=z(this.queue,i);this.queue=n;for(const t of a)this._dispatch(t)}}finally{t.releaseLock(),delete this.reader}}async _write(t){t=O(t),this._trace(`Write ${t.length} bytes: ${t.toString("hex")}`);const e=this.port.writable?.getWriter();e&&(await e.write(t),e.releaseLock())}_dispatch(t){if(t.length<8)return;if(1!=t[0])return;const e=t[1],s=t.readUInt16LE(2),i=t.readUInt32LE(4);t=t.slice(8),this._trace(`< res op=${H(e)} len=${s} val=${i} data=${t.toString("hex")}`),this.dispatcher.emit(`res:${e}`,{val:i,data:t})}async command(t,e,s=0,i=500,n=5){this._trace(`> req op=${H(t)} len=${e.length} data=${e.toString("hex")}`);const a=G.alloc(8);a[0]=0,a[1]=t,a.writeUInt16LE(e.length,2),a.writeUInt32LE(s,4);const r=G.concat([a,e]);for(let l=0;l<n;l++)try{return await this._write(r),await $(this.dispatcher,`res:${t}`,i)}catch(o){}throw new Error("Timeout waiting for command response")}check({val:t,data:e}){if(e.length<this.STATUS_BYTES_LENGTH)throw new Error(`Only got ${e.length} byte status response.`);const s=e.slice(0,this.STATUS_BYTES_LENGTH);if(0!=s[0])throw new Error(`Command failed: ${s.toString("hex")}`);return e.length>this.STATUS_BYTES_LENGTH?e.slice(this.STATUS_BYTES_LENGTH):t}async sync(){const t=G.concat([G.from([7,7,18,32]),G.alloc(32,85)]),{val:e}=await this.command(this.ESP_SYNC,t);return e}async _bootloader_reset(t=!1){await(this.port?.setSignals({[q]:!1,[K]:!0})),await D(100),t&&await D(1200),await(this.port?.setSignals({[q]:!0,[K]:!1})),t&&await D(400),await D(50),await(this.port?.setSignals({[q]:!1,[K]:!1}))}async _bootloader_reset_usb(){await(this.port?.setSignals({[q]:!0,[K]:!1})),await D(100),await(this.port?.setSignals({[q]:!1,[K]:!0})),await D(100),await(this.port?.setSignals({[q]:!1,[K]:!1}))}async _connect_attempt(t=!1){this.usb_jtag_serial?await this._bootloader_reset_usb():await this._bootloader_reset(t);for(let s=0;s<5;s++)try{return await this.sync(),!0}catch(e){await D(50)}return!1}async connect(t=7){this.port?.getInfo()?.usbProductId==this.USB_JTAG_SERIAL_PID&&(this.usb_jtag_serial=!0,console.log("Detected integrated USB Serial/JTAG"));for(let s=0;s<t;s++)try{if(await this._connect_attempt(!1))return!0;if(await this._connect_attempt(!0))return!0}catch(e){}return!1}async read_reg(t){const e=G.alloc(4);e.writeUInt32LE(t,0);const{val:s}=await this.command(this.ESP_READ_REG,e);return s}async get_chip_description(){throw new Error("Not supported")}get_erase_size(t,e){return e}_checksum(t){let e=this.ESP_CHECKSUM_MAGIC;for(const s of t)e^=s;return e}async mem_begin(t,e,s,i){const n=G.alloc(16);n.writeUInt32LE(t,0),n.writeUInt32LE(e,4),n.writeUInt32LE(s,8),n.writeUInt32LE(i,12),this.check(await this.command(this.ESP_MEM_BEGIN,n,0,5e3,1))}async mem_block(t,e){const s=G.alloc(16);s.writeUInt32LE(t.length,0),s.writeUInt32LE(e,4),s.writeUInt32LE(0,8),s.writeUInt32LE(0,12);const i=G.concat([s,t]);this.check(await this.command(this.ESP_MEM_DATA,i,this._checksum(t),5e3,1))}async mem_finish(t=0){const e=G.alloc(8);e.writeUInt32LE(0==t?1:0,0),e.writeUInt32LE(t,4),this.check(await this.command(this.ESP_MEM_END,e,0,50,1))}async flash_begin(t,e){const s=Math.floor((t+this.FLASH_WRITE_SIZE-1)/this.FLASH_WRITE_SIZE),i=this.get_erase_size(e,t),n=G.alloc(16);return n.writeUInt32LE(i,0),n.writeUInt32LE(s,4),n.writeUInt32LE(this.FLASH_WRITE_SIZE,8),n.writeUInt32LE(e,12),this.check(await this.command(this.ESP_FLASH_BEGIN,n,0,5e3,1)),s}async flash_block(t,e){const s=G.alloc(16);s.writeUInt32LE(t.length,0),s.writeUInt32LE(e,4),s.writeUInt32LE(0,8),s.writeUInt32LE(0,12);const i=G.concat([s,t]);this.check(await this.command(this.ESP_FLASH_DATA,i,this._checksum(t),5e3,1))}async flash_finish(t=!1){const e=G.alloc(4);e.writeUInt32LE(t?0:1,0),this.check(await this.command(this.ESP_FLASH_END,e))}async flash_defl_begin(t,e,s){const i=Math.floor((e+this.FLASH_WRITE_SIZE-1)/this.FLASH_WRITE_SIZE),n=Math.floor((t+this.FLASH_WRITE_SIZE-1)/this.FLASH_WRITE_SIZE),a=this.IS_STUB?t:n*this.FLASH_WRITE_SIZE;console.log(`Comporessed ${t} bytes to ${e}...`);const r=G.alloc(16);return r.writeUInt32LE(a,0),r.writeUInt32LE(i,4),r.writeUInt32LE(this.FLASH_WRITE_SIZE,8),r.writeUInt32LE(s,12),this.check(await this.command(this.ESP_FLASH_DEFL_BEGIN,r,0,5e3,1)),i}async flash_defl_block(t,e){const s=G.alloc(16);s.writeUInt32LE(t.length,0),s.writeUInt32LE(e,4),s.writeUInt32LE(0,8),s.writeUInt32LE(0,12);const i=G.concat([s,t]);this.check(await this.command(this.ESP_FLASH_DEFL_DATA,i,this._checksum(t),5e3,1))}async flash_defl_finish(t=!1){const e=G.alloc(4);e.writeUInt32LE(t?0:1,0),this.check(await this.command(this.ESP_FLASH_DEFL_END,e))}_pad_image(t,e,s=255){const i=t.length%e;return 0!=i&&(t=G.concat([t,G.alloc(i,s)])),t}_parse_flash_size_arg(t){if(this.FLASH_SIZES[t])return this.FLASH_SIZES[t];{const e=Object.keys(this.FLASH_SIZES).join(", ");throw new Error(`Flash size '${t}' is not supported by this chip type. Supported sizes: ${e}`)}}async load_stub(){return null}async run_stub(){const t=await this.load_stub();if(!t)return null;console.log("Uploading stub...");for(const e of["text","data"]){if(!t[e])continue;const s=t[`${e}_start`],i=await W(G.from(t[e],"base64")),n=Math.floor((i.length+this.ESP_RAM_BLOCK-1)/this.ESP_RAM_BLOCK);await this.mem_begin(i.length,n,this.ESP_RAM_BLOCK,s);for(let t=0;t<n;t++){const e=t*this.ESP_RAM_BLOCK,s=e+this.ESP_RAM_BLOCK;await this.mem_block(i.slice(e,s),t)}}return console.log("Running stub..."),await this.mem_finish(t["entry"]),await D(500),console.log("Stub running..."),new this.STUB_CLASS(this.port)}async change_baud(t,e){console.log(`Changing baud rate from ${e} to ${t}`);const s=G.alloc(8);s.writeUInt32LE(t,0),s.writeUInt32LE(this.IS_STUB?e:0,4),await this.command(this.ESP_CHANGE_BAUDRATE,s),console.log("Changed.")}_update_image_flash_params(t,e,s){if(t!=this.BOOTLOADER_FLASH_OFFSET)return s;const i=s[0];let n=s[2],a=15&s[3],r=240&s[3];return i!=this.ESP_IMAGE_MAGIC?(console.warn(`Warning: Image file at ${t} doesn't look like an image file, so not changing any flash settings.`),s):(e.flashMode&&"keep"!=e.flashMode&&(n={qio:0,qout:1,dio:2,dout:3}[e.flashMode]),e.flashFreq&&"keep"!=e.flashFreq&&(a={"40m":0,"26m":1,"20m":2,"80m":15}[e.flashFreq]),e.flashSize&&"keep"!=e.flashSize&&(r=this._parse_flash_size_arg(e.flashSize)),s[2]=n,s[3]=a|r,s)}async flash(t,e){for(let s=0;s<t.partitions.length;s++){const{address:i}=t.partitions[s];let n,{image:a}=t.partitions[s];if(console.log(`Part ${s}: address=${H(i,4)} size=${a.length}`),a=this._pad_image(a,4),0==a.length){console.warn(`Skipped empty part ${s} address=${H(i,4)}`);continue}if(a=this._update_image_flash_params(i,t,a),this.COMPRESS){const t=a.length;a=await x(a,{level:9}),n=await this.flash_defl_begin(t,a.length,i)}else n=await this.flash_begin(a.length,i);let r=0,o=0;while(a.length>0){const t=a.slice(0,this.FLASH_WRITE_SIZE);this.COMPRESS?(console.log(`Writing... (${Math.round((r+1)/n*100)}%)`),await this.flash_defl_block(t,r)):(console.log(`Writing at ${H(i+o,4)}... (${Math.round((r+1)/n*100)}%)`),await this.flash_block(t,r)),a=a.slice(this.FLASH_WRITE_SIZE),r+=1,o+=t.length,e({index:s,blocks_written:r+1,blocks_total:n})}this.IS_STUB&&await this.read_reg(Y.CHIP_DETECT_MAGIC_REG_ADDR),console.log(`Wrote ${o} bytes`)}console.log("Leaving..."),this.IS_STUB&&(await this.flash_begin(0,0),this.COMPRESS?await this.flash_defl_finish(!1):await this.flash_finish(!1))}async hard_reset(){await(this.port?.setSignals({[q]:!1,[K]:!0})),await D(100),await(this.port?.setSignals({[q]:!1,[K]:!1}))}}(0,P.Z)(Y,"TRACE",!1),(0,P.Z)(Y,"CHIP_DETECT_MAGIC_REG_ADDR",1073745920);class V extends Y{constructor(...t){super(...t),(0,P.Z)(this,"CHIP_NAME","ESP8266"),(0,P.Z)(this,"IS_STUB",!1),(0,P.Z)(this,"FLASH_SIZES",{"512KB":0,"256KB":16,"1MB":32,"2MB":48,"4MB":64,"2MB-c1":80,"4MB-c1":96,"8MB":128,"16MB":144}),(0,P.Z)(this,"BOOTLOADER_FLASH_OFFSET",0),(0,P.Z)(this,"STUB_CLASS",J)}async load_stub(){return await s.e(468).then(s.t.bind(s,450,23))}async get_efuses(){return[await this.read_reg(1072693328),await this.read_reg(1072693332),await this.read_reg(1072693336),await this.read_reg(1072693340)]}_get_flash_size(t){const e=16&t[0],s=t[3]&1<<25,i=t[3]&1<<26,n=t[3]&1<<27;if(e&&!s){if(!n&&!i)return 1;if(!n&&i)return 2}if(!e&&s){if(!n&&!i)return 2;if(!n&&i)return 4}return-1}async get_chip_description(){const t=await this.get_efuses();if(16&t[0]||65536&t[2]){const e=this._get_flash_size(t),s=32&t[0],i={1:s?"ESP8285H08":"ESP8285N08",2:s?"ESP8285H16":"ESP8285N16"}[e]||"ESP8285";return i}return"ESP8266EX"}get_erase_size(t,e){const s=16,i=this.FLASH_SECTOR_SIZE,n=Math.floor((e+i-1)/i),a=Math.floor(t/i);let r=s-a%s;return n<r&&(r=n),n<2*r?Math.floor((n+1)/2)*i:(n-r)*i}}(0,P.Z)(V,"CHIP_DETECT_MAGIC_VALUE",[4293968129]);class J extends V{constructor(...t){super(...t),(0,P.Z)(this,"FLASH_WRITE_SIZE",16384),(0,P.Z)(this,"IS_STUB",!0)}get_erase_size(t,e){return e}}class X extends Y{constructor(...t){super(...t),(0,P.Z)(this,"CHIP_NAME","ESP32"),(0,P.Z)(this,"IS_STUB",!1),(0,P.Z)(this,"STATUS_BYTES_LENGTH",4),(0,P.Z)(this,"EFUSE_BLK0",1073061888),(0,P.Z)(this,"DR_REG_SYSCON_BASE",1073111040),(0,P.Z)(this,"FLASH_SIZES",{"1MB":0,"2MB":16,"4MB":32,"8MB":48,"16MB":64}),(0,P.Z)(this,"BOOTLOADER_FLASH_OFFSET",4096),(0,P.Z)(this,"STUB_CLASS",Q)}async load_stub(){return await s.e(458).then(s.t.bind(s,2699,23))}async read_efuse(t,e){return await this.read_reg(t+4*e)}async get_pkg_version(){const t=await this.read_efuse(this.EFUSE_BLK0,3);return(t>>9&7)+((t>>2&1)<<3)}async get_chip_revision(){const t=await this.read_efuse(this.EFUSE_BLK0,3),e=await this.read_efuse(this.EFUSE_BLK0,5),s=await this.read_reg(this.DR_REG_SYSCON_BASE+124),i=t>>15&1,n=e>>20&1,a=s>>31&1;return i?n?a?3:2:1:0}async get_chip_description(){const t=await this.get_pkg_version(),e=await this.get_chip_revision(),s=3==e,i=1&await this.read_efuse(this.EFUSE_BLK0,3);let n={0:i?"ESP32-S0WDQ6":"ESP32-D0WDQ6",1:i?"ESP32-S0WD":"ESP32-D0WD",2:"ESP32-D2WD",4:"ESP32-U4WDH",5:s?"ESP32-PICO-V3":"ESP32-PICO-D4",6:"ESP32-PICO-V3-02"}[t]||"unknown ESP32";return n.startsWith("ESP32-D0WD")&&s&&(n+="-V3"),`${n} (revision ${e})`}}(0,P.Z)(X,"CHIP_DETECT_MAGIC_VALUE",[15736195]);class Q extends X{constructor(...t){super(...t),(0,P.Z)(this,"FLASH_WRITE_SIZE",16384),(0,P.Z)(this,"STATUS_BYTES_LENGTH",2),(0,P.Z)(this,"IS_STUB",!0)}}class tt extends X{constructor(...t){super(...t),(0,P.Z)(this,"CHIP_NAME","ESP32-S2"),(0,P.Z)(this,"EFUSE_BASE",1061265408),(0,P.Z)(this,"EFUSE_BLK0",this.EFUSE_BASE+48),(0,P.Z)(this,"EFUSE_BLK1",this.EFUSE_BASE+68),(0,P.Z)(this,"STUB_CLASS",et)}async load_stub(){return await s.e(685).then(s.t.bind(s,8531,23))}async get_pkg_version(){const t=await this.read_efuse(this.EFUSE_BLK1,3);return t>>21&15}async get_chip_description(){return{0:"ESP32-S2",1:"ESP32-S2FH16",2:"ESP32-S2FH32"}[await this.get_pkg_version()]||"unknown ESP32-S2"}}(0,P.Z)(tt,"CHIP_DETECT_MAGIC_VALUE",[1990]);class et extends tt{constructor(...t){super(...t),(0,P.Z)(this,"FLASH_WRITE_SIZE",16384),(0,P.Z)(this,"STATUS_BYTES_LENGTH",2),(0,P.Z)(this,"IS_STUB",!0)}}class st extends X{constructor(...t){super(...t),(0,P.Z)(this,"CHIP_NAME","ESP32-C3"),(0,P.Z)(this,"EFUSE_BASE",1610647552),(0,P.Z)(this,"EFUSE_BLK0",this.EFUSE_BASE+48),(0,P.Z)(this,"EFUSE_BLK1",this.EFUSE_BASE+68),(0,P.Z)(this,"STUB_CLASS",it)}async load_stub(){return await s.e(784).then(s.t.bind(s,4347,23))}async get_pkg_version(){const t=await this.read_efuse(this.EFUSE_BLK1,3);return t>>21&7}async get_chip_revision(){const t=await this.read_efuse(this.EFUSE_BLK1,3);return t>>18&7}async get_chip_description(){const t={0:"ESP32-C3"}[await this.get_pkg_version()]||"unknown ESP32-C3",e=await this.get_chip_revision();return`${t} (revision ${e})`}}(0,P.Z)(st,"CHIP_DETECT_MAGIC_VALUE",[1763790959,456216687]);class it extends st{constructor(...t){super(...t),(0,P.Z)(this,"FLASH_WRITE_SIZE",16384),(0,P.Z)(this,"STATUS_BYTES_LENGTH",2),(0,P.Z)(this,"IS_STUB",!0)}}const nt=115200,at=96e4,rt=[V,X,tt,st];class ot extends(B()){constructor(...t){super(...t),(0,P.Z)(this,"serial",null),(0,P.Z)(this,"loader",null)}async open(t){this.serial=t;try{await this.serial.open({baudRate:nt});const t=new Y(this.serial);t.start(),await t.connect();const e=await t.read_reg(Y.CHIP_DETECT_MAGIC_REG_ADDR);for(const n of rt)n.CHIP_DETECT_MAGIC_VALUE.includes(e)&&(this.loader=new n(this.serial));if(await t.release(),!this.loader)throw new Error("Unsupported chip");this.loader.start();const s=await this.loader.get_chip_description();console.log(`Detected ${s}`),this.emit("connect",{chip_description:s});const i=await this.loader.run_stub();if(!i)return;await this.loader.release(),this.loader=i,this.loader.start(),await this.loader.change_baud(at,nt),await D(100),await this.loader.release(),await this.serial.close(),await this.serial.open({baudRate:at}),this.loader.start()}catch(e){throw console.warn("Failed launching loader",e),await this.serial.close(),this.serial=null,e}}async close(){this.loader&&(await this.loader.release(),this.loader=null),this.serial&&(await this.serial.close(),this.serial=null)}async flash(t){await(this.loader?.flash(t,(t=>this.emit("progress",t)))),await(this.loader?.hard_reset())}}var lt=ot;const ct={class:"content"},ht=(0,a._)("h1",null,"Web ESPTool",-1),ut=(0,a._)("div",{class:"author"},"by XiNGRZ",-1),_t={key:0,class:"main upload"},dt={class:"ant-upload-drag-icon"},ft={key:0,class:"ant-upload-text file"},Et={key:1,class:"ant-upload-text"},St={key:1,class:"main progress"},pt={class:"buttons"},wt=(0,a.Uk)("开始烧录"),gt=(0,a._)("div",{class:"footer"},[(0,a._)("div",null,"Copyright © 2021 XiNGRZ"),(0,a._)("div",null,[(0,a._)("a",{href:"https://github.com/xingrz/web-esptool"},"Fork me on GitHub")])],-1);var mt=(0,a.aZ)({setup(t){const e=16777216,s=(0,r.iH)(null),i=(0,r.iH)(null),n=(0,r.iH)("idle");let u=null,_=[],d=0;const f=(0,r.Fl)((()=>"flashing"==n.value?.7:"connecting"==n.value?.4:null!=i.value&&i.value>=100?0:.2)),E=(0,r.Fl)((()=>null==i.value?.02:.02+i.value/100*1.1)),S=new lt;async function p(t){t.size>=e?l.Z.error(`文件过大: ${Math.round(t.size/1024/1024)} MB`):(u=await Z(t),null!=u?(s.value=t,_=u.partitions.map((({image:t})=>t.length)),d=_.reduce(((t,e)=>t+e),0)):l.Z.error("该文件不是一个合法的固件包"))}async function w(){n.value="connecting",i.value=0;try{const t=await navigator.serial.requestPort();await S.open(t)}catch(t){return l.Z.error("设备打开失败"),void(n.value="idle")}n.value="flashing";try{await S.flash(u)}catch(t){console.error(t),l.Z.error("烧录失败")}await S.close(),console.log("done"),n.value="idle"}return S.on("connect",(({chip_description:t})=>{console.log(`Connected: ${t}`),l.Z.success(`已连接：${t}`)})),S.on("progress",(({index:t,blocks_written:e,blocks_total:s})=>{let n=0;for(let i=0;i<t;i++)n+=_[i];const a=n+_[t]*(e/s);i.value=Math.min(100,a/d*100)})),(t,e)=>{const l=(0,a.up)("a-upload-dragger"),u=(0,a.up)("a-button");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(m,{peak:(0,r.SU)(f),level:(0,r.SU)(E),period:500},null,8,["peak","level"]),(0,a._)("div",ct,[ht,ut,null==i.value?((0,a.wg)(),(0,a.iD)("div",_t,[(0,a.Wm)(l,{accept:".zip",showUploadList:!1,customRequest:({file:t})=>p(t),class:"uploader"},{default:(0,a.w5)((()=>[(0,a._)("p",dt,[s.value?((0,a.wg)(),(0,a.j4)((0,r.SU)(c.Z),{key:0})):((0,a.wg)(),(0,a.j4)((0,r.SU)(h.Z),{key:1}))]),s.value?((0,a.wg)(),(0,a.iD)("p",ft,(0,o.zw)(s.value.name),1)):((0,a.wg)(),(0,a.iD)("p",Et,"点击选择或将固件包拖放到此处"))])),_:1},8,["customRequest"])])):(0,a.kq)("",!0),null!=i.value?((0,a.wg)(),(0,a.iD)("div",St,(0,o.zw)(Math.floor(i.value||0))+"%",1)):(0,a.kq)("",!0),(0,a._)("div",pt,["flashing"!=n.value?((0,a.wg)(),(0,a.j4)(u,{key:0,size:"large",type:null!=i.value&&100==Math.floor(i.value)?"default":"primary",ghost:null!=i.value&&100==Math.floor(i.value),disabled:!s.value,loading:"connecting"==n.value,onClick:w},{default:(0,a.w5)((()=>[wt])),_:1},8,["type","ghost","disabled","loading"])):(0,a.kq)("",!0)])]),gt],64)}}});const vt=mt;var jt=vt;(0,i.ri)(jt).use(n.ZP).mount("#app")},6700:function(t,e,s){var i={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":2819,"./hi.js":2819,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":3926,"./kn.js":3926,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":7930,"./se.js":7930,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function n(t){var e=a(t);return s(e)}function a(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id=6700},8752:function(){},9862:function(){},964:function(){},7504:function(){}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var a=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(a.exports,a,a.exports,s),a.loaded=!0,a.exports}s.m=t,function(){var t=[];s.O=function(e,i,n,a){if(!i){var r=1/0;for(h=0;h<t.length;h++){i=t[h][0],n=t[h][1],a=t[h][2];for(var o=!0,l=0;l<i.length;l++)(!1&a||r>=a)&&Object.keys(s.O).every((function(t){return s.O[t](i[l])}))?i.splice(l--,1):(o=!1,a<r&&(r=a));if(o){t.splice(h--,1);var c=n();void 0!==c&&(e=c)}}return e}a=a||0;for(var h=t.length;h>0&&t[h-1][2]>a;h--)t[h]=t[h-1];t[h]=[i,n,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};s.t=function(i,n){if(1&n&&(i=this(i)),8&n)return i;if("object"===typeof i&&i){if(4&n&&i.__esModule)return i;if(16&n&&"function"===typeof i.then)return i}var a=Object.create(null);s.r(a);var r={};t=t||[null,e({}),e([]),e(e)];for(var o=2&n&&i;"object"==typeof o&&!~t.indexOf(o);o=e(o))Object.getOwnPropertyNames(o).forEach((function(t){r[t]=function(){return i[t]}}));return r["default"]=function(){return i},s.d(a,r),a}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,i){return s.f[i](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+{458:"stub_flasher_32",468:"stub_flasher_8266",685:"stub_flasher_32s2",784:"stub_flasher_32c3"}[t]+"."+{458:"bbea685f",468:"16b93eb1",685:"e75e3e43",784:"7903a871"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+{143:"app",998:"chunk-vendors"}[t]+"."+{143:"ae3844fd",998:"0c8e554a"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="web-esptool:";s.l=function(i,n,a,r){if(t[i])t[i].push(n);else{var o,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),h=0;h<c.length;h++){var u=c[h];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==e+a){o=u;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",e+a),o.src=i),t[i]=[n];var _=function(e,s){o.onerror=o.onload=null,clearTimeout(d);var n=t[i];if(delete t[i],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(t){return t(s)})),e)return e(s)},d=setTimeout(_.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=_.bind(null,o.onerror),o.onload=_.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){s.p="/"}(),function(){var t={143:0};s.f.j=function(e,i){var n=s.o(t,e)?t[e]:void 0;if(0!==n)if(n)i.push(n[2]);else{var a=new Promise((function(s,i){n=t[e]=[s,i]}));i.push(n[2]=a);var r=s.p+s.u(e),o=new Error,l=function(i){if(s.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var a=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;o.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",o.name="ChunkLoadError",o.type=a,o.request=r,n[1](o)}};s.l(r,l,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,a,r=i[0],o=i[1],l=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(l)var h=l(s)}for(e&&e(i);c<r.length;c++)a=r[c],s.o(t,a)&&t[a]&&t[a][0](),t[r[c]]=0;return s.O(h)},i=self["webpackChunkweb_esptool"]=self["webpackChunkweb_esptool"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(1357)}));i=s.O(i)})();
//# sourceMappingURL=app.c92d01b5.js.map