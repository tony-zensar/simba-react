import { r as registerInstance, h, g as getElement } from './index-0e981b19.js';

const Config = {
  responseUrl: 'http://localhost:5000/get_response',
  feedbackUrl: 'http://localhost:5000/save_feedback',
  tokenUrl: 'http://localhost:5000/get_token',

  getFileUrl: 'http://localhost:5000/open_file',

  chatSecretKey: '7c7a412d-2057-4fdb-824c-fe4f780a6147',

  headerLogo: 'simba-react/assets/images/simba_bot.png',
  headerText: 'Smart Assistant',
  headerBgColor: '#FFFFFF',
  userLogo: 'simba-react/assets/images/simba_user.png',
  botLogo: 'simba-react/assets/images/simba_bot.png',
  userMsgBgColor: '#F3F3F7',
  botBgColor: '#f6f6e3',
  innerBoxColor: '#ffffff',
  sendBgColor: '#ffffff',
  headerTextColor: '#0a2367',
  botTextColor: '#000E1A',
  userMsgColor: '#000E1A',

  feedbackColor: 'black',

  refinedQueryColor: 'black',
  sourceColor: 'black',

  sendSymbolColor: '#6e6767',

  showSource: true,
  showRefinedQuery: true,
  showFeedback: true,

  chatIcon: 'far fa-comment',
  chatIconBg: '#fefcfc',
  chatIconColor: '#0a2367',
  closeIconColor: '#0a2367',
  botText: 'Hi, How may I assist you today ?',
};

