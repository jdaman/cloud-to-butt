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

	v = v.replace(/\bDonald Trump\b/g, "Stan Dorsett");
	v = v.replace(/\bTrump Tower\b/g, "Stan's Dark Tower");
    v = v.replace(/\bTrump\b/g, "Stan");
    v = v.replace(/\bMar-a-Lago\b/g, "Stan-a-Lago");
	v = v.replace(/\bGOP\b/g, "Infrastructure Orchestration Team");
    v = v.replace(/\bHillary Clinton\b/g, "Kevin Murphy");
    v = v.replace(/\bBill Clinton\b/g, "XXIDKSOIJS");
    v = v.replace(/\bHillary\b/g, "Kevin");
    v = v.replace(/\bClinton\b/g, "Kevin");
    v = v.replace(/\bXXIDKSOIJS\b/g, "Bill Clinton");
	
	textNode.nodeValue = v;
}

