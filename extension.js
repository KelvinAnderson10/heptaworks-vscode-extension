const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const {Utils} = require('./utils');
const { GIT_URL, TYPE } = require('./constant');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const currentPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
	const util = new Utils();

	// Go Starter Pack
	let goStarterPack = vscode.commands.registerCommand('hepta-works.gostarter', async function () {
		// util.createPack(currentPath, GIT_URL.GO_STARTER_PACK, 'Go Starter', TYPE.GO)
		vscode.window.showInformationMessage('feature coming soon, stay tuned !')
	});

	// Go Professional Pack
	let goProfessionalPack = vscode.commands.registerCommand('hepta-works.goprofessional', function () {
		// util.createPack(currentPath, GIT_URL.GO_PROFESSIONAL_PACK, 'Go Professional', TYPE.GO)
		vscode.window.showInformationMessage('feature coming soon, stay tuned !')
	});

	// React Basic Pack
	let reactBasicPack = vscode.commands.registerCommand('hepta-works.reactbasic', function () {
		util.createPack(currentPath, GIT_URL.REACT_BASIC_PACK, 'React Basic', TYPE.REACT)
	});

	// React Baby Pack
	let reactBabyPack = vscode.commands.registerCommand('hepta-works.reactbaby', function () {
		// util.createPack(currentPath, GIT_URL.REACT_BABY_PACK, 'React Baby', TYPE.REACT)
		vscode.window.showInformationMessage('feature coming soon, stay tuned !')
	});

	// React Designer Pack
	let reactDesignerPack = vscode.commands.registerCommand('hepta-works.reactdesigner', function () {
		// util.createPack(currentPath, GIT_URL.REACT_DESIGNER_PACK, 'React Designer', TYPE.REACT)
		vscode.window.showInformationMessage('feature coming soon, stay tuned !')
	});

	// React Monster Pack
	let reactMonsterPack = vscode.commands.registerCommand('hepta-works.reactmonster', function () {
		// util.createPack(currentPath, GIT_URL.REACT_MONSTER_PACK, 'React Monster', TYPE.REACT)
		vscode.window.showInformationMessage('feature coming soon, stay tuned !')
	});

	context.subscriptions.push(goStarterPack);
	context.subscriptions.push(goProfessionalPack);
	context.subscriptions.push(reactBabyPack);
	context.subscriptions.push(reactDesignerPack);
	context.subscriptions.push(reactMonsterPack);
	context.subscriptions.push(reactBasicPack);

}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
