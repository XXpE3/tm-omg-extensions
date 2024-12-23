let keyValuePairs = {
	'TM_useCurrentCompletionEndpoint': 'https://api.ohmygpt.com/v1/chat/completions',
	'TM_useCurrentAnthropicEndpoint': 'https://apic.ohmygpt.com/v1/messages'
};

for (let key in keyValuePairs) {
  localStorage.setItem(key, keyValuePairs[key]);
}

(function() {
    'use strict';
    var originalFetch = window.fetch;

    window.fetch = function(url, options) {
        if (url === 'https://api.openai.com/v1/audio/speech') {
            url = 'https://api.ohmygpt.com/v1/audio/speech';
        }
        return originalFetch.call(this, url, options);
    };
})();