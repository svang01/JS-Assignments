let appData = {
  name: "Gmail",
  mailboxes: [
      "inbox",
      "starred",
      "snoozed",
      "important",
      "sent",
      "drafts",
      ["all mail",
      "spam",
      "trash",
      "manage labels",]
  ],
  inbox:[
      {from: "Shattv", status: "read", message: "Hello"},
      {from: "Shatt Vang", status: "read", message: "Hello"},
      {from: "Shatt Vaj", status: "read", message: "HI!"},
  ],
  outbox: [
      {to: "Hector", status: "sent", subject:"JS is Hard"},
      {to: "Brandon" , status: "sent", subject: "WHere are you?"},
      {to: "TA's", status: "sent", subject: "Help!"},
  ],
  
  drafts: [
      {to: "Erin", status: "drafts", subject: "Should I Run"},
  ],
}
console.log(appData.mailboxes)

console.log(appData.inbox)

console.log(appData.inbox[1].message)

appData.drafts[0].status = "sent";
console.log(appData.drafts[0])

let justSent = appData.drafts.pop()

console.log(justSent)

appData.outbox.push(justSent)
console.log(appData.outbox)

appData.drafts[1]= {to: "Myself", status:"Draft", subject: "RUN"}
console.log(appData.drafts) 