package uk.co.idinetwork.core.model.json;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.annotate.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown=true)
public class AtomT {	
	@JsonProperty("$t")
	private String t;

	public String getT() {
		return t;
	}

	public void setT(String t) {
		this.t = t;
	}
}