const smartAssistantCss =
  '@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");.body{font-family:\'LightCn\', sans-serif}h1,h2,h3,h4,h5,h6{font-family:\'YourFont-Bold\', sans-serif}@media only screen and (max-width: 400px){.circular-icon{border-radius:50%;padding:10px;transition:background-color 0.3s ease}.chat-icon{position:fixed;bottom:2vh;right:2vw;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:999}.down-icon{position:fixed;height:4vh;width:8vw;background-color:#e80c31;border-radius:30px;bottom:31.5vh;color:white;font-size:2vh;right:5%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:999}.inner-box{display:flex;flex-direction:column;width:94vw;border:1px solid #ccc;border-radius:10px;overflow:hidden;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.2);margin-left:0;margin-top:0;}.chatbot-header{height:3.5vh;display:flex;justify-content:space-between;align-items:center;padding:1.4vh;font-weight:bold}.header-content{display:flex;align-items:center}.bot-logo{height:40px;width:40px;margin-right:10px;border-radius:50%}.bot-name{margin-left:60px;text-align:center;font-family:sans-serif;font-size:16px}.close-icon{cursor:pointer;font-size:24px;margin-right:10px;display:flex}.App{display:flex;flex-direction:column;height:42vh;padding:1vw}.chat-container{flex-grow:1;overflow:auto;height:100px}.chat-container::-webkit-scrollbar-track{background-color:transparent}.chat-container::-webkit-scrollbar{width:8px;background-color:transparent}.chat-container::-webkit-scrollbar-thumb{background-color:transparent;border-radius:4px;}.chat-container::-webkit-scrollbar-thumb:hover{background-color:rgba(0, 0, 0, 0.3);}.message{display:flex;flex-direction:column;margin:5px;align-items:baseline}.bot-icon{height:25px;width:25px;border-radius:50%;object-fit:cover;}.user-message{align-self:flex-end;padding:8px;border-radius:10px;margin-bottom:5px;font-family:\'Roman\';font-size:14px}.bot-message{padding:8px;border-radius:10px;margin-bottom:5px;font-family:\'Roman\';font-size:14px;word-wrap:break-word;max-width:360px;white-space:pre-line}.feedback-icon{display:flex;gap:15px}.thumbs-up-icon,.thumbs-down-icon{transform:scale(1.1);transition:transform 0.3s}.default-icon{transform:scale(1)}.refined-query{font-style:italic;font-size:12px;color:#888;align-self:flex-end}.input-container{display:flex;align-items:center;padding:1.5vh;height:3vh;gap:5px;border-top:2px solid #ccc}input[type="text"]{flex:1;padding:10px;border:1px solid #ccc;border-radius:20px;font-family:\'Roman\';font-size:14px}.user-icon{margin:2px 6px;align-self:flex-end}.user-bot-icon{height:25px;width:25px;border-radius:50%;object-fit:cover}.empty-input{border:1px solid #e80c31;color:#e80c31}.empty-input::placeholder{color:#e80c31}.chatbot-overlay{position:fixed;right:3%;bottom:36%;background-color:white;z-index:999}.send-icon{font-size:20px;cursor:pointer}}@media only screen and (min-width: 400px) and (max-width: 600px){.circular-icon{border-radius:50%;padding:10px;transition:background-color 0.3s ease}.chat-icon{position:fixed;bottom:2vh;right:2vw;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:999}.down-icon{position:fixed;height:5vh;width:10vw;background-color:#e80c31;border-radius:30px;bottom:37vh;color:white;font-size:3vh;right:4%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:999}.inner-box{display:flex;flex-direction:column;width:94vw;border:1px solid #ccc;border-radius:10px;overflow:hidden;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.2);margin-left:0;margin-top:0;}.chatbot-header{height:4vh;display:flex;justify-content:space-between;align-items:center;padding:1.4vh;font-weight:bold}.header-content{display:flex;align-items:center}.bot-logo{height:40px;width:40px;margin-right:10px;border-radius:50%}.bot-name{text-align:center;margin-left:60px;font-family:sans-serif;font-size:16px}.close-icon{cursor:pointer;font-size:24px;margin-right:10px;display:flex}.App{display:flex;flex-direction:column;height:39vh;padding:1vw}.chat-container{flex-grow:1;overflow:auto;height:100px}.chat-container::-webkit-scrollbar-track{background-color:transparent}.chat-container::-webkit-scrollbar{width:8px;background-color:transparent}.chat-container::-webkit-scrollbar-thumb{background-color:transparent;border-radius:4px;}.chat-container::-webkit-scrollbar-thumb:hover{background-color:rgba(0, 0, 0, 0.3);}.message{display:flex;flex-direction:column;margin:5px;align-items:baseline}.bot-icon{height:25px;width:25px;border-radius:50%;object-fit:cover;}.user-message{align-self:flex-end;padding:8px;border-radius:10px;margin-bottom:5px;font-family:\'Roman\';font-size:14px}.bot-message{padding:8px;border-radius:10px;margin-bottom:5px;font-family:\'Roman\';font-size:14px;word-wrap:break-word;max-width:360px;white-space:pre-line}.feedback-icon{display:flex;gap:15px}.thumbs-up-icon,.thumbs-down-icon{transform:scale(1.1);transition:transform 0.3s}.default-icon{transform:scale(1)}.refined-query{font-style:italic;font-size:12px;color:#888;align-self:flex-end}.input-container{display:flex;align-items:center;padding:2vh;height:2vh;gap:5px;border-top:2px solid #ccc}input[type="text"]{flex:1;padding:10px;border:1px solid #ccc;border-radius:20px;font-family:\'Roman\';font-size:14px}.user-icon{margin:2px 6px;align-self:flex-end}.user-bot-icon{height:25px;width:25px;border-radius:50%;object-fit:cover}.empty-input{border:1px solid #e80c31;color:#e80c31}.empty-input::placeholder{color:#e80c31}.chatbot-overlay{position:fixed;right:3%;bottom:43%;background-color:white;z-index:999}.send-icon{font-size:20px;cursor:pointer}}@media only screen and (min-width:601px){.circular-icon{border-radius:50%;padding:10px;transition:background-color 0.3s ease}.chat-icon{position:fixed;bottom:2vh;right:2vw;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:999}.down-icon{position:fixed;height:6%;width:3%;background-color:#e80c31;border-radius:20px;bottom:2px;color:white;font-size:3vh;right:4%;display:flex;align-items:center;justify-content:center;cursor:pointer}.inner-box{display:flex;flex-direction:column;border:1px solid #ccc;border-radius:10px;overflow:hidden;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.2);width:416px;height:420px;margin-left:0;margin-top:0;}.chatbot-header{height:7vh;display:flex;justify-content:space-between;align-items:center;padding:1.4vh;font-weight:bold}.header-content{display:flex;align-items:center}.bot-logo{height:40px;width:40px;margin-right:10px;border-radius:50%}.bot-name{margin-left:60px;text-align:center;font-family:sans-serif;font-size:16px}.close-icon{cursor:pointer;font-size:24px;margin-right:10px;display:flex}.App{display:flex;flex-direction:column;height:73%;padding:1vw}.chat-container{flex-grow:1;overflow:auto;height:100px}.chat-container::-webkit-scrollbar-track{background-color:transparent}.chat-container::-webkit-scrollbar{width:8px;background-color:transparent}.chat-container::-webkit-scrollbar-thumb{background-color:transparent;border-radius:4px;}.chat-container::-webkit-scrollbar-thumb:hover{background-color:rgba(0, 0, 0, 0.3);}.message{display:flex;flex-direction:column;margin:5px;align-items:baseline}.bot-icon{height:25px;width:25px;border-radius:50%;object-fit:cover;}.user-message{align-self:flex-end;padding:8px;border-radius:10px;margin-bottom:5px;font-family:\'Roman\';font-size:14px}.bot-message{display:flex;padding:8px;border-radius:10px;margin-bottom:5px;font-family:\'Roman\';font-size:14px;word-wrap:break-word;max-width:360px;white-space:pre-line}.feedback-icon{display:flex;gap:15px}.thumbs-up-icon,.thumbs-down-icon{transform:scale(1.1);transition:transform 0.3s}.default-icon{transform:scale(1)}.refined-query{font-style:italic;font-size:12px;color:#888;align-self:flex-end}.input-container{display:flex;align-items:center;padding:2vh;height:5vh;gap:5px;border-top:2px solid #ccc}input[type="text"]{flex:1;padding:10px;border:1px solid #ccc;border-radius:20px;font-family:\'Roman\';font-size:14px}.user-icon{margin:2px 6px;align-self:flex-end}.user-bot-icon{height:25px;width:25px;border-radius:50%;object-fit:cover}.empty-input{border:1px solid #e80c31;color:#e80c31}.empty-input::placeholder{color:#e80c31}.chatbot-overlay{position:fixed;right:4%;bottom:10%;background-color:white;z-index:999}.send-icon{font-size:20px;cursor:pointer}}@font-face{font-family:"body-xl";src:url("../../assets/fonts/FrutigerLTStd-Roman.eot");src:url("../../assets/fonts/FrutigerLTStd-Roman.eot?#iefix") format(\'embedded-opentype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.woff") format(\'woff\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.woff2") format(\'woff2\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.ttf") format(\'truetype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.svg#FrutigerLTStd-Roman") format(\'svg\');font-size:24px;font-style:normal;font-weight:400;line-height:150%;letter-spacing:0}@font-face{font-family:"body-xl-emphasis";src:url("../../assets/fonts/FrutigerLTStd-Bold.eot");src:url("../../assets/fonts/FrutigerLTStd-Bold.eot?#iefix") format(\'embedded-opentype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.woff") format(\'woff\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.woff2") format(\'woff2\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.ttf") format(\'truetype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.svg#FrutigerLTStd-Bold") format(\'svg\');font-size:24px;font-style:normal;font-weight:700;line-height:150%;letter-spacing:0}@font-face{font-family:"body-large";src:url("../../assets/fonts/FrutigerLTStd-Roman.eot");src:url("../../assets/fonts/FrutigerLTStd-Roman.eot?#iefix") format(\'embedded-opentype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.woff") format(\'woff\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.woff2") format(\'woff2\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.ttf") format(\'truetype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.svg#FrutigerLTStd-Roman") format(\'svg\');font-size:16px;font-style:normal;font-weight:400;line-height:150%;letter-spacing:-0.16px}@font-face{font-family:"body-large-emphasis";src:url("../../assets/fonts/FrutigerLTStd-Bold.eot");src:url("../../assets/fonts/FrutigerLTStd-Bold.eot?#iefix") format(\'embedded-opentype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.woff") format(\'woff\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.woff2") format(\'woff2\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.ttf") format(\'truetype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.svg#FrutigerLTStd-Bold") format(\'svg\');font-size:16px;font-style:normal;font-weight:700;line-height:150%;letter-spacing:-0.16px}@font-face{font-family:"body-medium";src:url("../../assets/fonts/FrutigerLTStd-Roman.eot");src:url("../../assets/fonts/FrutigerLTStd-Roman.eot?#iefix") format(\'embedded-opentype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.woff") format(\'woff\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.woff2") format(\'woff2\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.ttf") format(\'truetype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.svg#FrutigerLTStd-Roman") format(\'svg\');font-size:14px;font-style:normal;font-weight:400;line-height:150%;letter-spacing:-0.14px}@font-face{font-family:"body-medium-emphasis";src:url("../../assets/fonts/FrutigerLTStd-Bold.eot");src:url("../../assets/fonts/FrutigerLTStd-Bold.eot?#iefix") format(\'embedded-opentype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.woff") format(\'woff\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.woff2") format(\'woff2\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.ttf") format(\'truetype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.svg#FrutigerLTStd-Bold") format(\'svg\');font-size:14px;font-style:normal;font-weight:700;line-height:150%;letter-spacing:-0.14px}@font-face{font-family:"body-small";src:url("../../assets/fonts/FrutigerLTStd-Roman.eot");src:url("../../assets/fonts/FrutigerLTStd-Roman.eot?#iefix") format(\'embedded-opentype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.woff") format(\'woff\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.woff2") format(\'woff2\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.ttf") format(\'truetype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.svg#FrutigerLTStd-Roman") format(\'svg\');font-size:12px;font-style:normal;font-weight:400;line-height:150%;letter-spacing:0}@font-face{font-family:"body-small-emphasis";font-size:12px;font-style:normal;font-weight:700;line-height:150%;letter-spacing:0;src:url("../../assets/fonts/FrutigerLTStd-Bold.eot");src:url("../../assets/fonts/FrutigerLTStd-Bold.eot?#iefix") format(\'embedded-opentype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.woff") format(\'woff\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.woff2") format(\'woff2\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.ttf") format(\'truetype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.svg#FrutigerLTStd-Bold") format(\'svg\')}@font-face{font-family:"body-nlf";src:url("../../assets/fonts/FrutigerLTStd-Roman.eot");src:url("../../assets/fonts/FrutigerLTStd-Roman.eot?#iefix") format(\'embedded-opentype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.woff") format(\'woff\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.woff2") format(\'woff2\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.ttf") format(\'truetype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.svg#FrutigerLTStd-Roman") format(\'svg\');font-size:16px;font-style:normal;font-weight:400;line-height:200%;letter-spacing:-1%}@font-face{font-family:\'FrutigerLTStd-Roman\';src:url("../../assets/fonts/FrutigerLTStd-Roman.eot");src:url("../../assets/fonts/FrutigerLTStd-Roman.eot?#iefix") format(\'embedded-opentype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.woff") format(\'woff\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.woff2") format(\'woff2\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.ttf") format(\'truetype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Roman.svg#FrutigerLTStd-Roman") format(\'svg\')}@font-face{font-family:\'FrutigerLTStd-LightCn\';src:url("../../assets/fonts/FrutigerLTStd-LightCn.eot");src:url("../../assets/fonts/FrutigerLTStd-LightCn.eot?#iefix") format(\'embedded-opentype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-LightCn.svg#FrutigerLTStd-LightCn") format(\'svg\'),\r\n       url("../../assets/fonts/FrutigerLTStd-LightCn.ttf") format(\'truetype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-LightCn.woff") format(\'woff\'),\r\n       url("../../assets/fonts/FrutigerLTStd-LightCn.woff2") format(\'woff2\')}@font-face{font-family:\'FrutigerLTStd-Cn\';src:url("../../assets/fonts/FrutigerLTStd-Cn.eot");src:url("../../assets/fonts/FrutigerLTStd-Cn.eot?#iefix") format(\'embedded-opentype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Cn.svg#FrutigerLTStd-Cn") format(\'svg\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Cn.ttf") format(\'truetype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Cn.woff") format(\'woff\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Cn.woff2") format(\'woff2\')}@font-face{font-family:\'FrutigerLTStd-Bold\';src:url("../../assets/fonts/FrutigerLTStd-Bold.eot");src:url("../../assets/fonts/FrutigerLTStd-Bold.eot?#iefix") format(\'embedded-opentype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.svg#FrutigerLTStd-Bold") format(\'svg\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.ttf") format(\'truetype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.woff") format(\'woff\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Bold.woff2") format(\'woff2\')}@font-face{font-family:\'FrutigerLTStd-Black\';src:url("../../assets/fonts/FrutigerLTStd-Black.eot");src:url("../../assets/fonts/FrutigerLTStd-Black.eot?#iefix") format(\'embedded-opentype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Black.svg#FrutigerLTStd-Black") format(\'svg\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Black.ttf") format(\'truetype\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Black.woff") format(\'woff\'),\r\n       url("../../assets/fonts/FrutigerLTStd-Black.woff2") format(\'woff2\')}';

