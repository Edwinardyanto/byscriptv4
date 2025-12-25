const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
};

const getAlertCard = () => document.querySelector(".alert-card");

const clearAlertCardState = () => {
  const card = getAlertCard();
  if (!card) return;
  card.removeAttribute("data-alert-state");
  card.removeAttribute("data-alert-status");
};

const setAlertCardState = (alertState, alertStatus) => {
  const card = getAlertCard();
  if (!card) return;

  if (!alertState || !alertStatus) {
    clearAlertCardState();
    return;
  }

  card.dataset.alertState = alertState;
  card.dataset.alertStatus = alertStatus;
};

export const renderAlerts = (sectionState) => {
  const { data, status } = sectionState;

  if (status === "loading") {
    clearAlertCardState();
    setText('[data-field="alerts.title"]', "Loading alerts...");
    setText('[data-field="alerts.message"]', "");
    setText('[data-field="alerts.type"]', "");
    setText('[data-field="alerts.time"]', "");
    setText('[data-field="alerts.cta"]', "");
    return;
  }

  if (status === "error") {
    clearAlertCardState();
    setText('[data-field="alerts.title"]', "Unable to load alerts");
    setText('[data-field="alerts.message"]', "");
    setText('[data-field="alerts.type"]', "");
    setText('[data-field="alerts.time"]', "");
    setText('[data-field="alerts.cta"]', "");
    return;
  }

  if (!data) {
    clearAlertCardState();
    setText('[data-field="alerts.title"]', "No alerts");
    setText('[data-field="alerts.message"]', "");
    setText('[data-field="alerts.type"]', "");
    setText('[data-field="alerts.time"]', "");
    setText('[data-field="alerts.cta"]', "");
    return;
  }

  setAlertCardState(data.alertState, data.alertStatus);

  setText('[data-field="alerts.title"]', data.title);
  setText('[data-field="alerts.message"]', data.message);
  setText('[data-field="alerts.type"]', data.type);
  setText('[data-field="alerts.time"]', data.time);
  setText('[data-field="alerts.cta"]', data.cta);
};
