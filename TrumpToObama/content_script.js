walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if ((node.tagName && (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'))
	    || (node.classList && node.classList.contains('ace_editor'))) {
		return;
	}

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

    v = v.replace(/\bDonald Trump\b/g, "90cf1a8b9c17");
    v = v.replace(/\bMelania Trump\b/g, "8f49a3e3f233");
    v = v.replace(/\bTrump\b/g, "fb292124aa5f");
    v = v.replace(/\bThe Donald\b/g, "Obama");
    v = v.replace(/\bMike Pence\b/g, "6c029f63c241");
    v = v.replace(/\bPence\b/g, "9966eb73e6bd");
    v = v.replace(/\bGOP\b/g, "928946d7a205");
    v = v.replace(/\brepublicans\b/g, "9571a1c8e07d");
    v = v.replace(/\bRepublicans\b/g, "e0b000d9cef1");
    v = v.replace(/\bconservatives\b/g, "311f550a5c0e");
    v = v.replace(/\bConservatives\b/g, "603eb9f90207");
    v = v.replace(/\bconservative\b/g, "b94355d5effb");
    v = v.replace(/\bConservative\b/g, "54863d1960de");
    v = v.replace(/\bRight\b/g, "1bb6207194c0");
    v = v.replace(/\bright\b/g, "0c9b65327808");
    v = v.replace(/\bWhite people\b/g, "3d18f3ea8666");
    v = v.replace(/\bwhite people\b/g, "728477d99220");
    v = v.replace(/\bWhites\b/g, "a9e65be3f3a7");
    v = v.replace(/\bwhites\b/g, "ed2b9d4c1b7d");
    v = v.replace(/\bWhite voters\b/g, "f6d8d0756455");
    v = v.replace(/\bwhite voters\b/g, "721d694c0ecd");

    v = v.replace(/\bBarack Obama\b/g, "Donald Trump");
    v = v.replace(/\bMichelle Obama\b/g, "Melania Trump");
    v = v.replace(/\bObama\b/g, "Trump");
    v = v.replace(/\bJoe Biden\b/g, "Mike Pence");
    v = v.replace(/\bBiden\b/g, "Pence");
    v = v.replace(/\bDNC\b/g, "GOP");
    v = v.replace(/\bdemocrats\b/g, "republicans");
    v = v.replace(/\bDemocrats\b/g, "Republicans");
    v = v.replace(/\bdems\b/g, "republicans");
    v = v.replace(/\bDems\b/g, "Republicans");
    v = v.replace(/\bliberals\b/g, "conservatives");
    v = v.replace(/\bLiberals\b/g, "Conservatives");
    v = v.replace(/\bliberal\b/g, "conservative");
    v = v.replace(/\bLiberal\b/g, "Conservative");
    v = v.replace(/\blibs\b/g, "conservatives");
    v = v.replace(/\bLibs\b/g, "Conservatives");
    v = v.replace(/\bLeft\b/g, "Right");
    v = v.replace(/\bleft\b/g, "right");
    v = v.replace(/\bHillary Clinton\b/g, "Donald Trump");
    v = v.replace(/\bHillary\b/g, "Donald Trump");
    v = v.replace(/\bBill Clinton\b/g, "bbaf19059a58");
    v = v.replace(/\bClinton\b/g, "Trump");
    v = v.replace(/\bbbaf19059a58\b/g, "Bill Clinton");
    v = v.replace(/\bBlack people\b/g, "White people");
    v = v.replace(/\bblack people\b/g, "white people");
    v = v.replace(/\bBlacks\b/g, "Whites");
    v = v.replace(/\bblacks\b/g, "whites");
    v = v.replace(/\bBlack voters\b/g, "White voters");
    v = v.replace(/\bblack voters\b/g, "white voters");

	v = v.replace(/\b90cf1a8b9c17\b/g, "Barack Obama");
    v = v.replace(/\b8f49a3e3f233\b/g, "Michelle Obama");
    v = v.replace(/\bfb292124aa5f\b/g, "Obama");
    v = v.replace(/\b6c029f63c241\b/g, "Joe Biden");
    v = v.replace(/\b9966eb73e6bd\b/g, "Biden");
    v = v.replace(/\b928946d7a205\b/g, "DNC");
    v = v.replace(/\b9571a1c8e07d\b/g, "democrats");
    v = v.replace(/\be0b000d9cef1\b/g, "Democrats");
    v = v.replace(/\b311f550a5c0e\b/g, "liberals");
    v = v.replace(/\b603eb9f90207\b/g, "Liberals");
    v = v.replace(/\bb94355d5effb\b/g, "liberal");
    v = v.replace(/\b54863d1960de\b/g, "Liberal");
    v = v.replace(/\b1bb6207194c0\b/g, "Left");
    v = v.replace(/\b0c9b65327808\b/g, "left");
    v = v.replace(/\b3d18f3ea8666\b/g, "Black people");
    v = v.replace(/\b728477d99220\b/g, "black people");
    v = v.replace(/\ba9e65be3f3a7\b/g, "Blacks");
    v = v.replace(/\bed2b9d4c1b7d\b/g, "blacks");
    v = v.replace(/\bf6d8d0756455\b/g, "Black voters");
    v = v.replace(/\b721d694c0ecd\b/g, "black voters");

	textNode.nodeValue = v;
}