const SmartAssistant = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scrollToBottom = () => {
      const chatContainer =
        this.element.shadowRoot.querySelector('.chat-container');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    };
    this.handleRefreshSession = () => {
      this.chatHistory = [];
      this.query = '';
      this.isChatbotVisible = !this.isChatbotVisible;
    };
    this.handleChatClick = () => {
      this.getToken();
      this.isChatbotVisible = !this.isChatbotVisible;
    };
    // handleDocumentPathClick = async (event, filePath) => {
    //   event.preventDefault(); // Prevent default link behavior
    //   try {
    //     const folderPath = "C:\\CISCO Fresh start\\Backends\\DEMO March 1\\Backend\\files\\cisco_samp_docx\\";
    //     // const fileName = "example_file.txt"
    //     const file = filePath.split('\\').pop();
    //     const fileExtension = filePath.split('.').pop()?.toLowerCase() || '';
    //     console.log(fileExtension)
    //     if (fileExtension === 'ppt' || fileExtension === 'pptx' || fileExtension === 'xls' || fileExtension === 'xlsx' || fileExtension === 'docx') {
    //       // Construct the SharePoint URL based on the file name
    //       console.log("inside if")
    //       const sharePointBaseUrl = 'https://cisco-my.sharepoint.com/:f:/r/personal/varshav_cisco_com/Documents/Shared_Cisco_Files/';
    //       const sharePointURL = `${sharePointBaseUrl}/${file}`;
    //       console.log(sharePointURL)
    //       // Redirect the user to the SharePoint URL
    //       window.open(sharePointURL, '_blank');
    //     }
    //     else {
    //       const fullPath = folderPath.concat(filePath);
    //       console.log(fullPath)
    //       const response = await fetch(Config.getFileUrl, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           filePath: fullPath,
    //           // Include any additional data you need to send to the backend
    //         }),
    //       });
    //       if (response.ok) {
    //         const fileBlob = await response.blob();
    //         console.log(filePath)
    //         const fileUrl = URL.createObjectURL(fileBlob);
    //         window.open(fileUrl, '_blank');
    //         // Handle success response from the backend
    //       } else {
    //         console.error('Error handling document path click');
    //       }
    //     }
    //   }
    //   catch (error) {
    //     console.error('Error handling document path click:', error);
    //     // Handle network errors or other exceptions
    //   }
    // };
    this.toggleRefinedQueryVisibility = () => {
      if (
        !this.refinedQueryHidden ||
        this.refinedQuery !== 'Invalid input, try again'
      ) {
        this.refinedQueryHidden = !this.refinedQueryHidden;
      }
    };
    this.toggleShowSource = () => {
      this.showSource = !this.showSource;
    };
    this.handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        this.handleQuerySubmit();
      }
    };
    this.page = 'none';
    this.isChatbotVisible = false;
    this.query = '';
    this.feedback = [];
    this.chatHistory = [];
    this.refinedQuery = '';
    this.refinedQueryHidden = true;
    this.isLoading = false;
    this.showEmptyQueryMessage = false;
    this.currentResponseIndex = -1;
    this.isProblem = false;
    this.selectedFeedback = [];
    this.feedbackSubmitted = [];
    this.errorMessage = '';
    this.session_id = null;
    this.starttime = null;
    this.showSource = true;
    this.sourceSet = [];
    this.currentQuestionIndex = -1;
    this.chat_secretkey = undefined;
    this.isOpen = false;
  }
  toggleChatbot() {
    this.isOpen = !this.isOpen;
  }
  handleEscape() {
    this.isOpen = false;
  }
  componentWillLoad() {
    // Set initial value for chat_secretkey
    this.chat_secretkey = Config.chatSecretKey;
  }
  async getToken() {
    try {
      const response = await fetch(Config.tokenUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('Local_Session_Key', token);
        this.session_id = data.session_id;
        this.starttime = data.session_start_time;
      } else {
        const errorData = await response.json();
        console.error(
          `Failed to fetch token: ${response.statusText}`,
          errorData
        );
        if (response.status === 401) {
          console.error(
            'Unauthorized: You may not have the required permissions.'
          );
        } else if (response.status === 404) {
          console.error('Resource not found: The endpoint does not exist.');
        } else {
          console.error('Unknown error occurred.');
        }
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.error('Request aborted: Timeout or user interruption.');
      } else {
        console.error('Network error:', error.message);
      }
    }
  }
  async handleQuerySubmit() {
    try {
      if (this.query.trim() === '') {
        this.showEmptyQueryMessage = true;
        return;
      }
      // Save the current query before sending the request
      const currentQuery = this.query;
      // Clear the query in the UI immediately after submitting
      this.query = '';
      this.errorMessage = null;
      this.showEmptyQueryMessage = false;
      const newChatHistory = [...this.chatHistory, { user: currentQuery }];
      this.chatHistory = newChatHistory;
      this.isLoading = true;
      this.currentResponseIndex = newChatHistory.length - 1;
      this.page = location.href.split('/')[3];
      const response = await fetch(Config.responseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${localStorage.getItem('Local_Session_Key')}`,
          chatSecretKey: this.chat_secretkey,
        },
        body: JSON.stringify({
          query: currentQuery,
          session_id: this.session_id,
          session_start_time: this.starttime,
          page: this.page,
        }),
      });
      if (!response.ok) {
        if (response.status === 401) {
          this.isLoading = false;
          this.errorMessage =
            'Your session is timed out. Please close the chat and log in again.';
          return;
        }
        const errorData = await response.json();
        console.error('Failed to get a response:', errorData);
        this.isLoading = false;
        this.errorMessage = 'Failed to get a response. Please try again.';
        return;
      }
      const data = await response.json();
      const originalResponse = data.response;
      const containsBrackets = /\(|\)|\[|\]/.test(originalResponse);
      let cleanedResponse = originalResponse;
      if (containsBrackets) {
        cleanedResponse = cleanedResponse
          .replace(/\(|\)/g, ' ')
          .replace(/\[|\]/g, ' ');
      }
      // ... Logic for converting URLs to links
      function convertUrlsToLinks(text) {
        const urlRegex = /(https?:\/\/[^\s)\]"\,]+|www\.[^\s)\]"\,]+)/g;
        const parts = text.split(urlRegex);
        return parts.map((part, index) => {
          if (urlRegex.test(part)) {
            if (part.startsWith('https://www.')) {
              // Preserve URLs that start with "https://www."
              return h(
                'a',
                {
                  key: index,
                  href: part,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                part
              );
            } else {
              // Check if the URL starts with "www." and add "http://" if it doesn't start with a protocol
              if (/^www\./.test(part)) {
                part = `http://${part}`;
              } else if (
                !part.startsWith('http://') &&
                !part.startsWith('https://')
              ) {
                // If the URL doesn't start with a protocol, assume it's "http://"
                part = `http://${part}`;
              }
              // Remove a trailing period (".") if present
              part = part.replace(/\.$/, '');
              return h(
                'a',
                {
                  key: index,
                  href: part,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                part
              );
            }
          } else {
            return part;
          }
        });
      }
      //const botResponse = convertUrlsToLinks(cleanedResponse);
      const botResponse = originalResponse;
      newChatHistory[newChatHistory.length - 1].bot = botResponse;
      newChatHistory[newChatHistory.length - 1].row_id = data.row_id;
      this.chatHistory = newChatHistory;
      this.isLoading = false;
      this.isProblem = data.isProblem;
      this.sourceSet = data.source_set;
      if (data.refinedQuery) {
        this.refinedQuery = data.refinedQuery;
      }
    } catch (error) {
      console.error('Network error:', error);
      this.isLoading = false;
      this.errorMessage =
        'Network error. Please check your connection and try again.';
    }
    this.feedback = [];
    this.feedbackSubmitted = [];
    const lastIndex = this.chatHistory.length - 2;
    console.log('last indexxx===', lastIndex);
    // Save feedback if available
    if (this.selectedFeedback[lastIndex] !== null) {
      this.saveFeedbackToDatabase(lastIndex, this.selectedFeedback[lastIndex]);
    }
  }
  async saveFeedbackToDatabase(index, feedbackLabel) {
    try {
      const response = await fetch(Config.feedbackUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          session_id: this.session_id,
          question: this.chatHistory[index].user,
          answer: this.chatHistory[index].bot,
          feedback: feedbackLabel,
        }),
      });
      if (response.ok) {
        console.log('Feedback saved successfully');
        const newFeedbackSubmitted = [...this.feedbackSubmitted];
        newFeedbackSubmitted[index] = true;
        this.feedbackSubmitted = newFeedbackSubmitted;
      } else {
        const errorData = await response.json();
        console.error('Failed to save feedback:', errorData);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  }
  async handleFeedback(index, isPositive) {
    try {
      let feedbackLabel = '';
      if (isPositive === true) {
        this.chatHistory[index].isThumbsUpClicked =
          !this.chatHistory[index].isThumbsUpClicked;
        if (this.chatHistory[index].isThumbsUpClicked) {
          this.chatHistory[index].isThumbsDownClicked = false;
        }
        feedbackLabel = 'GOOD';
      } else if (isPositive === false) {
        this.chatHistory[index].isThumbsDownClicked =
          !this.chatHistory[index].isThumbsDownClicked;
        if (this.chatHistory[index].isThumbsDownClicked) {
          this.chatHistory[index].isThumbsUpClicked = false;
        }
        feedbackLabel = 'BAD';
      } else {
        feedbackLabel = 'NEUTRAL';
      }
      const newFeedback = [...this.feedback];
      newFeedback[index] = feedbackLabel;
      this.feedback = newFeedback;
      // Keep track of selected feedback
      const newSelectedFeedback = [...this.selectedFeedback];
      newSelectedFeedback[index] = isPositive;
      this.selectedFeedback = newSelectedFeedback;
      // Make an API request to save feedback in the database
      await this.saveFeedbackToDatabase(index, feedbackLabel);
    } catch (error) {
      console.error('An error occurred while handling feedback:', error);
    }
  }
  handleBotMessageClick(botMessage) {
    const copyEvent = new CustomEvent('copyBotMessage', { detail: botMessage });
    this.element.dispatchEvent(copyEvent);
  }
  componentDidUpdate() {
    if (this.isChatbotVisible && this.inputRef) {
      this.inputRef.focus();
    }
    this.scrollToBottom();
  }
  render() {
    return h(
      'div',
      { key: '10e40c232c3880a2e01834efdf110a819aea8b6c', class: 'body' },
      h(
        'div',
        {
          key: '648d07feae2ac6962ddb67737859b327efb90639',
          class: 'chat-icon',
          onClick: !this.isChatbotVisible ? this.handleChatClick : undefined,
        },
        h('img', {
          key: '4006c77ef4651d058fbcbe5da53fbb20c4b12111',
          style: { width: '50px', height: '50px' },
          src: Config.botLogo,
          alt: 'Chatbot Icon',
        })
      ),
      this.isChatbotVisible &&
        h(
          'div',
          { class: 'chatbot-overlay' },
          h(
            'div',
            {
              class: 'inner-box',
              style: { backgroundColor: Config.innerBoxColor },
            },
            h(
              'div',
              null,
              h(
                'div',
                {
                  class: 'chatbot-header',
                  style: {
                    backgroundColor: Config.headerBgColor,
                    color: Config.headerTextColor,
                  },
                },
                h(
                  'div',
                  { class: 'header-content' },
                  h(
                    'div',
                    { class: 'bot-name', style: { marginLeft: '0px' } },
                    Config.headerText
                  ),
                  h(
                    'div',
                    {
                      class: 'close',
                      onClick: this.handleRefreshSession,
                      style: { marginLeft: '250px' },
                    },
                    h('i', {
                      class: 'fas fa-times',
                      style: { color: Config.closeIconColor },
                    })
                  )
                )
              ),
              h('div', { style: { borderTop: '2px solid #ccc' } })
            ),
            h(
              'div',
              { class: 'App' },
              h(
                'div',
                { class: 'chat-container' },
                h(
                  'div',
                  { class: 'message', style: { display: 'flex' } },
                  h(
                    'div',
                    { style: { display: 'inline-block' } },
                    h('img', {
                      class: 'bot-icon',
                      src: Config.botLogo,
                      alt: 'Logo',
                    })
                  ),
                  h(
                    'div',
                    {
                      class: 'bot-message',
                      style: {
                        backgroundColor: Config.botBgColor,
                        color: Config.botTextColor,
                      },
                    },
                    Config.botText
                  )
                ),
                this.chatHistory.map((message, index) =>
                  h(
                    'div',
                    { class: 'message', key: index },
                    message.user &&
                      h(
                        'div',
                        { class: 'user-icon' },
                        h('img', {
                          class: 'user-bot-icon',
                          src: Config.userLogo,
                          alt: 'Logo',
                        })
                      ),
                    h(
                      'div',
                      {
                        class: `user-message ${
                          message.user ? 'user-message-align-end' : ''
                        }`,
                        style: {
                          backgroundColor: Config.userMsgBgColor,
                          color: Config.userMsgColor,
                        },
                      },
                      message.user
                    ),
                    h(
                      'div',
                      null,
                      h('img', {
                        class: 'bot-icon',
                        src: Config.botLogo,
                        alt: 'Logo',
                      })
                    ),
                    h(
                      'div',
                      {
                        class: 'bot-message',
                        style: {
                          backgroundColor: Config.botBgColor,
                          color: Config.botTextColor,
                        },
                      },
                      this.isLoading && index === this.chatHistory.length - 1
                        ? h('i', { class: 'fas fa-spinner fa-spin' })
                        : h('div', null, this.errorMessage),
                      message.bot
                    ),
                    h(
                      'div',
                      { class: 'refined-query' },
                      index === this.chatHistory.length - 1 &&
                        message.bot &&
                        message.bot !== 'Invalid Input, Try Again.' &&
                        h(
                          'div',
                          null,
                          Config.showRefinedQuery &&
                            h(
                              'div',
                              null,
                              this.refinedQueryHidden
                                ? h('i', {
                                    class: 'far fa-eye',
                                    onClick: this.toggleRefinedQueryVisibility,
                                    style: { color: Config.refinedQueryColor },
                                  })
                                : h('i', {
                                    class: 'far fa-eye-slash',
                                    onClick: this.toggleRefinedQueryVisibility,
                                    style: { color: Config.refinedQueryColor },
                                  })
                            ),
                          Config.showSource &&
                            h(
                              'div',
                              null,
                              this.showSource
                                ? h('i', {
                                    class: 'fas fa-link',
                                    onClick: this.toggleShowSource,
                                    style: { color: Config.sourceColor },
                                  })
                                : h('i', {
                                    class: 'far fa-eye-slash',
                                    onClick: this.toggleShowSource,
                                    style: { color: Config.sourceColor },
                                  })
                            ),
                          !this.refinedQueryHidden &&
                            h(
                              'span',
                              {
                                class: 'hidden-query',
                                style: { color: Config.refinedQueryColor },
                              },
                              this.refinedQuery
                            ),
                          h(
                            'span',
                            { class: 'hidden-query' },
                            !this.showSource &&
                              this.sourceSet.map((path, index) =>
                                h(
                                  'span',
                                  {
                                    key: index,
                                    style: { color: Config.sourceColor },
                                  },
                                  h(
                                    'a',
                                    {
                                      href: '#',
                                      style: {
                                        textDecoration: 'none',
                                        color: Config.sourceColor,
                                      },
                                    },
                                    path
                                  ),
                                  index < this.sourceSet.length - 1 && ','
                                )
                              )
                          )
                        )
                    ),
                    h(
                      'div',
                      { key: index },
                      message.bot &&
                        !this.feedbackSubmitted[index] &&
                        index === this.chatHistory.length - 1 &&
                        h(
                          'div',
                          { class: 'feedback-icon' },
                          h(
                            'div',
                            null,
                            Config.showFeedback &&
                              h(
                                'span',
                                {
                                  class: 'thumbs-up',
                                  onClick: () =>
                                    this.handleFeedback(index, true),
                                  style: {
                                    cursor: 'pointer',
                                    color: Config.feedbackColor,
                                  },
                                },
                                h('i', {
                                  class: `fas fa-thumbs-up ${
                                    message.isThumbsUpClicked
                                      ? 'thumbs-up-icon'
                                      : 'default-icon'
                                  }`,
                                })
                              )
                          ),
                          Config.showFeedback &&
                            h(
                              'span',
                              {
                                class: 'thumbs-down',
                                onClick: () =>
                                  this.handleFeedback(index, false),
                                style: {
                                  cursor: 'pointer',
                                  color: Config.feedbackColor,
                                },
                              },
                              h('i', {
                                class: `fas fa-thumbs-down ${
                                  message.isThumbsDownClicked
                                    ? 'thumbs-down-icon'
                                    : 'default-icon'
                                }`,
                              })
                            )
                        )
                    )
                  )
                )
              )
            ),
            h(
              'div',
              { class: 'input-container' },
              h('input', {
                ref: (el) => (this.inputRef = el),
                type: 'text',
                onKeyPress: (event) => this.handleKeyPress(event),
                value: this.query,
                placeholder: this.showEmptyQueryMessage
                  ? 'ENTER VALID QUERY!!!'
                  : 'Type in here...',
                onInput: (event) => {
                  this.query = event.target.value;
                  this.showEmptyQueryMessage = false;
                },
                class: this.showEmptyQueryMessage ? 'empty-input' : '',
                maxLength: 200,
              }),
              h(
                'span',
                {
                  class: 'send-icon',
                  onClick: this.handleQuerySubmit.bind(this),
                  style: { color: Config.sendSymbolColor },
                },
                h('i', {
                  class: 'fas fa-paper-plane circular-icon',
                  style: {
                    backgroundColor: Config.sendBgColor,
                    borderRadius: '50%',
                  },
                })
              )
            )
          )
        )
    );
  }
  get element() {
    return getElement(this);
  }
};
SmartAssistant.style = smartAssistantCss;

export { SmartAssistant as smart_assistant };

//# sourceMappingURL=smart-assistant.entry.js.map
